

// TODO: Esta funcion permite moverse estre los pasos
function nextStep() {
    const currentStep =
      document.querySelector("#step-1") ||
      document.querySelector("#step-2") ||
      document.querySelector("#step-3") ||
      document.querySelector("#step-4");
  
    switch (currentStep.id) {
      case "step-1":
        step2HTML();
        btnBack.classList.remove("oculto");
        step1.classList.remove("activo");
        step2.classList.add("activo");
        break;
  
      case "step-2":
        step3HTML();
        step2.classList.remove("activo");
        step3.classList.add("activo");
        break;
  
      case "step-3":
        step4HTML();
        btnNext.textContent = "Confirm";
        btnNext.classList.add("confirm");
        step3.classList.remove("activo");
        step4.classList.add("activo");
        break;
  
      default:
        step5HTML();
        break;
    }
  }
  
  function backStep() {
    const currentStep =
      document.querySelector("#step-1") ||
      document.querySelector("#step-2") ||
      document.querySelector("#step-3") ||
      document.querySelector("#step-4");
  
    switch (currentStep.id) {
      case "step-2":
        step1HTML();
        btnBack.classList.add("oculto");
        step2.classList.remove("activo");
        step1.classList.add("activo");
        break;
  
      case "step-3":
        step2HTML();
        step3.classList.remove("activo");
        step2.classList.add("activo");
        break;
  
      case "step-4":
        step3HTML();
        infoBtn();
        btnNext.classList.remove("confirm");
        step4.classList.remove("activo");
        step3.classList.add("activo");
        break;
  
      default:
        step4HTML();
        break;
    }
  }

