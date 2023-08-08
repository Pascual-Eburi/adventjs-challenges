/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
 */

/**
 *
 * @param {*} letter
 * @returns
 */

function isValidLetter(letter) {
  // the stack to track the open pharenthesis
  const stack = []; 
  const notAllowed = ["{", "}", "[", "]"]; // char not allowed in letter

  for (let i = 0; i < letter.length; i++) {
    const char = letter[i]; // the actual char.

    if (notAllowed.includes(char)) { return false; }
    
    // avoid empty pharenthesis
    if ( char === "(" && 
        (
            letter[i + 1] === ")" || 
            letter[i + 1] === " "
        )
    ) {
      return false;
    }

    // if is a close pharenthesis and the stack is empty 
    if (char === ")" && 
        (stack.length === 0 || 
        stack.pop() !== "(")
    ){
        return false
    }

    if (char === "(") {
      // if a open pharenthesis we added to the stack.
      stack.push("(");
    } 
  }

  // Si la pila está vacía al final, la carta es válida.
  return stack.length === 0;
}



// Ejemplos de uso
console.log(isValidLetter("bici coche (balón) bici coche peluche")); // true
console.log(isValidLetter("(muñeca) consola bici")); // true
console.log(isValidLetter("bici coche (balón bici coche")); // false
console.log(isValidLetter("peluche (bici [coche) bici coche balón")); // false
console.log(isValidLetter("(peluche {) bici")); // false
console.log(isValidLetter("() bici")); // false
