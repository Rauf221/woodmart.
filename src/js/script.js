var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });


  // Get the elements
const menuButton = document.getElementById('menu-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.closeBtn');

// Add click event to menu button to open sidebar
menuButton.addEventListener('click', () => {
  sidebar.style.transform = 'translateX(0)';
});

// Add click event to close button to close sidebar
closeButton.addEventListener('click', () => {
  sidebar.style.transform = 'translateX(100%)';
});

// Add event listener to close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.style.transform = 'translateX(100%)';
  }
});



