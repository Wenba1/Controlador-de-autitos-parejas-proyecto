import { manejarAutoxComandos, obtenerOrientacion, obtenerPosicionInicial } from "./carSimulator.js";

const comandos_input = document.querySelector("#comandos");
const form = document.querySelector("#simulador-form");
const divPosInicial = document.querySelector("#posicioninicial-div");
const divComandos = document.querySelector("#comandos-div");
const divPosFinal = document.querySelector("#posicionfinal-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const comandosInput = comandos_input.value.split('/');
    const campo = comandosInput[0].split(',').map(Number); // Ahora obtenemos el campo como un arreglo de números [maxX, maxY]
    const posicionInicialYorientacion = comandosInput[1];
    const comandos = comandosInput[2];

    // Extraer posición y orientación inicial
    const posicionXY = posicionInicialYorientacion.match(/\d+,\d+/)[0].split(',').map(Number);
    const orientacionInicial = obtenerOrientacion(posicionInicialYorientacion.slice(-1));

    // Manejar los comandos
    const resultado = manejarAutoxComandos(comandos, orientacionInicial, posicionXY, campo);
    const posicionFinal = resultado.Posicion;
    const orientacionFinal = resultado.orientacion;

    divPosInicial.innerHTML = `<p>Posición Inicial: ${posicionXY[0]},${posicionXY[1]}${orientacionInicial}</p>`;
    divComandos.innerHTML = `<p>Comandos: ${comandos}</p>`;
    divPosFinal.innerHTML = `<p>Posición Final: ${posicionFinal[0]},${posicionFinal[1]}${orientacionFinal}</p>`;
});
