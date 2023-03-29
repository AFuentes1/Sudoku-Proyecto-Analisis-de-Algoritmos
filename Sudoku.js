const tableroSudoku = document.querySelector('#sudoku')
const cuadrados = 441

for (let i = 0; i < cuadrados; i++) { //se crea un cuadrado del total del sudoku
    const inputElement = document.createElement('input') //Se crea un input por cada cuadrado donde se recibira el numero
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 0) //El numero minimo y maximo para la entrada a cada cuadrado
    inputElement.setAttribute('max', 9)

    /*if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21)||   //Se agregan los bordes del tablero
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53) 
    ){
        inputElement.classList.add('odd-section')
        
    }
    */
    




    tableroSudoku.appendChild(inputElement) //Se agrega el input al tablero

}