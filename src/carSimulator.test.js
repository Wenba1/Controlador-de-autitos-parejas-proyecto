import { obtenerPosicionInicial,obtenerOrientacion,manejarAuto, girarAuto } from "./carSimulator.js";

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

  //Manejar a la izquierda con orientacion al Norte
  it("Girar auto a la izquierda", () => {
    const resultado = "O";
    expect(girarAuto("I","N")).toEqual(resultado);
  });
  //Manejar a la derecha con orientacion al Norte
  it("Girar auto a la derecha", () => {
    const resultado = "E";
    expect(girarAuto("D","N")).toEqual(resultado);
  });
  //Manejar a la izquierda con orientacion al Este
  it("Girar auto a la izquierda", () => {
    const resultado = "N";
    expect(girarAuto("I","E")).toEqual(resultado);
  });
  //Manejar a la derecha con orientacion al Este
  it("Girar auto a la derecha", () => {
    const resultado = "S";
    expect(girarAuto("D","E")).toEqual(resultado);
  });
  //Manejar a la izquierda con orientacion al Oeste
  it("Girar auto a la izquierda", () => {
    const resultado = "S";
    expect(girarAuto("D","O")).toEqual(resultado);
  });
  //Manejar a la derecha con orientacion al Oeste
  it("Girar auto a la derecha", () => {
    const resultado = "N";
    expect(girarAuto("D","O")).toEqual(resultado);
  });
  //Avanza
  it("Maneja el auto hacia adelante", () => {
    const resultado = [1,2];
    expect(manejarAuto("A","N")).toEqual(resultado);
  });

});
