// Tema # 3 : Variables tipo const y operadores logicos
// Booleanos: true -> Verdareo -> numero > 1 -> Strings con 'Valor'
// false -> Falso -> 0 -> ''
console.log('' == false); // true
console.log(0 == false); // true
console.log(null == false); // false
console.log(undefined == false); // false
// 2. Constantes, comparacion paso por valor y paso por referencia
const b = 1;
b = 2; // Error! por paso de valor, las constantes no deben cambiar el valor
const a = { nombre: "juan " };
a.nombre = "Maria";
console.log(a); // {nombre:"Maria"} Hace el cambio por el paso de referencia
// 3. Operador ternario y el if
(true && true && true) ?
    console.log("Todos los valores true") :
    console.log("Solo un false"); // Operador ternario (condicion)? verdarero:falso

if (!(false)) console.log("Simpre !(false) == true"); // If de solo una linea.

if (false || false || true) {
    console.log("Solo un true")
} else {
    console.log("Todos los valores son false")
}