let imageList = document.querySelectorAll(".small-images");
const largeImage = document.getElementById("large-image");
let preImage = imageList[0];

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
  console.log(this);
}