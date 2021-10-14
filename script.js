function enviar(){
    const email = document.getElementById('email')

    if (email.value === ""){
        alert("este espaço não pode ficar em branco")
    }
    else{
        alert("E-mail salvo")
    }
}