<?php

$to = "info@sportzchain.com";
$subject = "Website Inquiry";
$name = $_POST['Name'];
$company = $_POST['Company'];
$email = $_POST['Email'];
$request = $_POST['Request'];

$age = $_POST['age'];
$occupation = $_POST['occupation'];
$purpose = $_POST['Purpose'];

$message = "
<html>
<head>
<title>Inquiry Form</title>
</head>
<body>
<p>Inquiry Form - Information</p>
<table border='1px'>
<tr>
<th>Name</th>
<td> $name </td>
</tr>
<tr>
<th>Company</th>
<td> $company </td>
</tr>
<tr>
<th>Email</th>
<td> $email </td>
</tr>
<tr>
<th>Request</th>
<td> $request </td>
</tr>

</table>
</body>
</html>
";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: info@sportzchain.com\r\n";

if(mail($to,$subject,$message,$headers))
{ 
   
echo 'Mail Sent'; 
 
}
else { 
    echo 'Mail Did not send'; 
}
