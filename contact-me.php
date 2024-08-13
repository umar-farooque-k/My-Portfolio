<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'umarfk55@gmail.com'; // Your email address
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message. It has been sent.';
    } else {
        echo 'Sorry, something went wrong. Please try again later.';
    }
}
?>
