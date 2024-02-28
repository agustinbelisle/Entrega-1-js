alert("Ejercicio 1: Número par o impar");
console.log("Ejercicio 1: Número par o impar");

var num = prompt("Ingresar un número");

function parOImpar() {

    if (num % 2 == 0) {
        console.log("El número " + num + " es par");
    } else {
        console.log("El número " + num + " es impar");
    }
}

parOImpar(num);

alert("Ejercicio 2: Número mayor");
console.log("Ejercicio 2: Número mayor");

var num1 = prompt("Ingresar el primer número");
var num2 = prompt("Ingresar el segundo número");

function mayorDeDos() {

    if (num1 > num2) {
        console.log("El número " + num1 + " es el mayor");
    } else if (num2 > num1) {
        console.log("El número " + num2 + " es el mayor");
    } else {
        console.log("Los números son iguales");
    }
}
mayorDeDos(num1,num2);


alert("Ejercicio 3: Múltiplo de 5");
console.log("Ejercicio 3: Múltiplo de 5");

var num3 = prompt("Ingresar un número");

function multiploDeCinco() {

    if (num3 % 5 === 0) {
        console.log("El número " + num3 + " es múltiplo de 5");
    } else {
        console.log("El número " + num3 + " no es múltiplo de 5");
    }
}

multiploDeCinco(num3);

alert("Ejercicio 4: Números desde 0 hasta el ingresado");
console.log("Ejercicio 4: Números desde 0 hasta el ingresado");

var num4 = prompt("Ingresar número");

function imprimirNumeros() {

    for (let i = 0; i <= num4; i++) {
      console.log(i);
    }
  }

imprimirNumeros(num4);

alert("Ejercicio 5: Palabra y número");
console.log("Ejercicio 5: Palabra y número");

var palabra = prompt("Ingresar palabra");
var numero = prompt("Ingresar número");

function imprimirNumerosYPalabras() {


    console.log("La palabra ingresada es: " + palabra);
    console.log("El número ingresado es: " + numero);

    for (let i = 0; i < numero; i++) {
        console.log(palabra);
    }
}

imprimirNumerosYPalabras(palabra,numero);

alert("Ejercicio 6: Valores de un Array");
console.log("Ejercicio 6: Valores de un Array");

var long = prompt("Longitud del array");
var array = [];

function crearArray() {

    for (let i = 0; i < long; i++) {
        let j = i + 1;
        array[i] = prompt("Ingresar elemento número " + j + ":");
    }
    console.log("Valores del array: " + "[" + array.join(", ") + "]");
}

crearArray(long,array);

alert("Ejercicio 7: 10 elementos excepto el 5to");
console.log("Ejercicio 7: 10 elementos excepto el 5to");

const l = 10;
var array1 = [];
var array2 = [];

function eliminarQuintoElemento() {

    for (let i = 0; i < l; i++) {
      let j = i + 1;
      array1[i] = prompt("Ingresar elemento número " + j + ":");
    }
  
    for (let j = 0; j < l; j++) {
      if (j !== 4) {
        array2.push(array1[j]);
      }
    }
  
    console.log("Valores del array sin el 5to elemento: " + "[" + array2.join(", ") + "]");
  }

  eliminarQuintoElemento(array1,array2);


alert("Ejercicio 8: Elementos de un array multiplicados ");
console.log("Ejercicio 8: Elementos de un array multiplicados");

var array3=[];
var long1= prompt("Longitud del array: ");

for (let i = 0; i < long1; i++) {
    let j = i + 1;
    array3[i] = prompt("Ingresar elemento número " + j + ":");
  }


var num5 = prompt("Ingresar número para multiplicar elementos: ");

function multiplicarArrayPorNumero() {

    console.log("Valores del array : " + "{" + array3.join( "," ) + "}");
    
    for (let i = 0; i < array3.length; i++) {
        array3[i] = array3[i] * num5;
    }
    
    console.log("Valores del array multiplicados por " + num5 + " : "  + "{" + array3.join( "," ) + "}");
}

multiplicarArrayPorNumero(array3,num5);



 










