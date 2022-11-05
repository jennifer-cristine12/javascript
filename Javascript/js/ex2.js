function validar(){
    let cpf = cadastro.cpf.value
    let senha = cadastro.senha.value
    let confirm = cadastro.confirm.value

    if(cpf.length > 11 || cpf.length < 11){
        alert('cpf invalido')
        cadastro.cpf.focus()
        return false
    }
    if (isNaN(cpf)){
        alert('Informe apenas numeros para o campo CPF')
        cadastro.cpf.focus()
        return false
    }
    if(senha != confirm){
        alert("Senhas não conferem")
        cadastro.senha.value = null
        cadastro.confirm.focus()
        return false
    }
    document.cadastro.submit()
}