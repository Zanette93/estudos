// AULA 1
  alert('Boas vindas ao jogo do número secreto');
  let numeroMaximo = 5000;
  let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
  console.log(numeroSecreto);
  let chute;
  let tentativas = 1;
 // enquanto chute não for igual ao número secreto
  while (chute != numeroSecreto){
      chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
      // se chute = número secreto
      if (chute == numeroSecreto) {
         break;
      } else {
         if (numeroSecreto > chute){
          alert (`O número secreto é maior que ${chute}`);
         } else {
          alert (`O número secreto é menor que ${chute}`);
         }
          tentativas ++;
    }
 }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1){
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else{
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }



// DESAFIO 1
// let diaDaSemana = prompt('Em que dia da semana você está?');
// if (diaDaSemana = 'Sábado' || 'Domingo') {
//     alert('Bom final de semana');
// } else{
//     alert('Boa semana');
// }

// DESAFIO 2
// let numeroInformado = prompt('Digite qualquer número');
// if(numeroInformado>0){
//     alert('O número informado é positivo');
// } else{
//     alert('O número informado é negativo');
// }

// DESAFIO 3
// let saldoDeConta = 250;
// alert('Seu saldo é de R$ ' + saldoDeConta);

// DESAFIO 4
// let nome = prompt('Qual seu nome?');
// alert('Seja bem-vindo '+nome);


