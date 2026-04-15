export function validateForm() {
    
    const form = document.getElementById('formContato');
    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const destino = document.getElementById('destino');
    const mensagem = document.getElementById('mensagem');
    
    function mostrarErro(input, mensagem) {
        input.style.borderColor = "#af4343";
        
        let erro = input.nextElementSibling;
        if (!erro || !erro.classList.contains('erro')) {
            erro = document.createElement('span');
            erro.classList.add('erro');
            erro.style.color = "#af4343";
            erro.style.fontSize = "0.8rem";
            erro.style.marginTop = "1rem"
            input.parentNode.appendChild(erro);
        }
        
        erro.innerText = mensagem;
    }
    
    function limparErro(input) {
        input.style.borderColor = "";
        let erro = input.nextElementSibling;
        if (erro && erro.classList.contains('erro')) {
            erro.remove();
        }
    }
    
    nome.addEventListener('input', () => {
        if (nome.value.trim().length < 3) {
            mostrarErro(nome, "Nome muito curto!");
        } else {
            limparErro(nome);
        }
    });
    
    email.addEventListener('input', () => {
        const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!valido.test(email.value)) {
            mostrarErro(email, "Email inválido!");
        } else {
            limparErro(email);
        }
    });
    
    telefone.addEventListener('input', () => {
        let valor = telefone.value.replace(/\D/g, ''); 

        valor = valor.slice(0, 11);

        if (valor.length > 6) {
            valor = valor.replace(/^(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
        } else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d+)/, '($1) $2');
        } else {
            valor = valor.replace(/^(\d*)/, '($1');
        }

        telefone.value = valor;

        if (valor.length < 15) {
            mostrarErro(telefone, "Telefone inválido!");
        } else {
            limparErro(telefone);
        }
    });
    
    destino.addEventListener('change', () => {
        if (!destino.value) {
            mostrarErro(destino, "Selecione um destino!");
        } else {
            limparErro(destino);
        }
    });

    mensagem.addEventListener('input', () => {
        if (!mensagem.value) {
            mostrarErro(mensagem, "Mensagem obrigatória!");
        } else {
            limparErro(mensagem);
        }
    });
    
    form.addEventListener('submit', (e) => {
        let valido = true;
        
        if (nome.value.trim().length < 3) {
            mostrarErro(nome, "Nome obrigatório");
            valido = false;
        }
        
        if (!email.value.includes("@")) {
            mostrarErro(email, "Email inválido");
            valido = false;
        }
        
        if (telefone.value.trim().length < 10) {
            mostrarErro(telefone, "Telefone inválido");
            valido = false;
        }
        
        if (!destino.value) {
            mostrarErro(destino, "Selecione um destino");
            valido = false;
        }

        if (!mensagem.value) {
            mostrarErro(mensagem, "Mensagem obrigatória!");
            valido = false;
        }

        if (valido) {
            btnEnviar.textContent = "Enviando...";
            btnEnviar.disabled = true;
        }
        
        if (!valido) {
            e.preventDefault(); 
        }
    });

    const campos = document.querySelectorAll("#formContato input, #formContato textarea, #formContato select");

    const indicador = document.createElement("p");
    indicador.classList.add("formProgress");

    form.prepend(indicador);

    function atualizarProgresso() {
        let preenchidos = 0;

        campos.forEach(campo => {
            if (campo.value.trim() !== "") preenchidos++;
        });

        indicador.textContent = `Preenchido ${preenchidos} de ${campos.length}`;
    }

    campos.forEach(campo => {
        campo.addEventListener("input", atualizarProgresso);
    });
}