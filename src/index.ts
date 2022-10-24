import "./styles.css";

//DECLRO UN ARRAY DE SUELDS CON 5 ENTRADAS
let sueldos: number[] = new Array(5);

//CREO LA FUNCION CARGAR SUELDOS
function cargar() {
  for (let f = 0; f < sueldos.length; f++) {
    let v = prompt("Ingrese sueldo:");
    sueldos[f] = parseInt(v);
  }
  console.log(sueldos);
  return;
}

//CREO L FUNCION CALCULAR el GASTO TOTAL EN SUELDOS
function calcularGastos() {
  let total = 0;
  for (let f = 0; f < sueldos.length; f++) {
    total = total + sueldos[f];
    console.log(total);
  }
  document.write("Listado de sueldos<br>");
  for (let f = 0; f < sueldos.length; f++) {
    document.write(sueldos[f] + "<br>");
  }
  document.write("Total de gastos en sueldos:" + total);
  return;
}

let sueldos: number = new Array(8);
cargar();
calcularGastos();
//cargar(sueldos);
//calcularGastos(sueldos);
