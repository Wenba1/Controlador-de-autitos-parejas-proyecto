import { obtenerPosicionInicial } from "./carSimulator.js";  // Importar la función desde carSimulator.js

const input = document.querySelector("#comandos"); // Asumiendo un input con id 'comandos' para los comandos
const form = document.querySelector("#simulador-form"); // Formulario para enviar comandos
const divPosInicial = document.querySelector("#posicion-inicial-div"); // Div para mostrar la posición inicial
const divPosFinal = document.querySelector("#posicion-final-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandos = input.value; // Obtener el valor de los comandos ingresados
  const posicionInicial = obtenerPosicionInicial(comandos); // Obtener la posición inicial del auto

  divPosInicial.innerHTML = "<p>Posición Inicial: " + posicionInicial + "</p>"; // Mostrar la posición inicial
});
