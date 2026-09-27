
// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// Portfolio filter
const filterButtons = document.querySelectorAll(".portfolio-tabs button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.textContent.trim().toLowerCase();

    projectCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();

      if (
        filter === "all" ||
        title.includes(filter.replace(" ", "")) ||
        description.includes(filter.replace(" ", ""))
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});


// Contact form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! I will get back to you soon.");

    contactForm.reset();
  });
}


// Scroll reveal animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

sections.forEach(section => {
  observer.observe(section);
});


// Current year
const yearElement = document.querySelector(".copyright");

if (yearElement) {
  const currentYear = new Date().getFullYear();

  yearElement.innerHTML =
    `© ${currentYear} Sanjay Portfolio • All rights reserved.`;
}
