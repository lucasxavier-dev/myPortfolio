 const modalContainer = document.querySelector('.modalContainer');
 const cards = document.querySelectorAll('.card');

 for (let card of cards) {
     card.addEventListener("click", function() {
        modalContainer.classList.add("active");
     })
 }

    document.querySelector(".closeModal").addEventListener("click", function() {
        modalContainer.classList.remove("active");
    });
