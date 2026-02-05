/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularArea(poligono, medida) {
  let area = 0;

  switch (poligono) {
    case "triangulo":
      console.log("Las medidas del triangulo que se necesita son ancho y alto");
      area = (medida[0] * medida[1]) / 2;
      return area;

    case "cuadrado":
      console.log("Las medidas del cuadrado que se necesita son los lados");
      area = medida[0] * medida[0];
      return area;

    case "rectangulo":
      console.log(
        "Las medidas del rectangulo que se necesita son base y altura",
      );
      area = medida[0] * medida[1];
      return area;

    default:
      console.log("No has comentado ningun polígono válido");
      return null;
  }
}

console.log(calcularArea("triangulo", [7, 15]));
console.log(calcularArea("cuadrado", [5]));
console.log(calcularArea("rectangulo", [10, 20]));
