const swiper = new Swiper(".spec__slider", {
  // effect: 'coverflow',
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 'auto',
  // coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  // },
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  // },
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperMenu = new Swiper(".menu__slider", {
  slidesPerView: 2,
  slidesPerColumn: 2,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let tabs = document.querySelector(".tabs");
let menuSlider = document.querySelectorAll(".menu__slider-block");

tabs.addEventListener("click", function (e) {
  if (e.target.classList.contains("tabs__item")) {
    this.querySelectorAll(".tabs__item").forEach((item) =>
      item.classList.remove("active")
    );
    e.target.classList.add("active");
  }

  menuSlider.forEach((item) => {
    item.classList.remove("show");
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);
    thisSwiper.classList.add("show");
  });
});

window.addEventListener("load", overflowTabs);
window.addEventListener("resize", overflowTabs);

function overflowTabs() {
  let outerTabs = document.querySelector(".tabs__container");
  let innerTabs = document.querySelector(".tabs");
  if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
    innerTabs.classList.add("overflow");
  } else {
    innerTabs.classList.remove("overflow");
  }
}
