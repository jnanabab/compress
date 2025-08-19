// Script for All Tools Website
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const toolCards = document.querySelectorAll(".tool-card");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();

      toolCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
