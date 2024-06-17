#Ejercicios de exercism



3. Color Resistor

export const colorCode = (color: string) => {
return COLORS.indexOf(color.toLowerCase());
};

export const COLORS = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white",
];

La función colorCode toma un parámetro color de tipo string y utiliza el método indexOf para buscar el índice de ese color en la matriz COLORS. La función indexOf devuelve el primer índice en el que se encuentra un elemento dado en la matriz, o -1 si no se encuentra. En este caso, se convierte el color proporcionado a minúsculas antes de buscarlo en la matriz para asegurar que la búsqueda sea insensible a mayúsculas y minúsculas.

La matriz COLORS contiene una lista de colores predefinidos. Cada color está representado como una cadena de texto.

Al exportar tanto la función colorCode como la matriz COLORS, se hace posible utilizarlas en otros archivos TypeScript mediante la importación.


youtube_url: https://youtu.be/_P1XVX9z9G8

4. Resistor_Color_Duo

En este ejercicio tenemos que obtener el resultado da la suma de dos banda de resistencia tomando en cuenta que estas realmente no se suman si no que se unen, exportamos una funcion con valor string con [], dentro de la funion creamos una constante que son los color ya que son algo de no va a cambiar, esta constante es un array y todos sus datos son strings, para lograr que lo strings retornen numeros usamos el operador indexof el cual busca en el array pero a traves de indices  del 0 en adelante, al retornar usando el indexof y en resultado de la primera banda lo multiplicamos por 10 a este resultado le sumamos el indexof de la segunda bando dandonos el resultado correcto

5. Resitor_Color_Trio

En este ejercicio se pide crear una función que devuelva el valor en ohios del resistor pasado como parámetro, teniendo en cuenta los colores, para empezar creamos una constante para los colores siendo un array y otra constante para los ohmios, export una variable y detro e esta usanmos el typeof para cambiar los arrays a number 
en la funcion pide tres datos que son la tres bandas que viene de la variable nueva, asinamos una variable y dentro de esta usamos la operacion del anterior ejercicio añadiendo la tercera bando la cual multiplica a las dos primeras la operacion de esta es 10 elvado al indice de la banda, creamos una ultima constante la cual revicivira dos datos que son prefijo y divisor, usando el fin en la const de ohmios, hacemos la operacion matematica en la cual se busca un dato de ohmios que sea cercano a a num, y al retornar dividimos num para el divisor cercano