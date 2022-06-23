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
});
