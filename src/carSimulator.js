export function obtenerPosicionInicial(x,y){
    return [x,y];
}

export function obtenerOrientacion(orientacion){
    return orientacion
}

export function girarAuto(direccion, orientacion_inicial){
    let nuevaOrientacion = orientacion_inicial;

    switch (orientacion_inicial) {
        case 'N':
            if(direccion === "I"){
                nuevaOrientacion = 'O';
            } else if(direccion === "D"){
                nuevaOrientacion = 'E';
            }
            break;
        case 'E':
            if(direccion === "I"){
                nuevaOrientacion = 'N';
            } else if(direccion === "D"){
                nuevaOrientacion = 'S';
            }
            break;
        case 'S':
            if(direccion === "I"){
                nuevaOrientacion = 'E';
            } else if(direccion === "D"){
                nuevaOrientacion = 'O';
            }
            break;
        case 'O':
            if(direccion === "I"){
                nuevaOrientacion = 'S';
            } else if(direccion === "D"){
                nuevaOrientacion = 'N';
            }
            break;
    }
    return nuevaOrientacion;
}

export function manejarAuto(direccion, orientacion_inicial, posicion_inicial){
    let Posicion = [...posicion_inicial];
    let orientacion = girarAuto(direccion, orientacion_inicial);

    if (direccion === 'A') {
        switch (orientacion) {
            case 'N':
                Posicion[1] += 1; // Mover al norte incrementa Y
                break;
            case 'E':
                Posicion[0] += 1; // Mover al este incrementa X
                break;
            case 'S':
                Posicion[1] -= 1; // Mover al sur decrementa Y
                break;
            case 'O':
                Posicion[0] -= 1; // Mover al oeste decrementa X
                break;
        }
    }
    return { Posicion, orientacion }; // Retorna la posición y la nueva orientación
}

export function manejarAutoxComandos(comandos, orientacion_inicial){ //IAIAIAIAA
    let Posicion = obtenerPosicionInicial(1, 2);
    let orientacion = orientacion_inicial;

    for(let i = 0; i < comandos.length; i++){
        let resultado = manejarAuto(comandos[i], orientacion, Posicion);
        Posicion = resultado.Posicion;
        orientacion = resultado.orientacion;
    }
    return { Posicion, orientacion }; // Retorna la posición y orientación final
}
