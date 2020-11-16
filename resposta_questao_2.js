/**
 * @name isThereRepeatedNumber
 * @author Brener Leite
 * @description - Recebe um array de números e retorna um novo array com os números que se repetem.
 * @param {Array}
 */

function getRepeatedNumbers(array = []) {
  let incidences = getIncidences(array);
  let repeatedNumbers = [];

  for(key in incidences) {
    if(incidences[key] > 1) repeatedNumbers.push(key);
  }

  console.log(repeatedNumbers);
}

//retorna um objeto com o número de incidência de cada elemento do array
function getIncidences(array = []) {
  let incidences = {};

  for(element of array) {
    if(incidences[element]) {
      incidences[element] += 1;
    }
    else {
      incidences[element] = 1;
    }
  }

  return incidences;
}

//chamada da função principal
getRepeatedNumbers([4,5,44,98,4,5,6,7])