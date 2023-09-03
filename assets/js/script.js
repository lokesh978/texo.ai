$(".testimonialCarousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    576: {
      items: 1.5,
      margin: 14,
      center: true,
    },
    768: {
      items: 2,
      margin: 18,
      center: true,
    },
    991: {
      items: 3,
      margin: 20,
      autoplay: false,
    },
  },
});

var owl = $(".testimonialCarousel");
owl.owlCarousel();

$(".next-player").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".pre-player").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});

$(document).ready(function () {
  $(".selling-card")
    .mouseenter(function () {
      $(this).addClass("active");
    })
    .mouseleave(function () {
      $(this).removeClass("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var goToTopButton = document.getElementById("GoTopBtn");

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
        goToTopButton.style.display = "flex";
      } else {
        goToTopButton.style.display = "none";
      }
    });

    goToTopButton.addEventListener("click", function (e) {
      e.preventDefault();

      var scrollOptions = {
        top: 0,
        behavior: "smooth",
      };

      window.scrollTo(scrollOptions);
    });
  });
