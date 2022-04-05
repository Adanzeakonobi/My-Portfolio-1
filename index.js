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
  
  console.log(projects)