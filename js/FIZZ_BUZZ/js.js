/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const salida = document.getElementById("salida");
const btn = document.getElementById("btn");

function fizzBuzz() {
  salida.textContent = ""; // limpia

  for (let i = 1; i <= 100; i++) {
    let linea = "";

    if (i % 3 == 0 && i % 5 == 0) {
      linea = "fizzbuzz";
    } else if (i % 5 == 0) {
      linea = "buzz";
    } else if (i % 3 == 0) {
      linea = "fizz";
    } else {
      linea = "Los numeros presente son: " + i;
    }

    salida.textContent += linea + "\n";
  }
}

btn.addEventListener("click", fizzBuzz);
