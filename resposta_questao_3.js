/**
 * @name isSequential
 * @author Brener Leite
 * @description - Retorna uma mensagem indicando se a sequência de caracteres é válida.
 * @param {String}
 */

function isSequential(string = '') {
  let finalSequence = checkSequence(string);

  if(finalSequence.length) {
    console.log('Não é uma sequência válida');
  }
  else {
    console.log('É uma sequência válida');
  }
}

//percorro o array de caracteres e vou removendo os elementos que abrem e fecham logo em seguida.
//então, reinicio o for. no fim, retorno o array resultante.
function checkSequence(string) {
  let splittedString = string.split('');
  let finalArray = splittedString;
  let pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  
  for(let i = 0; i < finalArray.length; i++) {
    let currentCharacter = finalArray[i];
    let nextCharacter = finalArray[i + 1];

    if(nextCharacter && pairs[currentCharacter] == nextCharacter) {
      finalArray.splice(i, 2);
      i = -1;
    }
  }

  return finalArray;
}

//chamada da função principal
isSequential('({}[]()}');