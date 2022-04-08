//// tipo de dado
//// booleanos
//
//// conversão implicita
//const numero = 456;
//const numeroString = "456";
////const numeroString = Number ("456");
////const numeroString = Number ("456a");
//
//console.log(numero === numeroString);
//console.log(numero == numeroString);
//console.log(numero + numeroString);
//
////conversão explicita
//
////let telefone = 12341234;
////console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
//
//let telefone = 12341234;
//console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
//
//let usuarioConectado = false;
//console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
//usuarioConectado = true;
//console.log(String(usuarioConectado)); // agora teremos uma string “true”.
//
//// Vamos calcular a área de um retângulo
//let largura = "10";
//let altura = "5";
//console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)