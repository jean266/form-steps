let servicesAdss = {};

function step3HTML() {
  title.textContent = "Pick add-ons";
  text.textContent = "Add-ons help enhance your gaming experience.";

  // Creando elementos
  const form = document.createElement("FORM");

  const divOnline = document.createElement("DIV");
  const labelOnline = document.createElement("DIV");
  const divInfoOnline = document.createElement("DIV");
  const textOnline = document.createElement("P");
  const infoOnline = document.createElement("P");
  const inputOnline = document.createElement("INPUT");

  const divStorage = document.createElement("DIV");
  const labelStorage = document.createElement("DIV");
  const divInfoStorage = document.createElement("DIV");
  const textStorage = document.createElement("P");
  const infoStorage = document.createElement("P");
  const inputStorage = document.createElement("INPUT");

  const divProfile = document.createElement("DIV");
  const labelProfile = document.createElement("DIV");
  const divInfoProfile = document.createElement("DIV");
  const textProfile = document.createElement("P");
  const infoProfile = document.createElement("P");
  const inputProfile = document.createElement("INPUT");

  const priceOnline = document.createElement("P");
  const priceStorage = document.createElement("P");
  const priceProfile = document.createElement("P");

  // Añadiendo atributos
  form.id = "step-3";
  form.classList.add("container_add-ons");

  divOnline.classList.add("container_adds");
  divOnline.id = "service-1";
  divInfoOnline.classList.add("container_info");
  labelOnline.classList.add("online_service");
  textOnline.classList.add("name_add", "name_online");
  infoOnline.classList.add("info_add", "info_online");
  inputOnline.type = "checkbox";

  priceOnline.classList.add("price_online");
  priceOnline.id = "price_add";

  divStorage.classList.add("container_adds");
  divStorage.id = "service-2";
  divInfoStorage.classList.add("container_info");
  labelStorage.classList.add("larger_storage");
  textStorage.classList.add("name_add", "name_storage");
  infoStorage.classList.add("info_add", "info_storage");
  inputStorage.type = "checkbox";

  priceStorage.classList.add("price_storage");
  priceStorage.id = "price_add";

  divProfile.classList.add("container_adds");
  divProfile.id = "service-3";
  divInfoProfile.classList.add("container_info");
  labelProfile.classList.add("customizable_profile");
  textProfile.classList.add("name_add", "name_profile");
  infoProfile.classList.add("info_add", "info_profile");
  inputProfile.type = "checkbox";

  priceProfile.classList.add("price_profile");
  priceProfile.id = "price_add";

  // Uniendo elementos
  divInfoOnline.appendChild(textOnline);
  divInfoOnline.appendChild(infoOnline);
  labelOnline.appendChild(inputOnline);
  labelOnline.appendChild(divInfoOnline);

  divInfoStorage.appendChild(textStorage);
  divInfoStorage.appendChild(infoStorage);
  labelStorage.appendChild(inputStorage);
  labelStorage.appendChild(divInfoStorage);

  divInfoProfile.appendChild(textProfile);
  divInfoProfile.appendChild(infoProfile);
  labelProfile.appendChild(inputProfile);
  labelProfile.appendChild(divInfoProfile);

  divOnline.appendChild(labelOnline);
  divOnline.appendChild(priceOnline);

  divStorage.appendChild(labelStorage);
  divStorage.appendChild(priceStorage);

  divProfile.appendChild(labelProfile);
  divProfile.appendChild(priceProfile);

  form.appendChild(divOnline);
  form.appendChild(divStorage);
  form.appendChild(divProfile);

  cleanHTML();
  containerContent.appendChild(form);

  functionsStep3();
}

// Llama todas las funciones realcionadas con el paso 3
function functionsStep3() {
  // Consulta los datos de los servicios add-ons
  const url = `${dominio}/public/uploads/add-ons.json`;
  const data = fetch(url).then((result) => result.json());
  data.then((data) => sprintInfoStep3(data));

  const checksAdd = document.querySelectorAll("input[type='checkbox']");

  checksAdd.forEach((check) => {
    check.addEventListener("click", (e) => {
      let id = e.target.parentElement.parentElement.id;
      selectAdd(id);
    });
  });

  
}

// Imprime los precios monthly o yearly
function sprintInfoStep3(data) {
  // Nombres de los servicios
  const nameOnline = document.querySelector(".name_online");
  const nameStorage = document.querySelector(".name_storage");
  const nameProfile = document.querySelector(".name_profile");

  // Informacion de los servicios
  const infoOnline = document.querySelector(".info_online");
  const infoStorage = document.querySelector(".info_storage");
  const infoProfile = document.querySelector(".info_profile");

  // Precios
  const priceOnline = document.querySelector(".price_online");
  const priceStorage = document.querySelector(".price_storage");
  const priceProfile = document.querySelector(".price_profile");

  // Informacion de un arhivo externo
  const onlineService = data.services.onlineService;
  const largerStorage = data.services.largerStorage;
  const customizableProfile = data.services.customizableProfile;

  //** Asignacion de la informacion */

  // Nombre del sercivio
  nameOnline.textContent = onlineService.name;
  nameStorage.textContent = largerStorage.name;
  nameProfile.textContent = customizableProfile.name;

  // Informacion del servicio
  infoOnline.textContent = onlineService.info;
  infoStorage.textContent = largerStorage.info;
  infoProfile.textContent = customizableProfile.info;

  if (dataForm[1].billing === "yearly") {
    priceOnline.textContent = `+$${onlineService.priceYearly}/ye`;
    priceStorage.textContent = `+$${largerStorage.priceYearly}/ye`;
    priceProfile.textContent = `+$${customizableProfile.priceYearly}/ye`;
  } else {
    priceOnline.textContent = `+$${onlineService.priceMonthly}/mo`;
    priceStorage.textContent = `+$${largerStorage.priceMonthly}/mo`;
    priceProfile.textContent = `+$${customizableProfile.priceMonthly}/mo`;
  }

  if (dataForm[2].length !== 0) {
    dataForm[2].forEach((service) => {
        const chexbox = document.querySelector("#"+service.id)
            .querySelector("input");

        chexbox.checked = "checked";
            selectAdd(service.id);
    });
  }
}

function selectAdd(id) {
  const elementService = document.querySelector(`#${id}`);
  const name = elementService.querySelector(".name_add").textContent.trim();
  const price = elementService.querySelector("#price_add").textContent.trim();

  servicesAdss = {
    id: id,
    name: name,
    price: price,
  };

  if (elementService.classList.contains("activo")) {
    elementService.classList.remove("activo");

    const newServices = dataForm[2].filter(
      (service) => service.id !== elementService.id
    );

    dataForm.pop();
    dataForm.push(newServices);
  } else {
    elementService.classList.add("activo");

    if(dataForm[2].length > 0) {
      
      dataForm[2].forEach( service => {

        if(service.id === servicesAdss.id) {
          const newServices = dataForm[2].filter(
            (service) => service.id !== elementService.id
          );

          dataForm.pop();
          dataForm.push(newServices);
        }

      })
    }

    dataForm[2].push(servicesAdss);
    servicesAdss = {};

  }
}

