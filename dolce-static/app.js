const btn = document.querySelector("#hero button");
const form = document.querySelector("#contact form");

btn.addEventListener("click", function () {
  alert("Sorry, the ordering feature is not yet implemented.");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Sorry, the form submission feature is not yet implemented.");
});

// Get all the cake cards
const cakeCards = document.querySelectorAll('.cake-card');

// Add a hover effect to each cake card
cakeCards.forEach(cakeCard => {
  cakeCard.addEventListener('mouseover', () => {
    cakeCard.style.transform = 'scale(1.1)';
    cakeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    cakeCard.style.transition = 'all 0.2s ease-in-out';
  });

  cakeCard.addEventListener('mouseout', () => {
    cakeCard.style.transform = 'scale(1)';
    cakeCard.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    cakeCard.style.transition = 'all 0.2s ease-in-out';
  });
});