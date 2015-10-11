<?php

$From = "dkohreidze.com";
$To = "dkohreidze@gmail.com";
$Subject = "Message from dkohreidze.com";
$Name = Trim(stripslashes($_POST['name'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= $Name;
$Body .= "\n";
$Body .= $Email;
$Body .= "\n\n";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($To, $Subject, $Body, "From: <$From>");

// redirect to success page 
if ($success){
  echo "Message sent.";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>