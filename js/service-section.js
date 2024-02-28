const serviceSection = document.getElementById("service-section");
const serviceContainer = document.createElement("div");
const infoContainer = document.createElement("div");


serviceContainer.classList.add("service-container");
infoContainer.classList.add("info-container");
serviceSection.appendChild(serviceContainer)
serviceSection.appendChild(infoContainer)

const arrIcon = [
    {id: "It Outsorcing", p: "El servicio de outsourcing permite a nuestros clientes disponer de equipos tecnológicos altamente competitivos, sin asumir los costos de un equipo interno como el mantenimiento, la contratación, la formación, entre otros, lo que les permite centrarse en su negocio."},
    {id: "Headhunting", p: "Contamos con una gran red de especialistas a nivel global, ayudamos a que nuestros clientes puedan encontrar a ese profesional que haga match con sus requerimientos"},
    {id: "Mantenimiento de software", p: "Sabemos que algunos sistemas no pueden cambiar, contamos con expertos para esos requerimientos especiales como Cobol, Perl y DB2 "},
    {id: "Desarrollo de software", p: "Desarrollamos software de alta calidad, nuestros expertos tienen basta experiencia trabajando en proyectos a nivel global, enfocado a miles de usuarios."},
    {id: "Administración de proyectos", p: "Contamos con muchos expertos en management, los cuales te ayudaran a aterrizar cada una de tus ideas y podran dirigir cada paso del proyecto."},
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
        img.style.cursor = 'pointer'

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