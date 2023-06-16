# Documentacion Empowerment Labs🧑🏻‍💻
## Descripcion 📃:
_API REST que recomienda restaurantes segun los gustos suministrados por un usuario._
## Para realizar la peticion:
Acceda a la url ```http://localhost:3000/recommendation``` con metodo POST donde el body de la peticion debera de ir de esta forma ```{ "likes": [ "papa", "pollo" ] }```.

  * El proyecto se realizo en un DBMS no relacional con mongodb ya que no contaba con recursos para acceder a AWS y poder tener la funcionalidad de dynamodb.
## Inicializar API 🤯:
Esta API REST esta basada en TypeScript con Nestjs.

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar el proyecto de nestjs:
    * modo de desarrollo: npm run start:dev
    * modo de produccion: npm start

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |__Controller
        |__Archivos de controladores
    |__Interfaces
        |__Archivos de posibles interfaces de carga o posteo
    |__Models
        |__Archivos para las consultas a un schema inscrito
    |__Schemas
        |__Archivos de schemas para mongo
```
## Recomendaciones 👀:
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
* Revisar las configuraciones del tsconfig.json
---
Nicolas Duarte 🎉
```
 ███▄    █  ██ ▄█▀
 ██ ▀█   █  ██▄█▒ 
▓██  ▀█ ██▒▓███▄░ 
▓██▒  ▐▌██▒▓██ █▄ 
▒██░   ▓██░▒██▒ █▄
░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
░ ░░   ░ ▒░░ ░▒ ▒░
   ░   ░ ░ ░ ░░ ░ 
         ░ ░  ░   
                  
```
