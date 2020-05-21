// 01
/**
 * Mostrar en consola los números del 100 al 0 utilizando la estructura while, for y do while
 */

let numero = 100;

while (numero <= 100 && numero >= 0) {
  console.log(numero);
  numero--;
}

 // 02
 /**
  * Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while, for y do while
  */ 

let numero = 0;

while (numero <= 1000) {
   console.log(numero);
   numero+= 2;
}
  
// 03
/**
 * Mostrar en consola la suma parcial de todos los números 
 * que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

let numero = 0;
let suma = 0;

while (numero <= 1000) {
    numero++;
    suma += numero;
    console.log(suma);
}

// 04
/**
 * Mostrar en consola la suma parcial de todos los 
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

let numero = 1;
let suma = 0;

while (numero <= 1000) {
    suma += numero;
    numero+= 2;
    console.log(suma);
}

// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */
/*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*/

let numero = 0;
let asterisco = "*";

console.log(asterisco);

while (numero <= 12) {
    asterisco = asterisco + "*"
    console.log(asterisco);
    numero++;
}