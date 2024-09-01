export function obtenerPosicionInicial(x,y){
    const Posicion = [x,y]
    return Posicion;
}

export function obtenerOrientacion(orientacion){
    return orientacion
}

export function manejarAuto(){ //VARIABLE DE ENTRADA direccion
    var Posicion = obtenerPosicionInicial(1,0);
    Posicion[0] = Posicion[0] - 1;

    return Posicion;
}