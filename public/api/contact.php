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

// Honeypot: normal kullanıcı bu alanı hiçbir zaman doldurmaz.
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

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Geçerli bir e-posta adresi girin.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Header injection koruması.
if (preg_match('/[\r\n]/', $email)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Geçersiz e-posta adresi.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$to = 'proje@biemelektronik.com';
$mailSubject = 'BİEM Web Teklif Talebi - ' . ($subject !== '' ? $subject : 'Genel');
$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';

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

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: BİEM Web <no-reply@biemelektronik.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'error' => 'Mesaj e-posta sunucusuna iletilemedi. Lütfen telefon veya WhatsApp ile bize ulaşın.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$_SESSION['biem_contact_last_submit'] = $now;
echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
