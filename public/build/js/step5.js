
function step5HTML () {

    const divContent = document.querySelector("#content");

    // Crear elementos 
    const divThanks = document.createElement("DIV");
    const divThankYou = document.createElement("DIV");
    const divImg = document.createElement("DIV");
    const img = document.createElement("IMG");
    const h2 = document.createElement("H2");
    const text = document.createElement("P");

    // Añadir atributos
    divThanks.classList.add("container_thanks");
    divThankYou.id = "step-5";
    divThankYou.classList.add("thank_you");

    divImg.classList.add("image_thanks");
    img.src = "./assets/images/icon-thank-you.svg";
    img.alt = "Icono de thank you";

    h2.textContent = "Thank you!";

    text.textContent = "Thanks for confirming your subscription! We hope have fun using our platform. If your ever need support, please feel free to email us at support@loremgaming.com."

    // Unir elementos 
    
    divThankYou.appendChild(img);
    divThankYou.appendChild(h2);
    divThankYou.appendChild(text);

    divThanks.appendChild(divThankYou);

    // Añadir al HTML
    cleanHTML();
    cleanOther();
    containerContent.appendChild(divThanks);
}