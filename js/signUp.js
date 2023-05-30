function signUp() {
    var userName = document.getElementById("name").value;
    var userSurname = document.getElementById("surname").value;
    var userEMail = document.getElementById("e-mail").value;
    var userTel = document.getElementById("tel").value;
    var userPassword = document.getElementById("password").value;
    var RPassword = document.getElementById("r-password").value;
    var userData = {
        name: userName,
        surname: userSurname,
        eMail: userEMail,
        tel: userTel,
        password: userPassword
    };
    if (RPassword == userPassword && toString(userPassword).length > 8) {
        localStorage.setItem("userData", JSON.stringify(userData));
    } else {
        alert("Şifreler 8 karakterden uzun ve uyuşmalıdır!");
    }
}