class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    validarCampos() {
        return this.nome !== '' && this.email !== '' && this.senha !== '';
    }
}