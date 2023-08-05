
function step1HTML () {
    title.textContent = "Personal info";
    text.textContent = "Please provide your name, email address, and phone number.";

    // Crear elementos
    const form = document.createElement("FORM");

    const divName = document.createElement("DIV");
    const labelName = document.createElement("label");
    const inputName = document.createElement("input");
    
    const divEmail = document.createElement("DIV");
    const labelEmail = document.createElement("label");
    const inputEmail = document.createElement("input");
    
    const divPhone = document.createElement("DIV");
    const labelPhone = document.createElement("label");
    const inputPhone = document.createElement("input");

    // Añadir atributos
    form.classList.add("form")
    form.id = "step-1";

    divName.classList.add("container_alert");
    labelName.textContent = "Name";
    labelName.setAttribute("for", "name");
    inputName.placeholder = "e.g. stephen King";
    inputName.type = "text";
    inputName.id = "name";
    inputName.value = dataForm[0].name;
    
    divEmail.classList.add("container_alert");
    labelEmail.textContent = "Email Address";
    labelEmail.setAttribute("for", "email");
    inputEmail.type = "email";
    inputEmail.placeholder = "e.g. stephenking@lorem.com"
    inputEmail.id = "email";
    inputEmail.value = dataForm[0].email;
    
    divPhone.classList.add("container_alert");
    labelPhone.textContent = "Phone Number";
    labelPhone.setAttribute("for", "phone");
    inputPhone.type = "tel";
    inputPhone.placeholder = "e.g. +1 234 567 890";
    inputPhone.id = "phone";
    inputPhone.value = dataForm[0].phone;

    // Añadiendolos al form
    divName.appendChild(labelName);
    form.appendChild(divName);
    form.appendChild(inputName);

    divEmail.appendChild(labelEmail);
    form.appendChild(divEmail);
    form.appendChild(inputEmail);
    
    divPhone.appendChild(labelPhone);
    form.appendChild(divPhone);
    form.appendChild(inputPhone);

    // Limpiando el html
    cleanHTML();

    // Añadiendo el form
    containerContent.appendChild(form);

}

// Valida que todos los campos cumplan la condiccion; si la cumple activa el boton de "next step"
function validate() {
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");
  
    const name = validateCampo(inputName);
    const email = validateEmail(inputEmail);
    const phone = validatePhone(inputPhone);
  
    if (name && email && phone) {
      nextStep(); // Habilita el boton para pasar a las siguientes pasos
    }
  }
  
  // Valida que el campo tenga algun valor
  function validateCampo(input) {
    const id = input.id;
    if (input.value.trim() === "") {
  
      sprintAlert(input, "This field is required");
      return false;
  
    } else {
  
      cleanAlert(input);
  
      // Guardar el valor del input en el objeto dataForm
      dataForm[0][id] = input.value.trim();
    }
    return true;
  }
  // Valida que el campo email sea valido y tenga contenido
  function validateEmail(input) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(input.value.trim());
  
    if (validateCampo(input)) {
      if (!result) {
        sprintAlert(input, "The email is not valid");
        return false;
      } else {
        cleanAlert(input);
      }
  
      return true;
    }
  
    return false;
  }
  // Valida que el campo telefono tenga contenido y sea valido
  function validatePhone(input) {
    const regex =
      /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/;
    const result = regex.test(input.value.trim());
  
    if (validateCampo(input)) {
      if (!result) {
        sprintAlert(input, "The phone is not valid");
        return false;
      } else {
        cleanAlert(input);
      }
  
      return true;
    }
  
    return false;
  }
  