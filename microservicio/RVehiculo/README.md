# Descripcion para la implementacion de typescript y docker en una ruta
## Ruta escogida: Vehiculo
1. Crear el proyecto con: "npm init -y"
2. Intalar las librerias necesarias:
    - npm i express
    - npm i express-validator
    - npm i mongoose
    - npm i cors
    - npm i nodemon -D
    - npm i typescript 

3. Dentro del archivo package.json en la seccion de script colocamos:
    - "start": "node dist/index.js"
    - "dev": "nodemon dist/index.js"

4. A partir de aqui se hacen los cambios necesarios para pasar del javascript a typescript.
5. Se crea un archivo dockerfile para definir la imagen utilizada
    **Comando Necesarios**
    - docker build -t AppTaller . (El comando crea imágenes de Docker a partir del dockerfile)
    - docker run -p 3000:3000 AppTaller (Este comando crea el contenedor a partir de la imagen que le indiquemos y la pone en funcionamiento)
6. Se crea el docker-compose.yml
    - Para definir el entorno de aplicacion
    - Configurar los servicios usado en la aplicacion


# Pruebas
- **Ejecucion del proyecto con typescript**
    <https://bit.ly/3u7erqW>
- **Prueba con postman**
    <https://bit.ly/3bxkBua>
- **Verificacion del cambio en la base de datos**
    <https://bit.ly/3njtl9J>



