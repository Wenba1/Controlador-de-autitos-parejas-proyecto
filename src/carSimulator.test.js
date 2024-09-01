import { obtenerPosicionInicial } from "./carSimulator.js";

describe("Simulador de Carrito", () => {
  it("deberia mostrar la posicion inicial", () => {
    const resultado = [0,0]
    expect(obtenerPosicionInicial(0,0)).toEqual(resultado);
  });
  it("deberia mostrar la posicion inicial desde 15,30", () => {
    var resultado=[15,30]
    expect(obtenerPosicionInicial(15,30)).toEqual(resultado);
  });
});
