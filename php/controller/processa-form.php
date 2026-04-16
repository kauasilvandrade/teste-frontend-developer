<?php

require_once dirname(__DIR__) . '/config/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método não permitido');
}

function limpar(string $valor): string {
    return htmlspecialchars(trim($valor), ENT_QUOTES, 'UTF-8');
}

$nome     = limpar($_POST['nome']     ?? '');
$email    = limpar($_POST['email']    ?? '');
$telefone = limpar($_POST['telefone'] ?? '');
$destino  = limpar($_POST['destino']  ?? '');
$mensagem = limpar($_POST['mensagem'] ?? '');

if (mb_strlen($nome) < 3) {
    http_response_code(422);
    exit('Nome inválido');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('E-mail inválido');
}

$telefoneNumeros = preg_replace('/\D/', '', $telefone);
if (strlen($telefoneNumeros) !== 11) {
    http_response_code(422);
    exit('Telefone inválido');
}

if (empty($destino)) {
    http_response_code(422);
    exit('Destino obrigatório');
}

if (mb_strlen(trim($mensagem)) === 0) {
    http_response_code(422);
    exit('Mensagem obrigatória');
}

try {
    $stmt = $pdo->prepare('
        INSERT INTO contatos (nome, email, telefone, destino, mensagem)
        VALUES (:nome, :email, :telefone, :destino, :mensagem)
    ');

    $stmt->execute([
        ':nome'     => $nome,
        ':email'    => $email,
        ':telefone' => $telefone,
        ':destino'  => $destino,
        ':mensagem' => $mensagem,
    ]);

    header('Location: ../page/sucesso.php');
    exit;

} catch (PDOException $e) {
    error_log($e->getMessage());
    http_response_code(500);
    exit('Erro interno no servidor');
}