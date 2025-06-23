// country drop down
function toggleCountryMenu() {
    const dropdown = document.getElementById("countryDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  function selectCountry(name, flag) {
    const button = document.getElementById("selectedCountry");
    button.innerHTML = `${flag} ${name} <i class="fa fa-caret-down"></i>`;
    document.getElementById("countryDropdown").style.display = "none";
  }
  window.addEventListener("click", function(event) {
    if (!event.target.closest(".language-dropdown")) {
      document.getElementById("countryDropdown").style.display = "none";
    }
  });
// self service portal

  function togglePortalMenu() {
    const portalDropdown = document.getElementById("portalDropdown");
    portalDropdown.style.display = portalDropdown.style.display === "block" ? "none" : "block";
  }

  // Hide both dropdowns when clicking outside
  window.addEventListener("click", function(event) {
    if (!event.target.closest(".language-dropdown")) {
      document.getElementById("countryDropdown").style.display = "none";
    }
    if (!event.target.closest(".self-service-dropdown")) {
      document.getElementById("portalDropdown").style.display = "none";
    }
  });
// sliding images
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-item");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 3000); 
});






























































const counters = document.querySelectorAll('.stat h2');
  let hasCounted = false;

  function animateCount() {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      let current = 0;
      const increment = target / 100;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.innerText = isDecimal ? current.toFixed(2) : Math.ceil(current);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = isDecimal ? target.toFixed(2) : target;
        }
      };

      updateCount();
    });
  }

  function handleScroll() {
    const statsSection = document.getElementById('stats');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !hasCounted) {
      animateCount();
      hasCounted = true;
    }
  }

  window.addEventListener('scroll', handleScroll);
