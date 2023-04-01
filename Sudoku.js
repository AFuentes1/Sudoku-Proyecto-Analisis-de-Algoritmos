const tableroSudoku = document.querySelector('#sudoku')
const cuadrados = 9

function crearTablero(nombre, clase, tipo, min, max){
    const inputElement = document.createElement(nombre)
    inputElement.setAttribute('type', tipo)
    inputElement.setAttribute('min', min)
    inputElement.setAttribute('max', max)
    inputElement.classList.add(clase)
    tableroSudoku.appendChild(inputElement)
} 

for (let i = 0; i < cuadrados; i++) {
    for (let j = 0; j < 7; j++) {
        crearTablero('input', 'cuadrado', 'number', 0, 9)
    }

}



/*
function cuadrado () {
    for (let i = 0; i < cuadrados; i++) {
        const inputElement = document.createElement('input')
        inputElement.setAttribute('type', 'number')
        inputElement.setAttribute('min', 0)
        inputElement.setAttribute('max', 9)
        tableroSudoku.appendChild(inputElement)    
    }
}

function crearTablero(){

    for (let i = 0; i < 7; i++) {
        
        cuadrado();  
        
    }
}
*/

crearTablero();

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

