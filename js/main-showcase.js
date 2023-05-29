const openLink = document.getElementById('open-link');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

openLink.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});