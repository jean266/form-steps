function step2HTML() {
  title.textContent = "Select your plan";
  text.textContent = "You have the option of monthly or yearly billing.";

  // Crear elementos
  const divOptions = document.createElement("DIV");
  const divPlans = document.createElement("DIV");
  const divArcade = document.createElement("DIV");
  const divAdvanced = document.createElement("DIV");
  const divPro = document.createElement("DIV");

  const divInfoArcade = document.createElement("DIV");
  const divInfoAdvanced = document.createElement("DIV");
  const divInfoPro = document.createElement("DIV");

  const imgArcade = document.createElement("IMG");
  const imgAdvanced = document.createElement("IMG");
  const imgPro = document.createElement("IMG");

  const textTitleArcade = document.createElement("H3");
  const textTitleAdvanced = document.createElement("H3");
  const textTitlePro = document.createElement("H3");

  const textArcade = document.createElement("P");
  const textAdvanced = document.createElement("P");
  const textPro = document.createElement("P");

  const divBilling = document.createElement("DIV");
  const divToggle = document.createElement("DIV");
  const divBtnToggle = document.createElement("DIV");
  const textMonthly = document.createElement("P");
  const textYearly = document.createElement("P");

  // Agregar Atributos
  divOptions.id = "step-2";

  divPlans.classList.add("container_plans");

  divArcade.classList.add("arcade", "membership");
  divArcade.id = "arcade";
  imgArcade.src = "assets/images/icon-arcade.svg";
  textTitleArcade.textContent = "Arcade";
  textArcade.classList.add("price_arcade");

  divAdvanced.classList.add("advanced", "membership");
  divAdvanced.id = "advanced";
  imgAdvanced.src = "assets/images/icon-advanced.svg";
  textTitleAdvanced.textContent = "Advanced";
  textAdvanced.classList.add("price_advanced");

  divPro.classList.add("pro", "membership");
  divPro.id = "pro";
  imgPro.src = "assets/images/icon-pro.svg";
  textTitlePro.textContent = "Pro";
  textPro.classList.add("price_pro");

  // toggle
  divBilling.classList.add("container_billing");

  textMonthly.textContent = "Monthly";
  textMonthly.classList.add("monthly", "activo");

  textYearly.textContent = "Yearly";
  textYearly.classList.add("yearly");

  divToggle.classList.add("container_toggle");
  divBtnToggle.classList.add("toggle");

  // Uniendo elementos
  divInfoArcade.appendChild(textTitleArcade);
  divInfoArcade.appendChild(textArcade);
  divArcade.appendChild(imgArcade);
  divArcade.appendChild(divInfoArcade);

  divInfoAdvanced.appendChild(textTitleAdvanced);
  divInfoAdvanced.appendChild(textAdvanced);
  divAdvanced.appendChild(imgAdvanced);
  divAdvanced.appendChild(divInfoAdvanced);

  divInfoPro.appendChild(textTitlePro);
  divInfoPro.appendChild(textPro);
  divPro.appendChild(imgPro);
  divPro.appendChild(divInfoPro);

  divPlans.appendChild(divArcade);
  divPlans.appendChild(divAdvanced);
  divPlans.appendChild(divPro);

  // toggle
  divToggle.appendChild(divBtnToggle);

  divBilling.appendChild(textMonthly);
  divBilling.appendChild(divToggle);
  divBilling.appendChild(textYearly);

  divOptions.appendChild(divPlans);
  divOptions.appendChild(divBilling);

  cleanHTML();
  containerContent.appendChild(divOptions);

  // Inicia todas las funciones del step 2 cuando se imprima la seccion
  functionsStep2();
}

function functionsStep2() {
  const plans = document.querySelectorAll(".membership");

  const url = `${dominio}/20.2-PROYECTO-email/public/uploads/billing.json`;
  const data = fetch(url)
    .then((result) => result.json())
    .catch((error) => console.log(error));

  data.then((data) => sprintPrices(data));

  changeBilling(data); // Cambia el plan seleccinado

  plans.forEach((plan) => {
    plan.addEventListener("click", (e) => {
      planSelect =
        e.target.tagName === "DIV" ? e.target : e.target.parentElement;

      selectPlan(planSelect);
    });
  });

  // selecciona el plan
  function selectPlan(planSelect) {
    const existePlan = document.querySelector(".select");

    if (existePlan) {
      existePlan.classList.remove("select");
      planSelect.classList.add("select");

      //* Asignando el valor al objeto
      assingValues(planSelect);
    } else {
      planSelect.classList.add("select");

      //* Asignando el valor al objeto
      assingValues(planSelect);
    }
  }

  function assingValues(planSelect) {
    //* Asignando el valor al objeto
    dataForm[1].plan = planSelect.id;
    dataForm[1].billing = planSelect.children[1].children[1].id.trim();
    dataForm[1].price = planSelect.children[1].children[1].textContent.trim();
  }

  // Cambia la facturacion mensual o anual
  function changeBilling(data) {
    const btnToggle = document.querySelector(".container_toggle");
    const monthly = document.querySelector(".monthly");
    const yearly = document.querySelector(".yearly");

    if (dataForm[1].billing === "yearly") {
      btnToggle.firstChild.classList.add("yearly");
      monthly.classList.remove("activo");
      yearly.classList.add("activo");

      data.then((data) => sprintPrices(data));
    }

    btnToggle.addEventListener("click", (e) => {
      btnToggle.firstChild.classList.toggle("yearly");
      monthly.classList.toggle("activo");
      yearly.classList.toggle("activo");

      let planSelect = currentPlan();

      selectPlan(planSelect);

      data.then((data) => sprintPrices(data));
    });
  }

  //* Imprime los precios
  function sprintPrices(data) {
    const priceArcade = document.querySelector(".price_arcade");
    const priceAdvanced = document.querySelector(".price_advanced");
    const pricePro = document.querySelector(".price_pro");

    const yearly = data.priceYearly;
    const monthly = data.priceMonthly;

    const billing = document.querySelector(".toggle");

    if (billing.classList.contains("yearly")) {
      const offerArcade = document.createElement("P");
      const offerAdvance = document.createElement("P");
      const offerPro = document.createElement("P");

      cleanOffer();

      offerArcade.classList.add("offer_yearly");
      offerArcade.textContent = "2 months free";

      offerAdvance.classList.add("offer_yearly");
      offerAdvance.textContent = "2 months free";

      offerPro.classList.add("offer_yearly");
      offerPro.textContent = "2 months free";

      priceArcade.parentElement.appendChild(offerArcade);
      priceAdvanced.parentElement.appendChild(offerAdvance);
      pricePro.parentElement.appendChild(offerPro);

      priceArcade.textContent = `$${yearly.arcade}/ye`;
      priceArcade.id = "yearly";

      priceAdvanced.textContent = `$${yearly.advanced}/ye`;
      priceAdvanced.id = "yearly";

      pricePro.textContent = `$${yearly.pro}/ye`;
      pricePro.id = "yearly";
    } else {
      cleanOffer();

      priceArcade.textContent = `$${monthly.arcade}/mo`;
      priceArcade.id = "monthly";

      priceAdvanced.textContent = `$${monthly.advanced}/mo`;
      priceAdvanced.id = "monthly";

      pricePro.textContent = `$${monthly.pro}/mo`;
      pricePro.id = "monthly";
    }

    let planSelect = currentPlan();
    selectPlan(planSelect);
  }
}
