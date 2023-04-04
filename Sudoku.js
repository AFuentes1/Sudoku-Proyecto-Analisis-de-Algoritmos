const tableroSudoku = document.querySelector('#sudoku')
const cuadrados = 9



function crearCuadroVacio(nombre){

    const cuadrado = document.createElement(nombre)
    cuadrado.disabled = true
    tableroSudoku.appendChild(cuadrado)

    /*
    const cuadrado = document.createElement(nombre)
    cuadrado.disabled = true
    tableroSudoku.appendChild(cuadrado)
    */
}

/*function crear3x3(){
    for (let i = 0; i < 9; i++) {
        crearCuadro('input', 'cuadrado', 'number', 0, 9)
          
    }

}*/
/*-------------------------------------------------------------------------------------------*/
/*function crear3x3() {
    const contenedor = document.createElement("div");
    contenedor.classList.add("fila");
  
    for (let i = 0; i < 27; i++) {
      const cuadrado = document.createElement("input");
      cuadrado.setAttribute("type", "number");
      cuadrado.setAttribute("min", 0);
      cuadrado.setAttribute("max", 9);
      cuadrado.classList.add("cuadrado");
      cuadrado.id = "cuadrado-" + i;
      contenedor.appendChild(cuadrado);
  
      // Agregamos un salto de línea después de cada tercer cuadrado
      if ((i + 1) % 3 === 0) {
        const saltoLinea = document.createElement("br");
        contenedor.appendChild(saltoLinea);
      }
    }
  
    tableroSudoku.appendChild(contenedor);
  }
 -----------------------------------------------------------------------------------------------*/

function crear21x21() {
    const contenedor = document.createElement("div");
    contenedor.classList.add("fila");
  
    for (let i = 0; i < 441; i++) {
      const cuadrado = document.createElement("input");
  
      cuadrado.setAttribute("min", 0);
      cuadrado.setAttribute("max", 9);
      cuadrado.classList.add("cuadrado");
      //cuadrado.id = i;
      contenedor.appendChild(cuadrado);
      cuadrado.setAttribute("value", i);
      
  
      // Agregamos un salto de línea después de cada tercer cuadrado
      if ((i + 1) % 21 === 0) {
        const saltoLinea = document.createElement("br");
        contenedor.appendChild(saltoLinea);
      }
    }
  
    tableroSudoku.appendChild(contenedor);
    return contenedor;
  }


function vacio(){
    for (let i = 0; i < 9; i++){
        crearCuadroVacio('input')
    }   
}

/*
function crearTablero(){
    const tablero = [];

    for (let i = 0; i < 2; i++) {
        const fila = [];

        if (i == 3){
            vacio();
        }
        else{
            // Crear el objeto y guardarlo en la matriz
            fila.push(crear3x3());
            tablero.push(f)
           
    }
        return tablero
    }
    
    
}
*/


function crearTablero() {

    crear21x21()
    /*
    const tablero = [];
  
    for (let i = 0; i < 9; i++) {
      const fila = [];
  
      for (let j = 0; j < 9; j++) {
        if (j % 3 === 0) {
          // Si j es múltiplo de 3, crea una nueva sección
          const seccion = crear3x3();
          fila.push(seccion);
          tablero.push(seccion);
        } else {
          // Si no, agrega el cuadrado a la última sección
          const seccion = crear3x3();
          
          fila[fila.length - 1].appendChild(seccion);
        }
      }
  
      // Agrega un salto de línea después de cada 3 filas
      if ((i + 1)  === 7) {
        const saltoLinea = document.createElement("br");
        tableroSudoku.appendChild(saltoLinea);
      }
    }
  
    return tablero;
    */
  }

const tablero = crearTablero()
    console.log(tablero)
/*
function crearTablero(){

    crear3x3()
    
    /*for (let i = 0; i < 7; i++) {
        if (i == 3){
            vacio();
        }
        else{
            crear3x3()
        }
    }
    
*/
     




/*crearTablero();



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

