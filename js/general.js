var openLinks = document.querySelectorAll('.open-link');
var favoriteButton = document.querySelectorAll('.add-favorite');
var modal = document.getElementById('modal');
var closeButton = document.getElementById('close-button');
var div = document.getElementById("acoount-settings");
var addButton = document.getElementById("add-advert");
var userData = localStorage.getItem("userData");
var parsedUserData = JSON.parse(userData);

if(parsedUserData.sector == "broker"){
    addButton.style.display = 'flex'
    addButton.style.alignItems = 'center'
    addButton.style.gap = '8px'
} else {
    addButton.style.display = 'hidden'
}
openLinks.forEach(openLink => {
  openLink.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
  });
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
function toggleDiv() {
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function logOut(){
  localStorage.clear();
  div.style.display = "none";
  window.location.href="./index.html"
}
favoriteButton.forEach(addFavorites => {
  addFavorites.addEventListener('click', () => {
    var resim = document.querySelector('.button-img');
    if(resim.src == "file:///C:/Users/ertug/OneDrive/Masa%C3%BCst%C3%BC/transporter/transporter/img/heart.png"){
      resim.src = 'img/love.png';
    } else {
      resim.src = 'img/heart.png'
    }
  });
});