url_youtube: 


#  Ejercicios de Exercism

10. Darts 

En este codigo nos pide que encontremos las codernas de la diana, para empezar esportamos una funcion llamada score esta recibe los prametros (x & y)que son de tipo number y esto nos devuelve un number, abrimos la funcion y dentro declaramos una constatnte a la que llamamos distance dentro de esta usamos el metodo Math.sqrt que nos da raices dentro de este metodos a los parametro de x & y y los elevamos al cuadrado, luego utilizamos if dentro de estos metemos si la distancia es igual menos a 1 nos devuelve una puntuacion de 10 y seguimos con si 5 es menos igual a este nos devuelve 5 y al final si la distancia el menor igual a 10 nos devuelve 1, cualquier resultado que no entre es estos parametros nos devuelve 0

11. Pangram

Exportamos una funcion a la que llamamos isPangram dentro de esta insertamos el parametro prayer de tipo string esto nos devuelve un tipo boooleano abrimos la funcion y dentro de esta declaramos una contante llamada alphabet y dentro de esta metemos un string con cada una de la letras del abeceario, debajo de esta declaramos otra constante llamada lower esta hace que el parametro de prayer se haga minusculas usando el metodo toLowerCase. esta funcion retorna la contante alphaber.split este metodo separa un string letra por letra y usando el metod .every que nos da las letras separadas y nos permite comparar letter con lower para saber si todas la letras estan en minusculas, al final usamos el metodo includes para ver si la letras estan incluidas 