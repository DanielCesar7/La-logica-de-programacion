/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const salida = document.getElementById("salida");

function anagrama(palabra1, palabra2) {
  //toLowerCase() --> Convierte las letras en minúsculas
  //trim() --> Quita los espacios del principio y el final
  p1 = palabra1.toLowerCase().trim();
  p2 = palabra2.toLowerCase().trim();

  //length() --> Comprueba la longitud de la palabra
  if (p1.length !== p2.length) return false;
  if (p1 === p2) return false;
  //split() --> En este caso convierte las letras de la palabra en un array, las "" lo usa como separador
  //sort() --> Ordena la palabra
  //join() --> En este caso hace el efecto contrariod el split, las "" lo usa como separador
  return p1.split("").sort().join("") === p2.split("").sort().join("");
}

let palabra1 = prompt("Ingrese la primera palabra");
let palabra2 = prompt("Ingrese la segunda palabra");

//console.log(palabra1 + " " + palabra2);
salida.textContent = palabra1 + " " + palabra2;

if (anagrama(palabra1, palabra2)) {
  salida.textContent = "Son anagramas";
} else {
  salida.textContent = "No son anagramas";
}
