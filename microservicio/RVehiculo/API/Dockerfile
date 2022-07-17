FROM node
COPY . /var/www
WORKDIR /var/www
# directorio de trabajo del contenedor
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]
# se especifica el ejecutable que usaremos en el contenedor
# Para crear imagen: docker build -t ()
# Para ejecutar la aplicación, ejecutar en la consola de comandos: docker run -p 3000:3000 ()