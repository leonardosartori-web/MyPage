<?php
//get data from form

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "leonardo.sartori62@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: leonardo.sartori62@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
