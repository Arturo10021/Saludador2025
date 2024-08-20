import {botSaludos} from "./saludador.js";

const form = document.querySelector("#botSaludos-form");
const div = document.querySelector("#resultado-div");
const horaActual = new Date().getHours();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const botsaludos = new botSaludos();
  console.log(horaActual.value);
  div.innerHTML = "<p>" + botsaludos.saludar() + "</p>";
});
