  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {  
      '360': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '480': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '640': {
        slidesPerView: 1,
        spaceBetween: 50,},
        '1000': {
          slidesPerView: 2,
          spaceBetween: 50,},
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


  const offerAlert = document.querySelector(".offer-alert");
  const closeBtn = document.querySelector(".close-btn");
  
/*   closeBtn.addEventListener("click", () => {
    offerAlert.style.display = "none";
  });
  
  setTimeout(() => {
    offerAlert.style.display = "block";
  }, 1000);
  
  setTimeout(() => {
    offerAlert.style.display = "none";
  }, 5000);
 */

