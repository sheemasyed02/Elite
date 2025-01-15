

<?php
// Configuration
$receiving_email_address = 'syd.shma459@gmail.com';

// Validate form inputs
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die('Invalid request method');
}

// Required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
        die("Error: {$field} is required");
    }
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    die('Invalid email format');
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($_POST['name']));
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags($_POST['subject']));
$message = htmlspecialchars(strip_tags($_POST['message']));

// Prepare email headers
$headers = array(
    'From' => "{$name} <{$email}>",
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
);

// Prepare email body
$email_body = "
<html>
<body>
    <h3>New Contact Form Submission</h3>
    <p><strong>From:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <p><strong>Message:</strong><br>{$message}</p>
</body>
</html>
";

// Send email
try {
    $mail_sent = mail($receiving_email_address, $subject, $email_body, $headers);
    
    if ($mail_sent) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'An error occurred: ' . $e->getMessage()]);
}
