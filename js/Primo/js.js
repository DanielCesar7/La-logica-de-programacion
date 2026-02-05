/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const salida = document.getElementById("salida");

function esprimo(n) {
  if (n <= 1) return false; // aqui establecemos aquellos que sea menor que 1 y 1 no son primos
  // Límite: no hace falta comprobar divisores mayores que la raíz cuadrada de n.
  for (let d = 2; d <= Math.sqrt(n); d++) {
    // Si el resto es 0, d divide a n (n tiene divisor) => no es primo.
    if (n % d == 0) return false;
  }
  return true; // Probé todos los divisores posibles y ninguno dividió exacto; por eso es primo.
}
salida.textContent = "Los números primos del 1 a 100 son: ";
for (let i = 1; i <= 100; i++) {
  if (esprimo(i)) salida.textContent += "\n" + i;
}
