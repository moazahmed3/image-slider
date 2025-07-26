const btnPre = document.querySelector("#pre-btn");
const btnNext = document.querySelector("#next-btn");
const slider = document.querySelectorAll(".slider img");
const galleryContainer = document.querySelector(".gallery");




let currentIndex = 0;
disableBtns();

function toGoSlide(number) {
  slider[currentIndex].classList.remove("active");
  currentIndex = (number + slider.length) % slider.length;
  disableBtns();
  slider[currentIndex].classList.add("active");
  activeGallery(currentIndex);
}

function disableBtns() {
  // pre btn
  if (currentIndex == 0) {
    btnPre.disabled = true;
    btnPre.classList.add("disable");
  } else {
    btnPre.disabled = false;
    btnPre.classList.remove("disable");
  }

  // next btn
  if (currentIndex == slider.length - 1) {
    btnNext.disabled = true;
    btnNext.classList.add("disable");
  } else {
    btnNext.disabled = false;
    btnNext.classList.remove("disable");
  }
}
btnNext.addEventListener("click", function () {
  toGoSlide(currentIndex + 1);
});
btnPre.addEventListener("click", function () {
  toGoSlide(currentIndex - 1);
});


slider.forEach((img)=>{
    const copyImg = img.cloneNode();
    galleryContainer.appendChild(copyImg)
})
const gallery = document.querySelectorAll(".gallery img");
galleryContainer.style.gridTemplateColumns = `repeat(${slider.length}, 1fr)`;

gallery.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    toGoSlide(index);
    activeGallery(index);
  });
});

function activeGallery(index) {
  gallery.forEach((el) => {
    el.classList.remove("active");
  });
  gallery[index].classList.add("active");
  
}

// setInterval

setInterval(() => {
    toGoSlide(currentIndex+1)
}, 4000);