var openLinks = document.querySelectorAll('.open-link');
var favoriteButton = document.querySelectorAll('.add-favorite');
var advertModal = document.getElementById('advert-modal');
var advertCloseButton = document.getElementById('advert-modal-close-button');
var addAdvertModal = document.getElementById('add-advert-modal');
var addAdvertCloseButton = document.getElementById('add-advert-modal-close-button');
var user = document.getElementById("acoount-settings");
var addButton = document.getElementById("add-advert");
var userData = localStorage.getItem("userData");
var parsedUserData = JSON.parse(userData);
var buy = document.getElementById("buy-button");

if(parsedUserData.sector == "broker"){
    buy.style.display = "none"
    addButton.style.display = 'flex'
    addButton.style.alignItems = 'center'
    addButton.style.gap = '8px'
    
} else {
    addButton.style.display = 'none'
}
openLinks.forEach(openLink => {
  openLink.addEventListener('click', (event) => {
    event.preventDefault();
    advertModal.style.display = 'block';
  });
});
advertCloseButton.addEventListener('click', () => {
  advertModal.style.display = 'none';
});
function addAdvert(){
  addAdvertModal.style.display = 'block';
}
addAdvertCloseButton.addEventListener('click', () => {
  addAdvertModal.style.display = 'none';
});
function toggleDiv() {
  if (user.style.display === "block") {
    user.style.display = "none";
  } else {
    user.style.display = "block";
  }
}
function logOut(){
  localStorage.clear();
  user.style.display = "none";
  window.location.href="./index.html"
}
favoriteButton.forEach(addFavorites => {
  addFavorites.addEventListener('click', () => {
    var img = document.querySelector('.button-img');
    if(img.src == "file:///C:/Users/ertug/OneDrive/Masa%C3%BCst%C3%BC/transporter/transporter/img/heart.png"){
      img.src = 'img/love.png';
    } else {
      img.src = 'img/heart.png'
    }
  });
});