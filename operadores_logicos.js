// Tema # 3 : Variables tipo const y operadores logicos
// Booleanos: true -> Verdareo -> numero > 1 -> Strings con 'Valor'
// false -> Falso -> 0 -> ''
console.log('' == false); // true
console.log(0 == false); // true

// Falsy
console.log(null == false); // false
console.log(undefined == false); // false


// 2. Constantes, comparacion paso por valor y paso por referencia
const b = 1;
b = 2; // Error! por paso de valor, las constantes no deben cambiar el valor

const a = { nombre: "juan " };
a.nombre = "Maria";

console.log(a); // {nombre:"Maria"} Hace el cambio por el paso de referencia