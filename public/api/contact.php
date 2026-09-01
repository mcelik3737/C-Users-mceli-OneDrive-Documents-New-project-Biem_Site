<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength <= 0 || $contentLength > 25000) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Geçersiz istek boyutu'], JSON_UNESCAPED_UNICODE);
    exit;
}

session_start();
$now = time();
$lastSubmit = (int) ($_SESSION['biem_contact_last_submit'] ?? 0);
if ($lastSubmit > 0 && ($now - $lastSubmit) < 20) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Lütfen kısa bir süre sonra tekrar deneyin.'], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $payload = json_decode((string) file_get_contents('php://input'), true, 32, JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Geçersiz istek'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!empty($payload['website'])) {
    $_SESSION['biem_contact_last_submit'] = $now;
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

function cleanText(mixed $value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = str_replace(["\r", "\0"], '', $text);
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }
    return substr($text, 0, $maxLength);
}

function smtpRead($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    if ($command !== '') {
        fwrite($socket, $command . "\r\n");
    }
    $response = smtpRead($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed with code ' . $code);
    }
    return $response;
}

function smtpSend(array $config, string $to, string $replyTo, string $subject, string $body): bool
{
    $host = trim((string) ($config['smtp_host'] ?? ''));
    $port = (int) ($config['smtp_port'] ?? 0);
    $encryption = strtolower(trim((string) ($config['smtp_encryption'] ?? 'ssl')));
    $username = trim((string) ($config['smtp_username'] ?? ''));
    $password = (string) ($config['smtp_password'] ?? '');
    $fromEmail = trim((string) ($config['from_email'] ?? $username));
    $fromName = trim((string) ($config['from_name'] ?? 'BİEM Web Sitesi'));

    if ($host === '' || $port <= 0 || $username === '' || $password === '' || $fromEmail === '') {
        throw new RuntimeException('SMTP configuration incomplete');
    }

    $transportHost = $encryption === 'ssl' ? 'ssl://' . $host : $host;
    $errno = 0;
    $errstr = '';
    $socket = @stream_socket_client(
        $transportHost . ':' . $port,
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT
    );

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed');
    }

    stream_set_timeout($socket, 15);

    try {
        smtpCommand($socket, '', [220]);
        $serverName = $_SERVER['SERVER_NAME'] ?? 'biemelektronik.com';
        smtpCommand($socket, 'EHLO ' . preg_replace('/[^A-Za-z0-9.\-]/', '', $serverName), [250]);

        if ($encryption === 'tls') {
            smtpCommand($socket, 'STARTTLS', [220]);
            $cryptoOk = @stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            if ($cryptoOk !== true) {
                throw new RuntimeException('SMTP TLS negotiation failed');
            }
            smtpCommand($socket, 'EHLO ' . preg_replace('/[^A-Za-z0-9.\-]/', '', $serverName), [250]);
        }

        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
        smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtpCommand($socket, 'DATA', [354]);

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $encodedFromName . ' <' . $fromEmail . '>',
            'To: <' . $to . '>',
            'Reply-To: ' . $replyTo,
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'X-Mailer: BIEM-Web-SMTP',
        ];

        $safeBody = preg_replace('/^\./m', '..', str_replace(["\r\n", "\r"], "\n", $body));
        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $safeBody) . "\r\n.";
        fwrite($socket, $message . "\r\n");
        $response = smtpRead($socket);
        $code = (int) substr($response, 0, 3);
        if ($code !== 250) {
            throw new RuntimeException('SMTP DATA rejected');
        }

        @smtpCommand($socket, 'QUIT', [221]);
        fclose($socket);
        return true;
    } catch (Throwable $e) {
        if (is_resource($socket)) {
            fclose($socket);
        }
        throw $e;
    }
}

$name = cleanText($payload['name'] ?? '', 120);
$company = cleanText($payload['company'] ?? '', 160);
$phone = cleanText($payload['phone'] ?? '', 60);
$email = cleanText($payload['email'] ?? '', 180);
$subject = cleanText($payload['subject'] ?? 'Web sitesi teklif talebi', 160);
$location = cleanText($payload['location'] ?? '', 200);
$message = cleanText($payload['message'] ?? '', 5000);
$kvkk = ($payload['kvkk'] ?? false) === true;

if ($name === '' || $phone === '' || $email === '' || $message === '' || !$kvkk) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Lütfen zorunlu alanları doldurun.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Geçerli bir e-posta adresi girin.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$configPath = __DIR__ . '/contact-config.php';
$config = is_file($configPath) ? require $configPath : [];
$to = cleanText($config['to_email'] ?? 'proje@biemelektronik.com', 180);
$mailSubject = 'BİEM Web Teklif Talebi - ' . ($subject !== '' ? $subject : 'Genel');

$ip = cleanText($_SERVER['REMOTE_ADDR'] ?? '-', 64);
$userAgent = cleanText($_SERVER['HTTP_USER_AGENT'] ?? '-', 300);

$body = "BİEM web sitesinden yeni bir talep alındı.\n\n"
    . "Ad Soyad: {$name}\n"
    . "Firma: " . ($company !== '' ? $company : '-') . "\n"
    . "Telefon: {$phone}\n"
    . "E-posta: {$email}\n"
    . "Talep Konusu: " . ($subject !== '' ? $subject : '-') . "\n"
    . "Saha / Lokasyon: " . ($location !== '' ? $location : '-') . "\n\n"
    . "Mesaj:\n{$message}\n\n"
    . "---\n"
    . "KVKK onayı: Evet\n"
    . "IP: {$ip}\n"
    . "Tarayıcı: {$userAgent}\n"
    . "Tarih: " . date('Y-m-d H:i:s') . "\n";

$sent = false;
$smtpEnabled = ($config['smtp_enabled'] ?? false) === true;

if ($smtpEnabled) {
    try {
        $sent = smtpSend($config, $to, $email, $mailSubject, $body);
    } catch (Throwable $e) {
        error_log('BIEM contact SMTP failed: ' . $e->getMessage());
    }
}

if (!$sent) {
    $fromEmail = cleanText($config['from_email'] ?? 'no-reply@biemelektronik.com', 180);
    $encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: BİEM Web <' . $fromEmail . '>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
    ];
    $sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers));
}

if (!$sent) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'error' => 'Talep e-posta sunucusuna iletilemedi. Lütfen telefon veya WhatsApp ile bize ulaşın.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$_SESSION['biem_contact_last_submit'] = $now;
echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
