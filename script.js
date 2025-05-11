// Search functionality for entire card blocks
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  let anyVisible = false;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  // Optional: handle no match case
  const noResults = document.getElementById("no-results");
  if (noResults) {
    noResults.style.display = anyVisible ? "none" : "block";
  }
});

// Accordion-style expand/collapse
function toggleCard(header) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card !== header.parentElement) {
      card.classList.remove('open');
    }
  });
  const card = header.parentElement;
  card.classList.toggle('open');
}
