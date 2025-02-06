window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("active"); // Add background when scrolled
    } else {
      navbar.classList.remove("active"); // Remove background in home section
    }
  });
  