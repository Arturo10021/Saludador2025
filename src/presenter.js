import {botSaludos} from "./saludador.js";

    const nombre = document.querySelector("#nombre");
    const form = document.querySelector("#botSaludos-form");
    const horaActual = new Date().getHours();
    const genero = document.querySelector("#genero");
    const edad = document.querySelector("#edad");
    const idioma = document.querySelector("#idioma");
    const div = document.querySelector("#resultado-div");
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
        const botsaludos = new botSaludos();
        console.log(horaActual.value);
        div.innerHTML = "<p>"+botsaludos.saludar(nombre.value,horaActual,genero.value, edad.value, idioma.value)+"</p>";
    }
);
