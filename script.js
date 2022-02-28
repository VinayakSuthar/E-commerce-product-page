let imageList = document.querySelectorAll(".small-images");
const largeImage = document.getElementById("large-image");
let preImage = imageList[0];
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

// event listner for each small image
imageList.forEach(element=>{
  element.addEventListener("click", selectImage);
})

// function to change image and add style to active image
function selectImage() {
  let imageSrc = this.src.replace("-thumbnail", "");
  largeImage.src = imageSrc;
  this.classList.add("active-image");
  this.parentNode.classList.add("active-column");
  preImage.classList.remove("active-image");
  preImage.parentNode.classList.remove("active-column");
  preImage = this;
}

// Modal script 
let modal = document.getElementById("modal");
let modalClose = document.getElementById("close");
let thumbnails = document.querySelectorAll(".thumbnails");

thumbnails.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSlide(index + 1);
    console.log(index);
  });
});

largeImage.addEventListener("click",()=>{
  modal.style.display = "block";
});

modalClose.addEventListener("click",()=>{
  modal.style.display = "none";
});

var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex=n);
}

nextButton.addEventListener("click",()=>plusSlides(1));
previousButton.addEventListener("click",()=>plusSlides(-1));

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n> slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for(i=0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  for(i=0; i<thumbnails.length; i++){
    thumbnails[i].classList.remove('active-image');
    thumbnails[i].parentNode.classList.remove('active-column');
  }
  thumbnails[slideIndex-1].classList.add('active-image');
  thumbnails[slideIndex-1].parentNode.classList.add('active-column');
}