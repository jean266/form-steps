//* Variables
const title = document.querySelector(".content_title");
const text = document.querySelector(".content_text");
const containerContent = document.querySelector("#container_content");

const dominio = window.location.origin;

const btnBack = document.querySelector(".btn_back");
const btnNext = document.querySelector(".btn_next");

const step1 = document.querySelector(".step-1 span");
const step2 = document.querySelector(".step-2 span");
const step3 = document.querySelector(".step-3 span");
const step4 = document.querySelector(".step-4 span");

let current = "";

const dataForm = [
  {
    name: "",
    email: "",
    phone: ""
  },
  {
    plan : "",
    price : "",
    billing : "",
  },
  [
  ]
];

//* Eventos
document.addEventListener("DOMContentLoaded", () => {

  // Imprime el HTML
  cleanHTML(); // Limpia el HTML
  step1HTML(); // Imprime el primer paso
  
  current = currentStep(); // dice el id del paso actual
    
  btnNext.addEventListener("click", (e) => {

    current = currentStep();

    if (current === "step-1") {
      showMistakes();
      validate(e);
    } else {
      nextStep();
    }
  });
  
  btnBack.addEventListener("click", (e) => backStep());
});


//* Funciones

//* Validacion
// Muestra las alertas en tiempo real
function showMistakes() {
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputPhone = document.querySelector("#phone");

  inputName.addEventListener("input", (e) => {
    validateCampo(inputName);

  });
  inputEmail.addEventListener("input", (e) => {
    validateEmail(inputEmail);
    
    
  });
  inputPhone.addEventListener("input", (e) => {
    validatePhone(inputPhone);
    
  });
}
