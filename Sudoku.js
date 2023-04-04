const cuadradoPequeño = document.querySelector('#cuadradoPequeño')
const cuadradoGrande = document.querySelector('#cuadradoGrande')
const cuadrados = 9


function crearCuadro(nombre, clase, tipo, min, max){
    const cuadrado = document.createElement(nombre)
    cuadrado.setAttribute('type', tipo)
    cuadrado.setAttribute('min', min)
    cuadrado.setAttribute('max', max)
    cuadrado.classList.add(clase)
    cuadradoPequeño.appendChild(cuadrado)
} 

function crearCuadroVacio(nombre){
    const cuadrado = document.createElement(nombre)
    cuadrado.disabled = true
    cuadradoPequeño.appendChild(cuadrado)
}

function crear3x3(){
    for (let i = 0; i < 9; i++) {
        crearCuadro('input', 'cuadrado', 'number', 0, 9)
          
    }

}

function vacio(){
    for (let i = 0; i < 9; i++){
        crearCuadroVacio('input', 'cuadrado', 'number', 0, 9)
    }   
}

function crear7x7(){
    for (let i = 0; i < 7; i++) {
        
        if (i == 3){
            vacio();
        }
        else{
            crear3x3()
        }    
    }
}


crear7x7()




    /*
    //Cambia de color los cuadrados 3x3
    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21)||   //Se agregan los bordes del tablero
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53) 
    ){
        inputElement.classList.add('odd-section')
        
    }*/
    //Se agrega el input al tablero

