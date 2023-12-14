'use strict'
let plate = 'ABC-123';
let pos = plate.indexOf('-');
let letras = plate.substring (0,pos);
let numeros = plate.substring (pos+1);
alert(numeros);