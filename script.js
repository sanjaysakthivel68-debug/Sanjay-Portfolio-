// ================= SMOOTH NAVIGATION =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ================= PORTFOLIO FILTER =================

const filterButtons =
  document.querySelectorAll(".portfolio-tabs button");

const projectCards =
  document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter =
      button.textContent.trim().toLowerCase();

    projectCards.forEach(card => {

      const title =
        card.querySelector("h3")?.textContent.toLowerCase() || "";

      const description =
        card.querySelector("p")?.textContent.toLowerCase() || "";

      if (
        filter === "all" ||
        title.includes(filter) ||
        description.includes(filter)
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


// ================= CONTACT FORM =================

const contactForm =
  document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(
      "Thank you! Your message has been received. I will get back to you soon."
    );

    contactForm.reset();

  });

}


// ================= SCROLL REVEAL =================

const sections =
  document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

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

}


// ================= VIDEO CONTROL =================

// Pause other videos when one video starts playing.

const videos =
  document.querySelectorAll("video");

videos.forEach(video => {

  video.addEventListener("play", () => {

    videos.forEach(otherVideo => {

      if (otherVideo !== video) {
        otherVideo.pause();
      }

    });

  });

});


// ================= CURRENT YEAR =================

const yearElement =
  document.querySelector(".copyright");

if (yearElement) {

  const currentYear =
    new Date().getFullYear();

  yearElement.innerHTML =
    `© ${currentYear} Sanjay Portfolio • All rights reserved.`;

      }
