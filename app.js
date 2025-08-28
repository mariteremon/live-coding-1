// Escribe tu código aquí.
//1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

/*Escribe una función que reciba 2 parámetros
Parámetro 1 - Un string
Parámetro 2 - Un array de strings
La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
bigWords('bocina', myArray);
Output - ['insecto', 'bootcamp', 'escritorio']*/
// Lista base de palabras
// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const wordList = [
    'insecto', 'bootcamp', 'mangos', 'reptil', 'mosca',
    'escritorio', 'bocina', 'programación', 'javascript', 'computadora'
  ];

  function bigWords(reference, arr) {
    return arr.filter(word => word.length > reference.length);
  }

  function printArray(arr) {
    const ul = document.getElementById('wordList');
    ul.innerHTML = '';
    arr.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      ul.appendChild(li);
    });
  }

  document.getElementById('filterButton').addEventListener('click', () => {
    const input = document.getElementById('referenceInput').value.trim();
    if (!input) {
      alert('Por favor escribe una palabra de referencia.');
      return;
    }

    const result = bigWords(input, wordList);
    printArray(result);
  });
});









