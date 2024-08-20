import {botSaludos} from "./saludador.js";

const form = document.querySelector("#botSaludos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const botsaludos = new botSaludos();

  div.innerHTML = "<p>" + botsaludos.saludar() + "</p>";
});
