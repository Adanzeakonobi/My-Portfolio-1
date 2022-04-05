function changeButton() {
    const hamburgerButton = document.getElementById('hamburger-btn');
    if (hamburgerButton.getAttribute('src') === 'assets/hamburger.svg') {
      hamburgerButton.setAttribute('src', 'assets/cancel.svg');
    } else {
      hamburgerButton.setAttribute('src', 'assets/hamburger.svg');
    }
  }
  
  function toggle() {
    const mobileMenu = document.getElementById('mobile-nav-list');
    mobileMenu.classList.toggle('toggle-navbar');
    changeButton();
  }
  
  const navLinks = Array.from(document.getElementsByClassName('mobile-nav-link'));
  navLinks.forEach((element) => element.addEventListener('click', toggle));

  let projects=[
    {name:"Bootstrap Portfolio", 
    description: "Its a simple project to learn how to use bootstrap.", 
    image:"", 
    technologies: ["HTML", "CSS", "Bootstrap"], 
    linklive:"", 
    linksource:""
    },

    {name:"Tribute Page", 
    description: "This project is a tribute page example.", 
    image:"", 
    technologies: ["HTML", "CSS"], 
    linklive:"", 
    linksource:""
    },

    {name:"Bootstrap Portfolio", 
    description: "Its a simple project to learn how to use bootstrap.", 
    image:"", 
    technologies: ["HTML", "CSS", "Bootstrap"], 
    linklive:"", 
    linksource:""
    },

    {name:"Bootstrap Portfolio", 
    description: "Its a simple project to learn how to use bootstrap.", 
    image:"", 
    technologies: ["HTML", "CSS", "Bootstrap"], 
    linklive:"", 
    linksource:""
    },

    {name:"Bootstrap Portfolio", 
    description: "Its a simple project to learn how to use bootstrap.", 
    image:"", 
    technologies: ["HTML", "CSS", "Bootstrap"], 
    linklive:"", 
    linksource:""
    },

    {name:"Bootstrap Portfolio", 
    description: "Its a simple project to learn how to use bootstrap.", 
    image:"",
    technologies: ["HTML", "CSS", "Bootstrap"], 
    linklive:"" ,
    linksource:""
    }
  ]
  
let popupcontainer=document.createElement('div')
popupcontainer.className="popupcontainer"

let popuptitle=document.createElement('h3')
popuptitle.className="popuptitle"
popuptitle.textContent=projects[0].name
popupcontainer.appendChild(popuptitle)

let techcontainer=document.createElement("ul")
techcontainer.className="techcontainer"
popupcontainer.appendChild(techcontainer)

projects[0].technologies.forEach(element =>{
  let techcontaineritem=document.createElement("li")
  techcontaineritem.className="techcontaineritem"
  techcontaineritem.textContent=element
  techcontainer.appendChild(techcontaineritem)
})

let popupimage=document.createElement('img')
popupimage.className="popupimage"
popupimage.src="./assets/about-illustration-desk.svg"
popupcontainer.appendChild(popupimage)
document.body.appendChild(popupcontainer)