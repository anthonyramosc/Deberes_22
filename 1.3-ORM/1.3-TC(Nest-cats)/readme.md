youtube_url: https://youtu.be/mt1Au9c9-8g

#Deber delete 

En este codigo lo primero que hacemos es importar los crontroles que vayamos a usar en este ejercicio el control principal que usaremos el @Delete, a este le sigen el @HttpCode(204) o sin contenido y @Param.

Bueno empezamos usando el modificador delete y a este los usamospara eliminar un cats en especifico usando los id, los siguientes el usar el HttpCode 204 para no tener que poner un contenido en el id, abirmos una funcion llamada remove dentro de esta insertamos param para los id damos un tipo a los id (string) y retornamos la funcion abriendo backsticks para poder insertar los parametros