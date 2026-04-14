<?php

include "conexao.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$destino = $_POST['destino'];
$mensagem = $_POST['mensagem'];

$sql = "INSERT INTO contatos (nome,email,telefone,destino,mensagem)
VALUES ('$nome','$email','$telefone','$destino','$mensagem')";

if($conn->query($sql) === TRUE){
    header("Location: sucesso.php");
    exit;
}else{
    echo "Erro: " . $conn->error;
}

$conn->close();

?>