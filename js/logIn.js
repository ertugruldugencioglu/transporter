function logIn(){
    var userDataJSON = localStorage.getItem("userData");
    var userData = JSON.parse(userDataJSON);
    var eMail = document.getElementById("e-mail").value;
    var password = document.getElementById("password").value;
    if (eMail == userData.eMail && password == userData.password){
        window.location.href="./main-showcase.html";
    } else {
        alert("Böyle bir kullanıcı bulunamadı!")
    }
}