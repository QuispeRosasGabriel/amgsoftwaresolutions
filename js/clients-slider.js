const clientWapper = document.getElementById("clients-mobile-slider");


const generateClientSlider = () => {
  for (let el = 1; el <= 10; el++) {
    console.log(el)
    const newNode = document.createElement("img");
    newNode.src = `images/logos/${el}.svg`;
    newNode.alt = "";
    clientWapper.appendChild(newNode);
  }
};

// Initialize the slider on page load
window.addEventListener('DOMContentLoaded', () => generateClientSlider());
