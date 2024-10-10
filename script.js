var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    1355: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    parent.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== parent) {
        otherItem.classList.remove("active");
      }
    });
  });
});

let isDrawerOpen = false;

function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  if (!isDrawerOpen) {
    drawer.style.right = "0";
    overlay.classList.add("active");
    isDrawerOpen = true;
  } else {
    drawer.style.right = "-400px";
    overlay.classList.remove("active");
    isDrawerOpen = false;
  }
}
