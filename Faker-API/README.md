# API falsa

Para solidificar los conceptos de hacer nuestra propia API, vamos a crear una API que genere un usuario aleatorio en una solicitud GET. Utilizaremos Postman para hacer nuestras solicitudes GET.

En esta tarea, usaremos 2 bibliotecas javascript para crear una API simple que genere un Usuario y / o Compañía dependiendo de la ruta:
- Express (servidor)
- Faker (generador de datos falsos)

Siga adelante y siga la lista de verificación a continuación utilizando las 2 clases a continuación:

1. Clase de usuario
- _carné de identidad
- primer nombre
- apellido
- número de teléfono
- Email
- contraseña
2. Clase de empresa
- _carné de identidad
- nombre
- habla a
- - calle
- - ciudad
- - estado
- - código postal
- - país

# Faker

La biblioteca falsa tiene una tonelada de métodos que podemos usar para llenar campos específicos con datos generados aleatoriamente. Consulte la documentación falsa y busque los métodos para elegir los que usaría para completar cada campo.
Aquí hay un ejemplo de cómo podemos usar faker.

# Topics
- Crea una nueva carpeta de proyecto "Faker_API" y con su terminal, navega a tu nueva carpeta
- Crea un archivo package.json usando el comando "npm init -y" en tu terminal
- Instalar express y faker
- Crear un archivo server.js
- En su archivo server.js, importe express y faker
- Crea 2 clases: Usuario, Empresa con los mismos atributos que se enumeran arriba
- Crea una ruta api "/ api / users / new" que devuelva un nuevo usuario
- Crea una ruta api "/ api / companies / new" que devuelva una nueva compañía
- Crea una ruta api "/ api / user / company" que devuelva tanto un nuevo usuario como una nueva compañía
- Ejecuta su archivo server.js usando nodemon
- Usando Postman, prueba tus nuevas rutas GET