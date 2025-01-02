# Contador React

Este proyecto es una prueba técnica que implementa un contador interactivo utilizando **React**. El contador permite incrementar, decrementar y restablecer el valor. Además, muestra mensajes específicos cuando se alcanzan ciertos límites.

## Características

- **Incremento**: Aumenta el contador en 1.
- **Decremento**: Disminuye el contador en 1, pero no permite valores negativos.
- **Reiniciar**: Restablece el contador a 0.
- **Límites**: El contador no puede bajar de 0 y muestra un mensaje cuando alcanza el valor máximo de 10.

## Posibles Mejoras

- **Personalización de los límites**: Permitir que el usuario defina los límites del contador.
- **Animaciones**: Agregar transiciones suaves al modificar el contador.
- **Accesibilidad**: Mejorar la accesibilidad con roles y etiquetas ARIA.
- **Pruebas unitarias**: Implementar pruebas unitarias para asegurar el funcionamiento correcto.
- **Validación de entrada**: Validar el valor ingresado si se permite cambiar los límites.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **JavaScript (ES6+)**: Lenguaje de programación utilizado para la lógica de la aplicación.
- **CSS**: Hojas de estilo para el diseño y presentación visual de la aplicación.


## Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash

git clone https://github.com/PaolaSL12/prueba_contador.git
cd prueba_contador
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar la aplicación
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash

npm start
```
La aplicación estará disponible en http://localhost:3000.