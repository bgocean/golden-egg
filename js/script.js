const swiper = new Swiper(".swiper-container", {
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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,
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
