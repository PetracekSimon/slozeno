let powder = document.querySelector("section#powder");
$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    items: 1,
    smartSpeed: 1000,
    center: true,
    startPosition: 1,
    loop: true,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        stagePadding: 0,
      },
      1180: {
        stagePadding: 250,
      },
    },
    navText: [
      "<img src='./public/imgs/carousel/arrow-left.svg'>",
      "<img src='./public/imgs/carousel/arrow-right.svg'>",
    ],
  });
  owl.on("changed.owl.carousel", function (event) {
    if (event.type === "changed") {
      console.log("yayy");
      console.log(event);
    }
    switch (event.page.index) {
      case 0:
        powder.className = "";
        powder.classList.add("orange");
        break;
      case 1:
        powder.className = "";
        powder.classList.add("kiwi");
        break;
      case 2:
        powder.className = "";
        powder.classList.add("raspberry");
        break;

      default:
        break;
    }
  });
  let displayedItems = 4;
  let owlAbout = $(".about-carousel").owlCarousel({
    items: 4,
    dots: false,
    navText: [
      "<img class='about-prev-btn' src='./public/imgs/carousel/arrow-left.svg'>",
      "<img class='about-next-btn' src='./public/imgs/carousel/arrow-right.svg'>",
    ],
    onInitialized: () => {
      document
        .querySelector(".about-carousel .owl-prev")
        .classList.add("d-none");
    },
  });
  owlAbout.on("changed.owl.carousel", (event) => {
    if (event.item.index == 0) {
      document
        .querySelector(".about-carousel .owl-prev")
        .classList.add("d-none");
    } else {
      document
        .querySelector(".about-carousel .owl-prev")
        .classList.remove("d-none");
    }
    if (event.item.index == event.item.count - displayedItems) {
      document
        .querySelector(".about-carousel .owl-next")
        .classList.add("d-none");
    } else {
      document
        .querySelector(".about-carousel .owl-next")
        .classList.remove("d-none");
    }
  });
});
