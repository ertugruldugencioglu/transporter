var cookieValue = document.cookie.split(';')
.map(cookie => cookie.trim())
.find(cookie => cookie.startsWith('user_sector='));
if (cookieValue == "user_sector=transporter"){
    document.getElementById("add-advert").style.display= 'none'
}
if (cookieValue == "user_sector=broker"){
    var buyButton = document.getElementById("buy-button");
    if (buyButton) {
        buyButton.style.display = 'none';
    }
}
window.addEventListener('DOMContentLoaded', () => {
    var details = document.querySelectorAll(".card");
    var detailsModal = document.getElementById("details-modal");
    details.forEach((detail) => {
        detail.addEventListener('click', () => {
            detailsModal.style.display = 'block';
        });
    });
});
function closeModal(event){
    document.getElementById(event).style.display = 'none';
}
function addAdvertModal(){
    var addAdvertModal = document.getElementById("add-advert-modal");
    addAdvertModal.style.display = 'block';   
}
function settings(){
    var settings = document.getElementById("settings");
    settings.style.display = 'block';   
}
function addFavorites() {
    var image = document.getElementById("add-favorite-img");
    if (image.src == "http://127.0.0.1:5000/static/img/love%20(1).png") {
        image.src = "http://127.0.0.1:5000/static/img/love.png";
    } else {
        image.src = "http://127.0.0.1:5000/static/img/love%20(1).png";
    }
}
function toggleDiv() {
    var user = document.getElementById("acoount-settings");
    if (user.style.display === "block") {
        user.style.display = "none";
    } else {
        user.style.display = "block";
    }
}
function logOut() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    location.reload();
}