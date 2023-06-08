function moveContacts(index) {
    if (index < 0 || index >= document.querySelectorAll(".carousel-item").length) {
      return;
    }
    document.querySelector(".carousel").style.transform = `translateY(-${index * 25}%)`;
}