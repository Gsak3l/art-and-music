
<?php
    $visitor_name = $_Post['name'];
    $visitor_surname = $_['surname'];
    $visitor_email = $_POST['email'];
    $visitor_message = $_POST['message'];

    $email = 'gsakel5@gmail.com';
    $email_subject = 'Νέο email από την artandmusic.gr';
    $email_body = "Όνομα: $visitor_name\n".
                  "Επώνυμο: $visitor_surname\n".
                  "Email: $visitor_email\n".
                  "$visitor_message".
    
    $to = "gsakel5@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-to: $visitor_email\r\n";
    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
?>