<?php

// Copy this file to contact-config.php on the production server and fill in
// the real mailbox credentials there. contact-config.php is ignored by Git
// and must never be committed.
return [
    'smtp_enabled' => true,
    'smtp_host' => 'mail.kurumsaleposta.com',
    'smtp_port' => 465,
    'smtp_encryption' => 'ssl', // ssl, tls or none
    'smtp_username' => 'proje@biemelektronik.com',
    'smtp_password' => 'CHANGE_ME',
    'from_email' => 'proje@biemelektronik.com',
    'from_name' => 'BİEM Web Sitesi',
    'to_email' => 'proje@biemelektronik.com',
];
