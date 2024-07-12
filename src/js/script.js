var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


const menuButton = document.getElementById("menu-button");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".closeBtn");


menuButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
});


closeButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
});


document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.style.transform = "translateX(100%)";
  }
});


let swiperrr = new Swiper('.swiperwidht', {
  slidesPerView: 4,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

