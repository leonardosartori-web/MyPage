<?php
// controlli
$error = false;
if(!isset($_POST['name']) || empty($_POST['name'])){
    $error = true;
}
if(!isset($_POST['email']) || empty($_POST['email'])){
    $error = true;
}
if(!isset($_POST['message']) || empty($_POST['message'])){
    $error = true;
}

if($error){
    echo "alcuni campi obbligatori non sono stati compilati";
    exit();
}

$result = mail("leonardo.sartori62@gmail.com", "Invio", $_POST['message'],  "FROM: $_POST[email]");

if($result)
    echo "Email inviata con successo";
else
    echo "Problemi nell'invio dell'email";

?>
