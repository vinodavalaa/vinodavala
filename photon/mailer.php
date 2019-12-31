<?php
session_start();
require 'PHPMailer/PHPMailerAutoload.php';
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
//Captcha check
//echo $_POST['6_letters_code']." - ".$_SESSION['6_letters_code']; exit;
if(isset($_POST["submit"])) {
	if($_POST['6_letters_code'] != $_SESSION['6_letters_code']){
		header('Location: contact.php?msg=0');
		exit;
	}

}

// End of captcha check

// Check if image file is a actual image or fake image
/*if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}*/
// Check if file already exists
/*if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}*/
//echo $target_file;
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
   // echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
/*if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}*/
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
   // echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
       // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
      //  echo "Sorry, there was an error uploading your file.";
    }
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

/*$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.kgkengineering';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@kgkengineering.com';                 // SMTP username
$mail->Password = 'infokgk$';                           // SMTP password
$mail->SMTPSecure = 'tls';                           // Enable TLS encryption, `ssl` also accepted
$mail->Port = 26;                                    // TCP port to connect to

*/
// Send acknoledgement mail to submitter
$mail->setFrom('info@photospot.co.in', 'PHOTOSPOT Team');  // Add a recipient   
$mail->addAddress($_POST['email'],$_POST['name']);
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Acknowledge Mail From PHOTOSPOT';
$mail->Body    = '
<p>Dear '.$_POST['name'].'</p>
<p>We have received your information, We will get in touch with you to proceed further.</p>
<p>Regards </p>
<p>PHOTOSPOT Team</p>';
$mail->AltBody = 'We have received your information, We will get in touch with you to proceed further.';

if(!$mail->send()) {
    //echo 'Message could not be sent.';
   // echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
   // echo 'Message has been sent';
}

$mail = new PHPMailer;

// Send new user data submission to owner

$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress('info@photospot.co.in', 'Admin');     // Add a recipient     // Add a recipient
   // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'New User Information : '.$_POST['name'];
$mail->Body    = '
<p>Dear Admin(info@photospot.co.in),</p>
<p>You have received new user information. The below are the details of the new user</p>
<p>First Name:'.$_POST['FirstName'].' </p>
<p>Last Name:'.$_POST['LastName'].' </p>
<p>Email:'.$_POST['Email'].' </p>
<p>Subject:'.$_POST['Subject'].' </p>
<p>Select:'.$_POST['Select'].' </p>
<p>Message:'.$_POST['Message'].' </p>
<p>Regards </p>
<p>PHOTOSPOT Team</p>';
$mail->AltBody = 'We have received your information, We will get in touch with you to proceed further.';
$mail->addAttachment($target_file);
if(!$mail->send()) {
   // echo 'Message could not be sent.';
   // echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    //echo 'Message has been sent';
	header('Location: thanks.html');
	
}

?>
