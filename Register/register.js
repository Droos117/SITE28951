function VerificarLogin() {

    let Email = "admin";
    let Pass = "123456";
    let Key = "NEXUM-1234-1234-1234"


    let login = document.getElementById("InputEmail").value;
    let senha = document.getElementById("InputPass").value;
    let GKEY = document.getElementById("Key").value;

    if (login === Email && senha === Pass && GKEY == Key) {
        window.location.href = "../PanelStore/panelstore.html";
    }

}