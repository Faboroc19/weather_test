# Weather

Este proyecto esta generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Dev server

Ejecute `ng serve` para un servidor dev. Vaya a `http://localhost:4200/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

## framework y/o APIs utilizadas

Se utiliza bootstrap y el api OpenWeather `https://openweathermap.org/`.

## Components

Single page la cual esta realizada por componentes separados conectados entre si. EL padre de todos es weather.component en el cual se maquetan los otros dos componentes (cities.component y hours.component) para diferencias los dos estados de la single page.

## Services

Un solo servicio el cual se encarga de hacer la conexión con el api de clima utilizada.

## Util

Se genera todas las constantes de configuracion de la single page.

## Pipes

Se genera un pipe para mostrar la temperatura en grados Celsius.




