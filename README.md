![image](https://github.com/user-attachments/assets/8dd3b83b-d5a7-44d3-9912-db17a87d3dbd)# PPA

# ¿Cómo ejecutar el proyecto?

entrar a la ruta del proyecto y ejecutar los siguientes comandos:

```bash
npm install
```

Con el siguiente comando del package json puede correr el proyecto una vez instalado los paquetes de soporte de ts

```bash
npm run dev
```

- En caso de no querer ejecutarlo así el archivo principal es el index.ts
- el archivo data.ts tiene unos registro de los 8 aeuropuertos con vuelos por si se quiere editar y probar algún otro
- La carpeta interfaces tiene las interfaces de los objetos que se usan en el proyecto
- La carpeta entities tiene las clases de los objetos que se usan en el proyecto, algo a tener en cuenta es que la
  entity flight-finder tiene la lógica y cálculo de los vuelos

# Problema

Punto de Pago Air (PPA), una aerolínea en fase de lanzamiento planea iniciar operaciones en 8 aeropuertos nacionales
colombianos: BOG, MDE, BAQ, BGA, SMR, CTG, CLO y EOH. La aerolínea ha establecido un itinerario semanal fijo, es decir,
los mismos vuelos operarán los mismos días cada semana. Sin embargo, debido al tamaño inicial de la flota, no todos los
aeropuertos estarán conectados por vuelos directos.

Como ingeniero de desarrollo, se te solicita diseñar e implementar una funcionalidad de búsqueda de vuelos que permita a
los usuarios consultar los posibles itinerarios entre cualquier par de aeropuertos dentro de la red de PPA, considerando
una fecha de viaje específica. El sistema debe ser capaz de encontrar rutas directas y aquellas que involucren escalas
en otros aeropuertos de la red, así como organizar los resultados por duración o tiempo total del viaje.

![image](https://github.com/user-attachments/assets/7b2536bf-4e88-46c3-a586-463288b7fae6)
