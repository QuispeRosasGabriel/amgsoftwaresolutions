const serviceSection = document.getElementById("service-section");
const serviceContainer = document.createElement("div");
const infoContainer = document.createElement("div");


serviceContainer.classList.add("service-container");
infoContainer.classList.add("info-container");
serviceSection.appendChild(serviceContainer)
serviceSection.appendChild(infoContainer)

const arrIcon = [
    {id: "It Outsorcing", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis qui totam. Facilis optio enim corporis voluptatibus, consectetur a sed! Odit modi exercitationem nihil! Iure ducimus exercitationem error quia debitis!1"},
    {id: "Headhing", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis qui totam. Facilis optio enim corporis voluptatibus, consectetur a sed! Odit modi exercitationem nihil! Iure ducimus exercitationem error quia debitis!2"},
    {id: "Mantenimiento de software", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis qui totam. Facilis optio enim corporis voluptatibus, consectetur a sed! Odit modi exercitationem nihil! Iure ducimus exercitationem error quia debitis!3"},
    {id: "Desarrollo de software", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis qui totam. Facilis optio enim corporis voluptatibus, consectetur a sed! Odit modi exercitationem nihil! Iure ducimus exercitationem error quia debitis!4"},
    {id: "Administración de proyecto", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis qui totam. Facilis optio enim corporis voluptatibus, consectetur a sed! Odit modi exercitationem nihil! Iure ducimus exercitationem error quia debitis!5"},
]
 
function validate(index){
    const container = document.querySelector(".info-container");
    const actualDiv = arrIcon[index];
    
    container.innerHTML = '';
    
    const nuevoDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    h3.textContent = actualDiv.id;
    p.textContent = actualDiv.p;

    nuevoDiv.appendChild(h3);
    nuevoDiv.appendChild(p);
    container.appendChild(nuevoDiv);

}


function generateIconContainer() {
    const icons = [];  

    for (let i = 1; i <= 5; i++) {
       const newIconC = document.createElement("div");
       const img = document.createElement("img");

       img.src = `images/service-icon/${i}.svg`;
       img.alt = "";

       newIconC.appendChild(img);
       serviceContainer.appendChild(newIconC);
       newIconC.classList.add(`icon-container`);
       icons.push(img);  

       newIconC.addEventListener('click', () => {
          
        icons.forEach(icon => icon.classList.remove('clicked'));
        validate(i-1);
         
        img.classList.add('clicked');  
       });
    }

    //Default value
    icons[0].classList.add('clicked');
    validate(0);
}

 


window.addEventListener('DOMContentLoaded',  generateIconContainer());