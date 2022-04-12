// function apresentar(nome) {
//   return `meu nome é ${nome}`
// }

// // arrow function
// const apresentarArrow = nome => `meu nome é ${nome}`;
// const soma = (numero1, numero2) => numero1 + numero2;

// arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (numero1, numero2) => {
  if (numero1 || numero2 > 10) {
   return "somente números de 1 a 9";
  }else{
   return numero1 + numero2;
  }
}
console.log(somaNumerosPequenos(7, 6));

// Hoisting: arrow function se comporta como expressão

//operador de maior ou igual que 
//>=