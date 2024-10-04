const elements = document.querySelectorAll(".faq-toggle");

elements.forEach( toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
  });
