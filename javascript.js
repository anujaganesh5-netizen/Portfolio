const circles = document.querySelectorAll(".circle");
let hasAnimated = false;

function animateCircles() {
  circles.forEach(circle => {
    let percent = +circle.dataset.percent;
    let span = circle.querySelector("span");
    let count = 0;

    circle.style.background =
      `conic-gradient(#1e293b 0deg, #1e293b 360deg)`;
    span.textContent = "0%";

    let interval = setInterval(() => {
      if (count >= percent) {
        clearInterval(interval);
      } else {
        count++;
        circle.style.background =
          `conic-gradient(#38bdf8 ${count * 3.6}deg, #1e293b ${count * 3.6}deg 360deg)`;
        span.textContent = count + "%";
      }
    }, 20);
  });
}

/* Intersection Observer */
const skillsSection = document.querySelector("#skills");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircles();
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(skillsSection);
