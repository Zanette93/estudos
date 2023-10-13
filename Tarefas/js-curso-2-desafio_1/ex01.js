let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

let media = calcularMedia(nota1, nota2, nota3, nota4);
let aprovacao = verificarAprovacao(media);


function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
  }

function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log('Média:', media);
console.log('Resultado aprovação: ', aprovacao);