# Ejericicios de Exercism

14. Robot

Este código define una clase llamada Robot que crea objetos robot con nombres únicos. Esto es lo que hace  cada parte del código:

private static usedNames: { [key:string]: boolean } = {}: Esta es una propiedad estática que mantiene un registro de los nombres que ya se han utilizado para los objetos robot. Es un objeto con claves de cadena (los nombres) y valores booleanos (true si el nombre ha sido usado, false en caso contrario).

public _nombre: string;: Es una propiedad de instancia que almacena el nombre del objeto robot.

constructor() { ... }: Este es el método constructor que se llama cuando se crea un nuevo objeto robot. Establece la propiedad _name a un nombre único generado por el método generateUniqueName.

public get nombre(): string { ... }: Este es un método getter que devuelve el valor de la propiedad _name.

public resetName(): void { ... }: Este es un método que restablece la propiedad _name a un nuevo nombre único generado por el método generateUniqueName.

private static generateUniqueName(): string { ... }: Este es un método privado estático que genera y devuelve un nombre único. Genera un nombre aleatorio usando el método generateRandomName, y comprueba si ya ha sido usado. Si lo ha sido, genera un nuevo nombre y lo comprueba de nuevo, repitiendo este proceso hasta que encuentra un nombre único. Una vez que encuentra un nombre único, lo marca como usado en el objeto usedNames y lo devuelve.

private static generateRandomName(): string {...}: este es un método estático privado que genera un nombre aleatorio. Crea dos letras aleatorias y tres dígitos aleatorios y los concatena para formar una cadena.
getRandomElement estático privado (source: string): cadena {...}: este es un método estático privado que devuelve un elemento aleatorio de una cadena. Genera un índice aleatorio entre 0 y la longitud de la cadena y devuelve el carácter en ese índice.
public static releaseNames(): void { ... }: Este es un método estático que restablece el objeto usedNames, liberando todos los nombres que se han utilizado hasta el momento.

15. School

Interface Roster

Esto define una interfaz llamada Roster. Una interfaz es como un modelo para un objeto. En este caso, la interfaz Roster dice que el objeto debe tener propiedades con claves numéricas (como 1, 2, 3, etc.) y los valores de esas propiedades deben ser arrays of strings.

Piense en ello como un diccionario donde las claves son calificaciones (como 1.er grado, 2.º grado, etc.) y los valores son listas de nombres de estudiantes.

Class Grade School

Esto define una clase llamada GradeSchool. La clase tiene una propiedad privada llamada _roster que es un objeto que implementa la interfaz Roster. Inicialmente, es un objeto vacío.

Method Rooster()

Este método devuelve una copia del objeto _roster. Utiliza un truco para crear una copia profunda del objeto: convierte el objeto en una cadena JSON y luego lo analiza nuevamente en un objeto. Esto garantiza que el objeto devuelto sea una copia independiente del objeto _roster original.

Method add(name: string, grade: number)

Este método agrega un nuevo estudiante a la lista. Primero, verifica si el estudiante ya está en la lista iterando sobre todas las calificaciones en el objeto _roster. Si encuentra al estudiante en alguno de los grados, lo elimina de ese grado.

Luego, agrega al estudiante a la calificación especificada. Si la calificación ya existe en el objeto _roster, agrega al estudiante a la matriz existente. Si la calificación no existe, crea una nueva matriz con el estudiante como único elemento.

Finalmente, ordena alfabéticamente el conjunto de estudiantes del grado especificado.

Method grade(grade: number)

Este método devuelve una serie de estudiantes en un grado específico. Si la calificación existe en el objeto _roster, devuelve una copia de la matriz de estudiantes de esa calificación. Si la calificación no existe, devuelve una matriz vacía.

