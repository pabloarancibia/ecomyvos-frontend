# Ecom y Vos - Frontend

[Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Dependencias
Ejecutar `npm install` para instalar todos los módulos. 


## Despliegue en entorno de Desarrollo Local. (Sólo en PC local)

Para desarrollo (sólo en modo local - no servidor) correr `npm start`.   
Navegar a `http://localhost:4200/`. 


## Despliegue en entorno de Producción

<!-- Ejecutar `ng build --prod`  -->

En la carpeta /dist/frontend se encuentran los archivos ya compilados  
archivos html/css/javascript .    

Esta carpeta /dist/frontend sería la raiz del sitio.  

## Variables de entorno
Indicar la url correspondiente de la API en /environments con el puerto declarado previamente en /backend/.env

# ACTUALIZACIONES:  
## Actualizaciones en commits:  
Actualizar siempre los commit de back y front  
(hacer pull)  
  
## NPM  
en caso que sea necesario actualizar las dependencias:  
`npm install`  
  
## Url produccion y local  
Se debe agregar el dominio de producción en app.module  
allowedDomains: ["localhost:4200"],  
Por lo tanto una vez se tenga dicho dominio deberá agregarse y volver a realizar el build.

