const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".track");

 // You can also calculate this dynamically by calling querySelectorAll(".slide")
// and then using the length property.
const NUM_SLIDES = 3;

// The current slide that's being displayed
let currSlide = 0;

// Slide the track onto the current slide
function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}

// Go to the next slide. Loop back to the first slide if you overflow.
nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});

// Go to the previous slide. Loop to the last slide if you overflow.
prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});

const prama=new URLSearchParams(window.location.search);
document.getElementById("descriptiontitle").innerText=prama.get("title");
document.getElementById("descriptionprice").innerText=prama.get("price")
document.getElementById("descriptionimg-1").src=prama.get("image1")
document.getElementById("descriptionimg-2").src=prama.get("image2")
document.getElementById("descriptionimg-3").src=prama.get("image3")

;let desk_id=document.getElementById("desk-id")
desk_id.setAttribute("data-id",prama.get("id"))