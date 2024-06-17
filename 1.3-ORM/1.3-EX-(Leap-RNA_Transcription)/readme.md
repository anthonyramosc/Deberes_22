# Ejercicios de Exercism

youtube_url: https://youtu.be/uTKTQ5joIeM 

6. Leap

En este ejercicio tenemos que realizar un codigo que determine que año es bisiesto y que año no lo es, estolo hacemos bajo los siguientes parametros: todo año divisible para 4 es bisiesto y todo año divisible para 100 pero que tambien sea divisible para 400 tambien lo es, primero exportamos un funcion que recibe un parametro (year) este en string y devuelve un boleano, usamos if para los casos siguiendo la instrucciones de antes,dentro de estos casos ponemos lo siguiente if (year % 4 !== 0) { return false; }  if (year % 400 === 0) { return true; }
    return year % 100 !== 0;


7. RNA_Transcription

En este ejercicio tenemos que transcribir una secuencia de ADN a unade ARN, sabiendo que 
G -> C
C -> G
T -> A
A -> U
primero exportamos una funcion a que recibe un parametro en string que es la secuencia de ADN, luego declaraos una constante que contrendra a la secuencia de ADN usando el operador split sepramos la secuencia y usando map creamos un nuevo array en base a el anterior, usando if ponemos la condicion para que podamos transcribir la secuencia de ADN
st rna = dna.split('').map(T => {
        if (T === 'G') return 'C'
        else if (T === 'C') return 'G'
        else if (T === 'T') return 'A'
        else if (T === 'A') return 'U'
        else throw new Error('Invalid input DNA.')
    })
    al final usando un operador join unimos la nueva secuencia creada
