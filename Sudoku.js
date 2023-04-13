const tableroSudoku = document.querySelector('#sudoku')
const cuadrados = 9
const contenedor = document.createElement("div");



function crearCuadroVacio(input, i){

    const cuadrado = document.createElement(input) 
    cuadrado.disabled = true
    contenedor.appendChild(cuadrado)
    cuadrado.classList.add("cuadradoVacio");
    

  
}



function crearCuadro(input, i){
    //Se dividen en tipos de cuadrados, interno, cuadrado normal y mezcla, para los colores
    const cuadrado = document.createElement(input);
    let randomNumber = Math.floor(Math.random() * 10);
    cuadrado.setAttribute("value", '');
    contenedor.appendChild(cuadrado);
    cuadrado.maxlength = 1;

    cuadrado.addEventListener('input', function () {
      const numero = this.value;
      if (numero && (isNaN(numero) ||  numero < 1 || numero > 9)) {
        // Si el valor no es un número del 1 al 9, borra el contenido del input
        this.value = '';
      }
      
      const lista = ActualizarLista()
      const listaG1 = cuadranteG1(lista)
      const matriz1 = convertirMatriz(listaG1)
      //console.log(resolverSudoku(matriz1));
      const sudoku = resolverSudoku(matriz1)
      const listasudoku = convertirLista(sudoku)
      console.log(listasudoku)
      // Llamamos a la función para setear los valores al tablero
      const listav =eliminarNoNumeros(lista)
      console.log("Lista verificada"+listav)
      console.log("Tamaño"+listav.length)
      setearValores(listav);
   

      
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



function crear21x21() {
    
    contenedor.classList.add("fila");
  
    for (let i = 0; i < 441; i++) {

      if (i >= 30 && i <= 32 || i >= 9 && i <= 11 || i >= 51 && i <= 53 || 
        i >= 72 && i <= 74 || i >= 93 && i <= 95 || i >= 114 && i <= 116 || 
        i >= 189 && i <= 194 || i >= 189 && i <= 194 || i >= 210 && i <= 215 || 
        i >= 231 && i <= 236 || i >= 204 && i <= 209 || i >= 225 && i <= 230 || 
        i >= 246 && i <= 251 || i >= 324 && i <= 326 || i >= 345 && i <= 347 || 
        i >= 366 && i <= 368 || i >= 387 && i <= 389 || i >= 408 && i <= 410 || 
        i >= 429 && i <= 431) {
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
    const lista =  ActualizarLista()
   
  
    
    

   

    return contenedor;
  }


function vacio(){
    for (let i = 0; i < 9; i++){
        crearCuadroVacio('input')
    }   
}




function crearTablero() {

    crear21x21()
    
  }

const tablero = crearTablero()
    console.log(tablero)






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

function Comparar(lista){
    const lista2 = lista
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == lista2[i]){
            console.log('iguales')
        }
        else{
            console.log('no iguales')
        }
    }
}



function cuadrante1(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 0 && i <= 2 || i >= 21 && i <= 23 || i >= 42 && i <= 44){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}


function cuadrante2(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 3 && i <= 5 || i >= 24 && i <= 26 || i >= 45 && i <= 47){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante3(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 6 && i <= 8 || i >= 27 && i <= 29 || i >= 48 && i <= 50){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante4(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 63 && i <= 65 || i >= 84 && i <= 86 || i >= 105 && i <= 107){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante5(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 66 && i <= 68 || i >= 87 && i <= 89 || i >= 108 && i <= 110){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante6(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 69 && i <= 71 || i >= 90 && i <= 92 || i >= 111 && i <= 113){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante7(lista){
  const listaCuadrante = []
  const lista2 = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 126 && i <= 128 || i >= 147 && i <= 149 || i >= 168 && i <= 170){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante8(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 129 && i <= 131 || i >= 150 && i <= 152 || i >= 171 && i <= 173){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}

function cuadrante9(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 132 && i <= 134 || i >= 153 && i <= 155 || i >= 174 && i <= 176){ 
      listaCuadrante.push(lista[i])
    }
  }
  console.log(listaCuadrante)
  return listaCuadrante
}



function cuadranteG1(lista){
  const listaCuadrante = []
  for (let i = 0; i <= lista.length; i++) {
    if (i >= 0 && i <= 8 || i >= 21 && i <= 29 || i >= 42 && i <= 50 ||
        i >= 63 && i <= 71 || i >= 84 && i <= 92 || i >= 105 && i <= 113 ||
        i >= 126 && i <= 134 || i >= 147 && i <= 155 || i >= 168 && i <= 176){
        listaCuadrante.push(lista[i])
        
      }
  }

  return listaCuadrante

}


function convertirMatriz(lista) {
  var matriz = [];

  for (var i = 0; i < 9; i++) {
    matriz[i] = lista.slice(i * 9, (i + 1) * 9);
  }
  console.log(matriz)
  return matriz;
}

function convertirLista(matriz){
  const lista = [];
  console.log(matriz)
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      lista.push(matriz[i][j]);
    }
  }
  return lista;
} 



// Función para verificar si un número es válido para una posición específica en el sudoku
function esValido(sudoku, fila, columna, numero) {
  // Verificar fila
  for (let i = 0; i < sudoku.length; i++) {
    if (sudoku[fila][i] === numero) {
      return false;
    }
  }

  // Verificar columna
  for (let i = 0; i < sudoku.length; i++) {
    if (sudoku[i][columna] === numero) {
      return false;
    }
  }

  // Verificar sub-cuadrícula
  const filaInicio = Math.floor(fila / 3) * 3;
  const columnaInicio = Math.floor(columna / 3) * 3;
  for (let i = filaInicio; i < filaInicio + 3; i++) {
    for (let j = columnaInicio; j < columnaInicio + 3; j++) {
      if (sudoku[i][j] === numero) {
        return false;
      }
    }
  }

  // El número es válido
  return true;
}

// Función recursiva para resolver el sudoku utilizando Backtracking
function resolverSudoku(sudoku) {
  // Encontrar la próxima posición vacía en el sudoku
  for (let fila = 0; fila < sudoku.length; fila++) {
    for (let columna = 0; columna < sudoku.length; columna++) {
      if (sudoku[fila][columna] === 0) {
        // Probar todos los números posibles en la posición vacía
        for (let numero = 1; numero <= 9; numero++) {
          if (esValido(sudoku, fila, columna, numero)) {
            // Asignar el número a la posición vacía
            sudoku[fila][columna] = numero;

            // Llamar recursivamente a la función para continuar con la siguiente posición vacía
            if (resolverSudoku(sudoku)) {
              return sudoku;  // Se encontró una solución válida
            }

            // Si no se encontró una solución válida, deshacer la asignación del número
            sudoku[fila][columna] = 0;
          }
        }

        // No hay números válidos para esta posición vacía
        return false;
      }
    }
  }

  // Se encontró una solución válida
  return sudoku;
}

// Función para generar un sudoku aleatorio
function generarSudokuAleatorio() {
  // Crear una matriz de 9x9 con ceros
  const sudoku = Array.from(Array(9), () => new Array(9).fill(0));

  // Rellenar algunas posiciones con números aleatorios
  for (let i = 0; i < 20; i++) {
    const fila = Math.floor(Math.random() * 9);
    const columna = Math.floor(Math.random() * 9);
    const numero = Math.floor(Math.random() * 9) + 1;
    if (esValido(sudoku, fila, columna, numero)) {
      sudoku[fila][columna] = numero;
    }
  }

  console.log(sudoku)

  // Resolver el sudoku
  resolverSudoku(sudoku);

  // Devolver el sudoku generado
  return sudoku;
}

// Generar un sudoku aleatorio y mostrarlo en la consola
const sudokuAleatorio = generarSudokuAleatorio();
console.log(sudokuAleatorio);





/*
function setearValores(lista) {
  // Obtener los cuadrados vacíos
  const cuadradosVacios = document.querySelectorAll('.cuadradoVacio');

  // Recorrer la lista y asignar cada valor a su cuadrado correspondiente
  for (let i = 0; i < lista.length; i++) {
    cuadradosVacios[i].value = lista[i];
    cuadradosVacios[i].classList.remove('cuadradoVacio');
    cuadradosVacios[i].disabled = false;
  }
}

*/
function eliminarNoNumeros(lista) {
  return lista.filter((elemento) => typeof elemento === 'number');
}

/*
function setearValores(valores) {
  const cuadrados = Array.from(contenedor.children);
  const cuadradosNoVacios = cuadrados.filter(cuadrado => !cuadrado.classList.contains("cuadradoVacio"));

  cuadradosNoVacios.forEach((cuadrado, indice) => {
    cuadrado.value = valores[indice];
  });
}
*/

/*----------
function setearValores(valores) {
  const cuadrados = Array.from(contenedor.children);
  //const cuadradosNoVacios = cuadrados.filter(cuadrado => !cuadrado.classList.contains("cuadradoVacio"));

  cuadrados.forEach((cuadrado, indice) => {
    const valor = valores[indice] === 0 ? '' : valores[indice]; // Si el valor es 0, setear un valor vacío
    cuadrado.value = valor;
    console.log("indice"+indice+" El input:"+valor)
  });
  

}
*/
function setearValores(valores) {
  const cuadrados = Array.from(contenedor.children).filter(cuadrado => cuadrado.value !== undefined);

  cuadrados.forEach((cuadrado, indice) => {
    const valor = valores[indice] === 0 ? '' : valores[indice]; // Si el valor es 0, setear un valor vacío
    cuadrado.value = valor;
    console.log("indice"+indice+" El input:"+valor)
  });
}

