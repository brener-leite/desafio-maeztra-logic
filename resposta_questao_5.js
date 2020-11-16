/**
 * @name getFatorial
 * @description - Recebe um número inteiro e calcula o fatorial do número com o intuito de descobrir o número de arranjos possíveis
 * @param {Integer}
 */

function getFatorial(int) {
  let fatorial = 1;

  for(let x = int; x > 1; x--) {
    fatorial *= x;
  }

  console.log('Os amigos podem tirar a foto de ', fatorial, ' formas diferentes.');
}

//chamada da função principal
getFatorial(5);