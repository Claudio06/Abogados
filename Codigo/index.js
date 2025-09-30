const d = document;

d.addEventListener("DOMContentLoaded", () => {
  faq();
  nav();
  validarform();
  btntop();
  // testimonio();
});

const question = [
  {
    preg: "¿Cuál es la política de privacidad?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "What legal areas do you specialize in?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "How much experience do you have?What is your process like?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "What is your process like?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "Can you provide an estimate for my case?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "How long will it take to resolve my issue?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "What are my possible outcomes?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "How accessible will my lawyer be?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
   {
    preg: "",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const faq = () => {
const cuestionario = d.getElementById("preguntas");
  question.forEach((preg) => {
    cuestionario.innerHTML += `
       <details>
         <summary>${preg.preg}</summary>
         <p class="txt_preg">${preg.respuesta}</p>
       </details>
     `;
  });
}
const nav = () => {
  const movil = d.getElementById("movil"),
    // close = d.getElementById("close"),
    lista = d.querySelector(".list-nav-Bar");
    linkAll = d.querySelectorAll(".list-nav-Bar li");
  console.log(movil);
  movil.addEventListener("click", () => {
    lista.classList.toggle("activa");
  });
  linkAll.forEach((link) => {
    link.addEventListener("click", () => {
      lista.classList.remove("activa");
    });
  });
  // close.addEventListener("click", () => {
  //   lista.classList.remove("activa");
  // });
};

const validarform = () => {
  const form = d.querySelector("form"),
    btn = d.querySelector(".btn_formulario"),
    msj = d.querySelector("textarea"),
    name = d.getElementById("nombre"),
    email = d.getElementById("email");
  btn.disabled = true;

  form.addEventListener("keyup", () => {
    console.log(name);
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,40}$/,
      emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
   
      name.value.match(nombreRegex)
      ? (name.style.border = "2px solid green")
      : (name.style.border = "2px solid red");

    email.style.border = emailRegex.test(email.value)
      ? "2px solid green"
      : "2px solid red";
    msj.value.length < 10 ?  msj.style.border = "2px solid red"  : msj.style.border = "2px solid green";

    if (
      name.value.trim() !== "" &&
      email.value.trim() !== "" &&
      msj.value.trim() !== ""
    ) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  btn.addEventListener("submit", (e) => {
    // e.preventDefault();
    setTimeout(() => {
      alert('formulario enviado correctamente');

    },2000);
    form.reset();
    btn.disabled = true;
  });
};

const testimonios =[
  {
    img: "./Imagenes/cliente1.jpg",
    desc : "Me encanta este club. Las instalaciones son modernas y el personal es muy amable. He visto grandes mejoras en mi salud desde que me uní.",
    name: "Ana G."
  },{
    img: "./Imagenes/cliente2.jpg",
    desc : "Los entrenadores son profesionales y siempre están dispuestos a ayudar. Las clases grupales son divertidas y motivadoras. ¡Recomiendo este club a todos!",
    name: "Carlos M."
  },{
    img: "./Imagenes/cliente3.jpg",
    desc : "He probado varios gimnasios, pero este es el mejor. La variedad de clases y el ambiente son inigualables.",
    name: "Laura P."
  }
];

// const testimonio = () => {
// const clientes = d.querySelector(".swiper-wrapper"); 
// testimonios.forEach((testi) => {
//   clientes.innerHTML += `
//       <figure class="swiper-slide"><img src="${testi.img}" alt="Cliente"/>
//       <figcaption class="desc_testimonio">${testi.desc}</figcaption>
//       <h4 class="name_testimonio">${testi.name}</h4>
//     </figure>
    
  

              
//   ` ;

// }
// ) 

//  }

const btntop = () =>{
const scroll = d.getElementById('btnup');
const navBar = d.querySelector('.navbar');
scroll.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


})
window.addEventListener('scroll', () => {
// console.log(navBar.scrollTop);
  if (window.scrollY >250) {
    scroll.classList.add('activo');
  } else {
    scroll.classList.remove('activo');

  }
})
}