// FUNCTION LIBRARY

/**
 * [getRndInteger]
 * Genera un numero intero random
 * @param {Number} min il numero minimo
 * @param {Number} max il numero massimo
 * 
 * @returns {Number} numero generato a caso compresi min e max
 */


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
/**
 * Determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean}
 */
function isEven (num){
    return (num % 2 === 0) ? true : false;
}