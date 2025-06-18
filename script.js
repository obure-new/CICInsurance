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



























































// const counters = document.querySelectorAll('.stat h2');
//   let hasCounted = false;

//   function animateCount() {
//     counters.forEach(counter => {
//       const target = parseFloat(counter.getAttribute('data-target'));
//       const isDecimal = target % 1 !== 0;
//       let current = 0;
//       const increment = target / 100;

//       const updateCount = () => {
//         current += increment;
//         if (current < target) {
//           counter.innerText = isDecimal ? current.toFixed(2) : Math.ceil(current);
//           requestAnimationFrame(updateCount);
//         } else {
//           counter.innerText = isDecimal ? target.toFixed(2) : target;
//         }
//       };

//       updateCount();
//     });
//   }

//   function handleScroll() {
//     const statsSection = document.getElementById('stats');
//     const sectionTop = statsSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (sectionTop < windowHeight && !hasCounted) {
//       animateCount();
//       hasCounted = true;
//     }
//   }

//   window.addEventListener('scroll', handleScroll);
