/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  //creating the div element with the the carousel class
  const divCarousel = document.createElement("div");
  divCarousel.classList.add("carousel");

  //creating the div element with the class leftButton
  const divLeftButton = document.createElement("div");
  divLeftButton.classList.add("left-button");

  //creating the img elements,setting the source attribut and giving them a class
  const imageOne = document.createElement("img");
  imageOne.classList.add("mountains");
  imageOne.setAttribute("src", "./assets/carousel/mountains.jpeg");

  const imageTwo = document.createElement("img");
  imageTwo.classList.add("computer");
  imageTwo.setAttribute("src", "./assets/carousel/computer.jpeg");

  const imageThree = document.createElement("img");
  imageThree.classList.add("trees");
  imageThree.setAttribute("src", "./assets/carousel/trees.jpeg");

  const imageFour = document.createElement("img");
  imageFour.classList.add("turntable");
  imageFour.setAttribute("src", "./assets/carousel/turntable.jpeg");

  //creating the div element with a class of rightButton
  const divRightButton = document.createElement("div");
  divRightButton.classList.add("right-button");

  //appending
  divCarousel.appendChild(divLeftButton);
  divCarousel.appendChild(imageOne);
  divCarousel.appendChild(imageTwo);
  divCarousel.appendChild(imageThree);
  divCarousel.appendChild(imageFour);
  divCarousel.appendChild(divRightButton);

  console.log(divCarousel);
  return divCarousel;
}

const divCarousel = carouselMaker();

//selecting the caroursel container
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(divCarousel);

//creating a nodelist of the images
const imageList = document.querySelectorAll(".carousel img");
console.log(imageList);

const divRightButton = document.querySelector(".carousel .right-button");

//first image shows on the page by default
let currentIndex = 0;
imageList[currentIndex].style.display = "block";
//changing the styles
divRightButton.addEventListener("click", e => {
  currentIndex++;
  imageList[currentIndex].style.display = "block";
});
