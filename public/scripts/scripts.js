 const modalContainer = document.querySelector('.modalContainer');
 const cards = document.querySelectorAll('.card');

 for (let card of cards) {
     card.addEventListener("click", function() {
        const contentID = card.getAttribute("id")
       
        modalContainer.classList.add("active");
       
        modalContainer.querySelector("iframe").src =`https://www.youtube.com/embed/${contentID}`;
    })
 }

    document.querySelector(".closeModal").addEventListener("click", function() {
        modalContainer.classList.remove("active");
        modalContainer.querySelector("iframe").src ="";
        
    });