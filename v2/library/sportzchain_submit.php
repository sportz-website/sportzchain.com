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
"Team" => "select", 
"Name" => "text", 
"email" => "text", 
"Mobile" => "text", 
"twitter" => "text", 
"telegram" => "text", 
];

$body = "Team:  __Team__
Name : __Name__
email : __email__
Mobile : __Mobile__
twitter : __twitter__
telegram : __telegram__
Date:        __DATE_TIME__
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
    

$mail->addAddress( "pjshah8641@gmail.com" );
if(!empty($_POST["attachments"])){
        $attachments = explode( ",", $_POST["attachments"]);
        foreach( $attachments as $attachment ){
            $attachment_path = dirname(__DIR__) . "/uploads/" .  $attachment ;
            if( file_exists( $attachment_path ) ){
                $mail->addAttachment($attachment_path, $attachment);
            }
        }
    }

$mail->setFrom( "pjshah8641@gmail.com" );
    $mail->Subject = $subject;
    $mail->Body = nl2br($body);
     
    $email_sent = $mail->send();

try{
                    require_once ("config.php");
$db_data = array();
$db_data["name"] = "__Name__";
$db_data["email"] = "__email__";
$db_data["mobile"] = "+__code__ __Mobile__";
$db_data["twitter"] = "__twitter__";
$db_data["telegram"] = "__telegram__";
$db_data["team"] = "__Team__";
$insert_data = array();
                foreach( $db_data as $col => $col_val){
                    foreach($_POST["fields"] as $key => $value){
                        if(is_array($value)){
                            $value = implode(" ,", $value);
                        }
                        $col_val = str_replace( "__" . $key . "__", htmlspecialchars( $value ) , $col_val);
                    }
                    $insert_data[$col] = $col_val;
                }
if(!empty($insert_data)){
                        $insert_id = $db->insert ("user" , $insert_data);
                        if ($insert_id){
                            $db_msg = "Data inserted successfully";
                            $db_success = 1;
                        } else {
                            $db_msg = "Insert failed: " . $db->getLastError();
                            $db_success = 0;
                        }
                    }
}catch(Exception $e){
                $db_msg = "Database insert failed" . $e->getMessage();
                $db_success = 0;
            }
if( $email_sent ){
$output = array("success" => 1, 
                    "redirect" => 1, 
                    "url" => "https://sportzchain.com/thankyou.html",
                    "msg" => "Hey Zuperfan, congratulations you will earn $20 worth of $SPN token when you subscribe for your favourite teams sports token.
                    </br>
                    Do follow us on Twitter and Telegram (links of twitter and telegram to be added)  to be updated on the launch announcement and earn more",
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