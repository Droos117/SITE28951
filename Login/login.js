function VerificarLogin() {

    let Email = "admin";
    let Pass = "123123";


    let login = document.getElementById("InputEmail").value;
    let senha = document.getElementById("InputPass").value;

    if (login === Email && senha === Pass) {
        window.location.href = "../PanelStore/panelstore.html";
    }else{
        document.getElementById("ErrorSenha").innerHTML = "Credencias incorretas!";
    }

}