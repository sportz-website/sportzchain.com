<?php 
if(empty($_POST["form_name"])){
        die("Invalid");
    }
    ini_set("display_errors", "0");
    

require_once "PHPMailer/PHPMailerAutoload.php";
    $mail = new PHPMailer;
    $mail->isHTML(true);

$subject = "Website Inquiry";
    if(!empty($subject)){
        foreach($_POST["fields"] as $key => $value){
            if(is_array($value)){
                $value = implode(" ,", $value);
            }
            $subject = str_replace( "__" . $key . "__", $value, $subject);
        }
    }

$form_fields = [
"name" => "text", 
"company" => "text", 
"Email" => "text", 
"message" => "textarea", 
];

$body = "Name : __name__

Company : __company__

Email : __Email__

Message : __message__

";
    $data = array();
    foreach($_POST["fields"] as $key => $value){
        if(is_array($value)){
            $value = implode(" ,", $value);
        }
        $data[$key] = $value;
        $body = $form_fields[$key] != "text_editor" ? str_replace( "__" . $key . "__", htmlspecialchars( $value ), $body) : str_replace( "__" . $key . "__", $value, $body);
    }
    $body = str_replace( "__SENDER_IP__", $_SERVER["REMOTE_ADDR"], $body);
    $body = str_replace( "__DATE_TIME__", date("Y-m-d H:i:s"), $body);
    

$mail->addAddress( "info@sportzchain.com" );
if(!empty($_POST["attachments"])){
        $attachments = explode( ",", $_POST["attachments"]);
        foreach( $attachments as $attachment ){
            $attachment_path = dirname(__DIR__) . "/uploads/" .  $attachment ;
            if( file_exists( $attachment_path ) ){
                $mail->addAttachment($attachment_path, $attachment);
            }
        }
    }

$mail->setFrom( "info@sportzchain.com" );
    $mail->Subject = $subject;
    $mail->Body = nl2br($body);
     
    $email_sent = $mail->send();

if( $email_sent ){
$output = array("success" => 1, 
                    "redirect" => 0, 
                    "msg" => "Email sent successfully.",
                    "data" => $data
                );
echo json_encode($output); exit;
    } else {
$output = array("success" => 0, 
                    "error" => "Email error",
                    "msg" => "Something went wrong, please try again.",
                    "data" => $data,
                    "phpMailer_error" => $mail->ErrorInfo
                );
            echo json_encode($output); exit;
}
?>