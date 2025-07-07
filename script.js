// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Search form logic
function searchFunction(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert("You searched for: " + query);
  } else {
    alert("Please enter a search term.");
  }
}
