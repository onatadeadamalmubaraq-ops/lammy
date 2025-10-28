document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      menuToggle.addEventListener("click", () => {
        // Toggle visibility
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("flex");
      });
    });
  
    const Search = function() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const products = document.querySelectorAll("[data-name]");

    products.forEach(product => {
      const name = product.getAttribute("data-name").toLowerCase();
      const price = product.querySelector("p").toLowerCase();

      // Check if query matches product name or price
      if (name.includes(input) || price.includes(input)) {
        product.style.display = "block"; // show
      } else {
        product.style.display = "none"; // hide
      }
    });
  };

  // Add click event
  document.getElementById("searchInput").addEventListener("click", Search);

  // Optional: search as you type
  document.getElementById("searchInput").addEventListener("input", Search);
 
