const mainSlider = document.getElementById("carouselExampleIndicators");
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");
const totalSlides = 26;
const nodeWrapper = document.getElementById("slide-track");
let currentIndex = 0;

const generateSlider = () => {
  for (let index = 1; index <= totalSlides; index++) {
    const newNode = document.createElement("img");
    newNode.src = `images/technologies/${index}.svg`;
    newNode.alt = "";
    nodeWrapper.appendChild(newNode);
  }
};

function scrollToSection(targetSection) {
  document.getElementById("body-wrapper").scrollTop = targetSection.offsetTop;
}


// Initialize the slider on page load
window.addEventListener('DOMContentLoaded', () => generateSlider());;
