let firstTitle = document.querySelector("#firstTitle");
let secondTitle = document.querySelector("#secondTitle");

window.addEventListener("scroll", handleTextParallax);

function handleTextParallax() {
  firstTitle.style = `left: ${0.1 * window.scrollY - 80}%;`;
  secondTitle.style = `right: ${0.1 * window.scrollY - 80}%;`;
}
