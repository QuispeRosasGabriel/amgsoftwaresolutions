const mainSlider = document.getElementById("carouselExampleIndicators");
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");
const nodeWrapper = document.getElementById("slide-track");
let currentIndex = 0;

const imageContainer = document.createElement("div");
nodeWrapper.appendChild(imageContainer);

const generateSlider = () => {
  for (let index = 1; index <= 27; index++) {
    const newNode = document.createElement("img");  
    newNode.src = `images/technologies/${index}.svg`;
    newNode.alt = "";
    imageContainer.appendChild(newNode);
  }
  const copySlide = imageContainer.cloneNode(true)
  nodeWrapper.appendChild(copySlide);
};

// Initialize the slider on page load
window.addEventListener('DOMContentLoaded',  generateSlider());