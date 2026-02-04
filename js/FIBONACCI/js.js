/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const salida = document.getElementById("salida");
let numero1 = 0;
let numero2 = 1;

for (let i = 0; i < 50; i++) {
  let linea = "";
  linea = "Nº de vuelta: " + i + "--> " + numero1;
  // Realizar la suma
  let next = numero1 + numero2;
  // El numero1 pasa a ser el numero2
  numero1 = numero2;
  // El resultado de la suma pasa ser el numero2
  numero2 = next;

  salida.textContent += linea + "\n";
}
