const tableroSudoku = document.querySelector('#sudoku')
const cuadrados = 9
const contenedor = document.createElement("div");



function crearCuadroVacio(input, i){

    const cuadrado = document.createElement(input) 
    cuadrado.disabled = true
    contenedor.appendChild(cuadrado)
    cuadrado.classList.add("cuadradoVacio");
    

    /*
    const cuadrado = document.createElement(nombre)
    cuadrado.disabled = true
    tableroSudoku.appendChild(cuadrado)
    */
}

function crearCuadro(input, i){
    //Se dividen en tipos de cuadrados, interno, cuadrado normal y mezcla, para los colores
    const cuadrado = document.createElement(input);
    cuadrado.setAttribute("value", i);
    contenedor.appendChild(cuadrado);
    cuadrado.maxlength = 1;

    cuadrado.addEventListener('input', function () {
      const numero = this.value;
      if (numero && (isNaN(numero) ||  numero < 1 || numero > 9)) {
        // Si el valor no es un número del 1 al 9, borra el contenido del input
        this.value = '';
      }
      ActualizarLista()
      
    }) 

    if(i >= 0 && i <= 2 || i >= 6 && i <= 8  || +
        i >= 21 && i <= 23 || i >= 27 && i <= 29 || +
        i >= 42 && i <= 44 || i >= 48 && i <= 50 || +
        i >= 66 && i <= 68 || i >= 87 && i <= 89 || i >= 108 && i <= 110 || +
        i >= 126 && i <= 128 || i >= 147 && i <= 149 || i >= 168 && i <= 170 ||+

        i >= 12 && i <= 14 || i >= 18 && i <= 20  || +
        i >= 33 && i <= 35 || i >= 39 && i <= 41 || +
        i >= 54 && i <= 56 || i >= 60 && i <= 62 || +
        i >= 78 && i <= 80 || i >= 99 && i <= 101 || i >= 120 && i <= 122 || +
        i >= 144 && i <= 146 || i >= 165 && i <= 167 || i >= 186 && i <= 188 || +

        i >= 378 && i <= 380 || i >= 384 && i <= 386  || +
        i >= 399 && i <= 401 || i >= 405 && i <= 407 || +
        i >= 420 && i <= 422 || i >= 426 && i <= 428 || +
        i >= 252 && i <= 254 || i >= 273 && i <= 275 || i >= 294 && i <= 296 || +
        i >= 318 && i <= 320 || i >= 339 && i <= 341 || i >= 360 && i <= 362 || +

        i >= 390 && i <= 392 || i >= 396 && i <= 398  || +
        i >= 411 && i <= 413 || i >= 417 && i <= 419 || +
        i >= 432 && i <= 434 || i >= 438 && i <= 440 || +
        i >= 330 && i <= 332 || i >= 351 && i <= 353 || i >= 372 && i <= 374 || +
        i >= 270 && i <= 272 || i >= 291 && i <= 293 || i >= 312 && i <= 314 || +

        +
        i >= 198 && i <= 200 || i >= 219 && i <= 221 || i >= 240 && i <= 242){ 
      
      cuadrado.classList.add("cuadradoMezcla");
      //cuadrado.id = i;  
    }else if(i >= 132 && i <= 134 || i >= 138 && i <= 140  || +
        i >= 153 && i <= 155 || i >= 159 && i <= 161 || +
        i >= 174 && i <= 176 || i >= 180 && i <= 182 || +
        i >= 258 && i <= 260 || i >= 264 && i <= 266 || +
        i >= 279 && i <= 281 || i >= 285 && i <= 287 || +
        i >= 300 && i <= 302 || i >= 306 && i <= 308)
    { 
        cuadrado.classList.add("cuadradoInterno");
        //cuadrado.id = i; 
    }else{
        cuadrado.classList.add("cuadrado");
        //cuadrado.id = i;
        
    }
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
    
    contenedor.classList.add("fila");
  
    for (let i = 0; i < 441; i++) {

      if (i >= 30 && i <= 32 || i >= 9 && i <= 11 || i >= 51 && i <= 53 || i >= 72 && i <= 74 || i >= 93 && i <= 95 || i >= 114 && i <= 116 || i >= 189 && i <= 194 || i >= 189 && i <= 194 || i >= 210 && i <= 215 || i >= 231 && i <= 236 || i >= 204 && i <= 209 || i >= 225 && i <= 230 || i >= 246 && i <= 251 || i >= 324 && i <= 326 || i >= 345 && i <= 347 || i >= 366 && i <= 368 || i >= 387 && i <= 389 || i >= 408 && i <= 410 || i >= 429 && i <= 431) {
        crearCuadroVacio('input', i)
      } else{
        crearCuadro('input', i)
      }
  
      // Agregamos un salto de línea después de cada tercer cuadrado
      if ((i + 1) % 21 === 0) {
        const saltoLinea = document.createElement("br");
        contenedor.appendChild(saltoLinea);
      }
    }
  
    tableroSudoku.appendChild(contenedor);
    const Numeros =  ActualizarLista()
   

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

function ActualizarLista() {
      const inputs = document.querySelectorAll('#sudoku input');
      const numeros = [];
    
      inputs.forEach(input => {
        if (input.value !== '') {
          numeros.push(parseInt(input.value, 10)); 
        }else {
          numeros.push(0);
        }

      });
      console.log(numeros.toString());
      return numeros;
    }
    