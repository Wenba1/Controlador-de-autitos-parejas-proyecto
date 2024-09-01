import { obtenerPosicionInicial,obtenerOrientacion,manejarAuto } from "./carSimulator.js";

describe("Simulador de Carrito", () => {
    //Mostrar Posicion Inicial
  it("Muestra posicion inicial para 0x y 0y", () => {
    const resultado = [0,0]
    expect(obtenerPosicionInicial(0,0)).toEqual(resultado);
  });
  it("Muestra posicion inicial", () => {
    var resultado = [15,30]
    expect(obtenerPosicionInicial(15,30)).toEqual(resultado);
  });

  //Mostrar Orientacion
  it("Muestra orientacion para N", () => {
    const resultado = "N";
    expect(obtenerOrientacion("N")).toEqual(resultado);
  });
  it("Muestra orientacion del Auto", () => {
    const resultado = "S"
    expect(obtenerOrientacion("S")).toEqual(resultado);
  });

  //Manejar a la izquierda
  it("Maneja auto a la izquierda", () => {
    const resultado = [0,0];
    expect(manejarAuto("I")).toEqual(resultado);
  });

  //Manejar a la derecha
  it("Maneja auto a la derecha", () => {
    const resultado = [2,0];
    expect(manejarAuto("D")).toEqual(resultado);
  });

});
