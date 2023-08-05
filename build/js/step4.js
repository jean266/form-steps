
function step4HTML() {
    title.textContent = "Finishing up";
    text.textContent = "Double-check everthing looks OK before comfirming.";

    // Creando elementos
    const containerFinishing = document.createElement("DIV");

    const divPlan = document.createElement("DIV");

    const divInfoPlan = document.createElement("DIV");
    const namePlan = document.createElement("DIV");
    const btnChange = document.createElement("P");
    const pricePlan = document.createElement("A");

    const servicesAdd = document.createElement("DIV");

    const divTotal = document.createElement("DIV");
    const textTotal = document.createElement("P");
    const priceTotal = document.createElement("P");

    // Añadir propiedades
    containerFinishing.classList.add("container_finish");
    containerFinishing.id = "step-4"

    divPlan.classList.add("plan");

    divInfoPlan.classList.add("info_plan");
    namePlan.classList.add("name_plan");
    namePlan.id = "name_plan";

    btnChange.href = "#";
    btnChange.classList.add("change");
    btnChange.textContent = "Change";

    pricePlan.classList.add("price_plan");
    pricePlan.id = "price_plan";

    servicesAdd.classList.add("container_services");
    servicesAdd.id = "services_add";

    divTotal.classList.add("container_total");
    textTotal.classList.add("info_total");
    priceTotal.classList.add("price_total");
    priceTotal.id = "price_total";


    // Agrendo los elementos
    divInfoPlan.appendChild(namePlan);
    divInfoPlan.appendChild(btnChange);

    divPlan.appendChild(divInfoPlan);
    divPlan.appendChild(pricePlan);

    divTotal.appendChild(textTotal);
    divTotal.appendChild(priceTotal);

    containerFinishing.appendChild(divPlan);
    containerFinishing.appendChild(servicesAdd);

    cleanHTML();
    containerContent.appendChild(containerFinishing);
    containerContent.appendChild(divTotal);

    functionsStep4();
}

// Inicia todas las funciones cuando se imprima el paso cuatro 

function functionsStep4() {
    //** El boton "change" manda al usuario al step 2 para elegir otro plan */
    const btnChange = document.querySelector(".change");
    btnChange.addEventListener('click', e => {
        infoBtn();
        step2HTML()
    });

    sprintInfo(dataForm[1]);
    sprintAdd(dataForm[2])
    sprintTotal();

    function sprintInfo(data) {
        let billing = data.billing;
        billing = billing[0].toUpperCase() + billing.substring(1);
        let plan = data.plan;
        plan = plan[0].toUpperCase() + plan.substring(1);

        const namePlan = document.querySelector("#name_plan");
        namePlan.textContent = `${plan} (${billing})`;

        const pricePlan = document.querySelector("#price_plan");
        pricePlan.textContent = data.price;

    }

    function sprintAdd(data) {
        
        if(data.length > 0) {
            data.forEach( service => {
                const divServices = document.querySelector("#services_add");
                const divPlan = document.createElement("DIV");
                const nameService = document.createElement("P");
                const priceService = document.createElement("P");

                divPlan.classList.add("add_service");
                nameService.classList.add("name_service-add");
                priceService.classList.add("price_service-add");

                nameService.textContent = service.name;
                priceService.textContent = service.price;

                divPlan.appendChild(nameService);
                divPlan.appendChild(priceService);

                divServices.appendChild(divPlan);
            });
        }
    }

    function sprintTotal() {
        const infoTotal = document.querySelector(".info_total");
        const priceTotal = document.querySelector("#price_total");
        const pricePlan = filterPrice(dataForm[1].price);
        let totalAddOns = 0;
        
        if(dataForm[2].length > 0 ) {

            let priceAddOns = dataForm[2].map( addOns => {
                let price = filterPrice(addOns.price);
                return price;
            })

            totalAddOns = priceAddOns.reduce( (a, b) => a + b, 0);
        }

        const total = pricePlan + totalAddOns;
        
        if(dataForm[1].billing === "yearly") {
            infoTotal.textContent = "Total (per year)";
            priceTotal.textContent = `$${total}/yr`
            
        } else {
            infoTotal.textContent = "Total (per month)";
            priceTotal.textContent = `$${total}/mo`
        }
        
    }

}