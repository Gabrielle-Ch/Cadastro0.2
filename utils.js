function mostrarMensagem(mensagem, tipo = 'info') {
    const msgBox = document.getElementById('mensagem');
    msgBox.innerText = mensagem;
    msgBox.className = tipo;
    msgBox.style.display = 'block';

    setTimeout(() => {
        msgBox.style.display = 'none';
    }, 3000);
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}