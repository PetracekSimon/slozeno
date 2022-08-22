let firstTitle = document.querySelector("#firstTitle");
let secondTitle = document.querySelector("#secondTitle");

window.addEventListener("scroll", handleTextParallax);

function handleTextParallax() {
  firstTitle.style = `left: ${0.1 * window.scrollY - 80}%;`;
  secondTitle.style = `right: ${0.1 * window.scrollY - 80}%;`;
}

let points = document.querySelectorAll(".point-wrapper");
points.forEach((point) => {
  point.addEventListener("mouseenter", () =>
    mouseenterStore(point.children[0])
  );
  point.addEventListener("mouseleave", () =>
    mouseleaveStore(point.children[0])
  );
});

function mouseenterStore(point) {
  let translate = point.getAttribute("transform");
  point.style.transform = `translate(${
    getOnlyDigits(translate.split(" ")[0]) - 2
  }px, ${getOnlyDigits(translate.split(" ")[1]) - 2}px) scale(1.2)`;
  document.querySelector(`.store-tile[data-id='${point.id.split("_")[1]}']`).classList.add("active");
}

function mouseleaveStore(point) {
  point.style.transform = _formatTraslate(point.getAttribute("transform"));
  document.querySelector(`.store-tile[data-id='${point.id.split("_")[1]}']`).classList.remove("active");
}


function _formatTraslate(translate) {
  let cssTranslate =
    translate.split(" ")[0] +
    "px, " +
    translate.split(" ")[1].replace(")", "px)");
  return cssTranslate;
}

function getOnlyDigits(str) {
  return Number(str.replace(/\D/g, ""));
}


let moreAbout = document.querySelector(".link-wrapper span");
let aboutCloseBtn = document.querySelector("#aboutCloseBtn");
let closeAboutPage = document.querySelector("#closeAboutPage");
let aboutSection = document.querySelector(".about-page");
moreAbout.addEventListener("click", () =>{
  aboutSection.style.top = "0";
  document.body.style.overflowY = "hidden";
});
aboutCloseBtn.addEventListener("click", () =>{
  aboutSection.style.top = "100%";
  document.body.style.overflowY = "auto";
});
closeAboutPage.addEventListener("click", () =>{
  aboutSection.style.top = "100%";
  document.body.style.overflowY = "auto";
});


let effectTitles = document.querySelectorAll(".effect-title > span");

effectTitles.forEach(title =>{
  title.addEventListener("click", ()=>{
    document.querySelector(".effect-title > span.active").classList.remove("active");
    document.querySelector("#effect .right-side .content.active").classList.remove("active");
    title.classList.add("active");
    document.querySelector(`#effect .right-side .content.content-${title.dataset.contentId}`).classList.add("active");
  })
})