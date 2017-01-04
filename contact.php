<?php

// configure
$from = 'web@xompass.com';
$sendTo = 'carlos@xompass.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'surname' => 'Lastname', 'phone' => 'Phone', 'email' => 'Email', 'company' => 'Company Name', 'job' => 'Job Title', 'organization_size' => 'Organization Size', 'industry' => 'Industry', 'country' => 'Country','message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "You have new message from Try Trial form:\n\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}