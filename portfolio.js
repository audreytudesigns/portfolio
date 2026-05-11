document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project-item");
  const slides = document.querySelectorAll(".slide");

  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    items.forEach(item => item.classList.remove("active"));
    items[index].classList.add("active");

    current = index;
  }

  function startCarousel() {
    interval = setInterval(() => {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }, 2700);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      stopCarousel();
      showSlide(Number(item.dataset.index));
    });

    item.addEventListener("mouseleave", () => {
      startCarousel();
    });
  });

  showSlide(0);
  startCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  fadeElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const parallaxEls = document.querySelectorAll(".parallax");

  function updateParallax() {
    const scrollY = window.scrollY;

    parallaxEls.forEach((el, i) => {
      const speed = 0.1 + i * 0.03; // slight variation per element

      const offset = scrollY * speed;

      el.style.transform = `translateY(${offset}px)`;
    });
  }

  window.addEventListener("scroll", updateParallax);
});



function toggleDropdown() {
  const menu = document.getElementById("contactsMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// optional: close when clicking outside
document.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown");
  const menu = document.getElementById("contactsMenu");

  if (!dropdown.contains(e.target)) {
    menu.style.display = "none";
  }
});






