import { obtenerPosicionInicial, obtenerOrientacion, manejarAuto, girarAuto, manejarAutoxComandos } from "./carSimulator.js";

describe("Simulador de Carrito", () => {
  // Mostrar Posición Inicial
  it("Muestra posición inicial para 0x y 0y", () => {
    const resultado = [0, 0];
    expect(obtenerPosicionInicial(0, 0)).toEqual(resultado);
  });
  it("Muestra posición inicial", () => {
    var resultado = [15, 30];
    expect(obtenerPosicionInicial(15, 30)).toEqual(resultado);
  });

  // Mostrar Orientación
  it("Muestra orientación para N", () => {
    const resultado = "N";
    expect(obtenerOrientacion("N")).toEqual(resultado);
  });
  it("Muestra orientación del Auto", () => {
    const resultado = "S";
    expect(obtenerOrientacion("S")).toEqual(resultado);
  });

  // Girar a la izquierda o derecha con orientación al Norte
  it("Girar auto a la izquierda", () => {
    const resultado = "O";
    expect(girarAuto("I", "N")).toEqual(resultado);
  });
  it("Girar auto a la derecha", () => {
    const resultado = "E";
    expect(girarAuto("D", "N")).toEqual(resultado);
  });

  // Girar a la izquierda o derecha con orientación al Este
  it("Girar auto a la izquierda", () => {
    const resultado = "N";
    expect(girarAuto("I", "E")).toEqual(resultado);
  });
  it("Girar auto a la derecha", () => {
    const resultado = "S";
    expect(girarAuto("D", "E")).toEqual(resultado);
  });

  // Girar a la izquierda o derecha con orientación al Oeste
  it("Girar auto a la izquierda", () => {
    const resultado = "S";
    expect(girarAuto("I", "O")).toEqual(resultado);
  });
  it("Girar auto a la derecha", () => {
    const resultado = "N";
    expect(girarAuto("D", "O")).toEqual(resultado);
  });

  // Girar a la izquierda o derecha con orientación al Sur
  it("Girar auto a la izquierda", () => {
    const resultado = "E";
    expect(girarAuto("I", "S")).toEqual(resultado);
  });
  it("Girar auto a la derecha", () => {
    const resultado = "O";
    expect(girarAuto("D", "S")).toEqual(resultado);
  });

  // Manejar el auto hacia el Este 
  it("Maneja el auto hacia adelante al Este", () => {
    const resultado = { Posicion: [2, 1], orientacion: "E" };
    expect(manejarAuto("A", "E", [1, 1])).toEqual(resultado);
  });
  // Maneja el auto hacia el Norte
  it("Maneja el auto hacia adelante", () => {
    const resultado = { Posicion: [1, 2], orientacion: "N" };
    expect(manejarAuto("A", "N", [1, 1])).toEqual(resultado);
  });
  // Manejar el auto hacia el Oeste 
  it("Maneja el auto hacia adelante al Oeste", () => {
    const resultado = { Posicion: [0, 1], orientacion: "O" };
    expect(manejarAuto("A", "O", [1, 1])).toEqual(resultado);
  });
  // Manejar el auto hacia el Sur
  it("Maneja el auto hacia adelante al Sur", () => {
    const resultado = { Posicion: [1, 0], orientacion: "S" };
    expect(manejarAuto("A", "S", [1, 1])).toEqual(resultado);
  });

  // Controlar al auto por comandos
  it("Maneja el auto con Comandos del Ejemplo 1", () => {
    const comandos = "IAIAIAIAA";
    const resultado = { Posicion: [1, 3], orientacion: "N" };
    expect(manejarAutoxComandos(comandos, "N")).toEqual(resultado);
  });
});
