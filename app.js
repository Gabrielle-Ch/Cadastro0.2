document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    const usuario = new Usuario(nome, email, senha);

    if (!usuario.validarCampos()) {
        mostrarMensagem('Preencha todos os campos!', 'erro');
        return;
    }

    mostrarMensagem('Login realizado com sucesso!', 'sucesso');
    limparFormulario();
});