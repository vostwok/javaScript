// let x = "";
// console.log(x);
// x = "oi";

// //DECLARAÇÃO DE FUNÇÃO 

// //1) declara a função
//                    //string
function imprimeTexto(texto){
console.log(texto);
}

// //2) executar a função (1 ou + vezes)

// imprimeTexto("oi");
// imprimeTexto("outro texto");

// aqui chamei um função dentro de outra função
imprimeTexto(soma());

//três formas de escrever dunções

function soma() {
  return 2 + 2 ;
}

// console.log(soma())