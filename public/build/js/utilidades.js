//* Utilidades
function sprintAlert(input, message) {
  cleanAlert(input);

  const id = input.id;
  const containerAlert = document.querySelector(`label[for=${id}]`);
  const inputSelect = document.querySelector(`#${id}`);

  const alert = document.createElement("P");
  alert.classList.add("alert");
  alert.textContent = message;

  if (!inputSelect.classList.contains("alert_input")) {
    inputSelect.classList.add("alert_input");
  }

  containerAlert.parentElement.appendChild(alert);
}

function currentStep () {
  const current = 
  document.querySelector("#step-1") ||
  document.querySelector("#step-2") ||
  document.querySelector("#step-3") ||
  document.querySelector("#step-4");

  return current.id;
}

function cleanAlert(input) {
  const id = input.id;
  const containerAlert = document.querySelector(
    `label[for=${id}]`
  ).parentElement;
  const inputSelect = document.querySelector(`#${id}`);

  const alert = containerAlert.querySelector(".container_alert .alert");

  if (inputSelect.classList.contains("alert_input")) {
    inputSelect.classList.remove("alert_input");
  }

  if (alert) {
    alert.remove();
  }
}

//* Limpia el HTML
function cleanHTML() {

  while (containerContent.firstChild) {
    containerContent.removeChild(containerContent.firstChild);
  }
}

//* Quita la oferta anual
function cleanOffer() {
  
  const offerYearly = document.querySelectorAll(".offer_yearly");

  if(offerYearly.length > 0) {
    offerYearly.forEach( offer => {
      offer.remove();
    })
  }
}

//* plan actual selecionado
function currentPlan() {
  const currentPlan = dataForm[1].plan;
  let planSelect = "";

  if (currentPlan === "") {
    planSelect = document.querySelector("#arcade");
  } else {
    planSelect = document.querySelector(`.${currentPlan}`);
  }

  return planSelect;
}

//** Cambia la info del boton segun el paso en el que esta */
function infoBtn () {
  if(btnNext.classList.contains("confirm")) {
    btnNext.textContent = "Next Step";
    btnNext.classList.remove("confirm");
  }
}

//** Filtra los numeros de una cadena de texto */
function filterPrice (strings) {

  let mtp = strings.split("");
  
  let numbers = mtp.filter( current => {
    
    if(!isNaN(parseInt(current))) {
      return current;
    }
    
  })

  let number = numbers.join("");
  return parseInt(number);
}

//** Elimina el titulo y los botones en el paso 5 */
function cleanOther() {
  const contentHeader = document.querySelector(".content_header");
  const buttons = document.querySelector(".buttons");

  if(contentHeader && buttons ) {
    contentHeader.remove();
    buttons.remove();
  }
}