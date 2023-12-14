'use strict'
let fila = 'LAB2#B';
let cod = 0;
let letra = fila.indexOf('#');
let siguienteletra = fila.charCodeAt (letra+1); 
cod = siguienteletra + 1;
alert(String.fromCodePoint(cod));