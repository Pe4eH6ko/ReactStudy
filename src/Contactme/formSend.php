<?php
    $name = $_POST['formGroupExampleInput'];
    $email = $_POST['exampleInputEmail1'];
    $subject = $_POST['formGroupExampleInput']
    $message = $_POST['exampleFormControlTextarea1'];

    $to = "Pe4eH6ko@gmail.com";
    $body = "Name: ".$name."\nEmail: ".$email."\nSubject: ".$subject."\nMessage: ".$message;
    $headers = "From: " . $email;
    
    //send email
    mail($to, $subject, $body, $headers);
?>