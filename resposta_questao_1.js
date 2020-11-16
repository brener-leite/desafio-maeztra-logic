/**
 * @name isOrdered
 * @author Brener Leite
 * @description - Retorna uma mensagem indicando se o número está ordenado sequencialmente de forma crescente ou decrescente.
 * @param {Integer} - Deve ser um número inteiro positivo.
 */

function isOrdered(number) {
  if(isPositiveAndInteger(number)) {

    if(checkNumberOrdenation(number)) {
      console.log('Está ordenado');
    }
    else {
      console.log('Não está ordenado');
    }
  }
  else {
    console.error('Insira um número válido!');
  }
}

//retorna se a ordenação está de acordo com as regras estipuladas
function checkNumberOrdenation(number) {
  let splittedNumber = number.toString().split('');
  let rule = '';

  for(let i = 0; i < splittedNumber.length; i++) {
    let integerNum = parseInt(splittedNumber[i]);
    let nextIntegerNum = parseInt(splittedNumber[i + 1]);
    let previousIntegerNum = parseInt(splittedNumber[i - 1]);

    if(!rule) {
      rule = defineRule(integerNum, nextIntegerNum);
    }
    else {
      
      switch(rule) {
        case "growing":
          if(isGrowingWrong(integerNum, previousIntegerNum)) {
            return false;
          }
          break;
        case "decreasing":
          if(isDecreasingWrong(integerNum, previousIntegerNum)) {
            return false;
          }
          break;
      }

    }
  }

  return true;
}

//retorna a regra da sequência (crescente ou decrescente)
function defineRule(number, next) {
  if(number < next) {
    return 'growing';
  }
  else if(number > next) {
    return 'decreasing'
  }
}

//retorna se um número é positivo e inteiro
function isPositiveAndInteger(number) {
  return number > 0 && Number.isInteger(number);
}

//retorna se o número está crescendo da forma correta (igual ao antecessor ou com diferença de 1)
function isGrowingWrong(number, previous) {
  return (number - previous) > 1 || (number - previous) < 0;
}

//retorna se o número está decrescendo da forma correta (igual ao antecessor ou com diferença de 1)
function isDecreasingWrong(number, previous) {
  return (previous - number) > 1 || (previous - number) < 0;
}

//chamada da função principal
isOrdered(1599); 