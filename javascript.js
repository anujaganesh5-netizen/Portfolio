document.querySelectorAll(".circle").forEach(circle => {
  let percent = circle.dataset.percent;
  let span = circle.querySelector("span");
  let count = 0;

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
