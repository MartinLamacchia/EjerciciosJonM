/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function miFuncion(string) {

    let letras = string.split('')
    let count = 0

    for (let i = 0; i < letras.length; i++) {
        count++
    }

    return count
}

console.log(miFuncion('Hola Mundo')); 


/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function miFuncion2(string, num) {
    
    let palabra = []

    let letras = string.split('')

    for (let i = 0; i < num; i++) {
        palabra.push(letras[i])
    }

    return palabra.join('')

}

console.log(miFuncion2('Hola Mundo', 4));

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function miFuncion3(string) {

    let palabras = string.split(' ')

    return palabras
    
}

console.log(miFuncion3('hola que tal'));
miFuncion3('hola que tal')


/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function miFuncion4(string, num) {
    
    let fraseCompleta;

    for (let i = 0; i < num; i++) {
        if (fraseCompleta === undefined) fraseCompleta = string + ' '
        else fraseCompleta = fraseCompleta + string + ' '
    }

    return fraseCompleta
}

console.log(miFuncion4('Hola Mundo', 3));