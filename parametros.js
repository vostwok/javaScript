// // parâmetros de função

// function soma(numero1, numero2, numero3, numero4) {
//   return (numero1 + numero2) * numero3 / numero4;
// }

// console.log(soma(2, 2, 2, 2));
// console.log(soma(245, 20, 2, 2));
// console.log(soma(-500, 600, 3, 2));

// // parâmetros x argumentos 

// // ordem dos parâmetros

// function nomeIdade(nome, idade) {
//   return `meu nome é ${nome} e minha idade e ${idade}`
// }

// console.log(nomeIdade(40, "juliana"));

// function soma(numero1, numero2) {
//   return numero1 + numero2;
// }

// function multiplica(numero1, numero2) {
//   return numero1 * numero2;
// }

//                             //9        //6 
// console.log(multiplica(soma(4, 5), soma(3, 3)));

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

                            //9    
console.log(multiplica(soma(4, 5)));