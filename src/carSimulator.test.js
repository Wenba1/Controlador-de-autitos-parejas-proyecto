import { obtenerPosicionInicial } from "./carSimulator.js";

describe("Simulador de Carrito", () => {
  it("deberia mostrar la posicion inicial", () => {
    const resultado = [0,0]
    expect(obtenerPosicionInicial()).toEqual(resultado);
  });
});
