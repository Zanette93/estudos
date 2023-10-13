let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

 function verificarClique() {
     console.log('O botão foi clicado');
 }

  function qualsuaCidade() {
      let cidade = prompt('Informe sua cidade');
      console.log(`Passei por ${cidade} e lembrei de vc`);
  }

 function euamoJS() {
     alert('Eu amo JS');
 }

 function soma() {
     let primeiroNumero = parseInt(prompt('Escolha um número'));
     let segundoNumero = parseInt(prompt('Escolha outro número'));
     let totalSoma = primeiroNumero + segundoNumero;
     alert(`A soma é ${totalSoma}`);
}

//  function verificarCliquePrompt(){
//      let cidade = prompt('Qual o nome da sua cidade?');
//      alert (`Estive em ${cidade} e lembrei de você!`);
//  }
