## Consigna

> El objetivo principal de este trabajo práctico es que los estudiantes tengan la oportunidad de explorar las posibilidades de Node.js, Express y Sequelize, y que desarrollen habilidades para crear soluciones más robustas y complejas en términos de arquitectura de software y calidad de código.
> 
> Esto implica que los estudiantes deberán aplicar buenas
prácticas de desarrollo, como la modularidad, la escalabilidad
y la seguridad, y que tendrán que tener en cuenta aspectos
como el rendimiento, la usabilidad y la mantenibilidad del
código.
> 
> Para desarrollar el trabajo práctico, los estudiantes deberán seguir los siguientes pasos:
> 1. Crear un proyecto de Node.js utilizando el gestor de
paquetes npm.
> 2. Instalar y configurar Express como framework para el
servidor web.
> 3. Configurar Sequelize para conectarse a una base de datos.
> 4. Crear los modelos necesarios para la base de datos.
> 5. Crear las rutas necesarias para el API RESTful.
> 6. Implementar las funciones CRUD para cada modelo
utilizando Sequelize.
> 7. Organizar el código utilizando el patrón Modelo-Vista-
Controlador (MVC).
> 
> Es importante tener en cuenta que el trabajo práctico debe
cumplir con las siguientes especificaciones y se anima a
investigar y hacer implementaciones adicionales:
> 
> • La base de datos debe contar con al menos 2 tablas
relacionadas entre sí.
> 
> • Las rutas del API RESTful deben permitir realizar operaciones CRUD en la base de datos.

---

### Routes:
#### Home routes

- GET `/`
- GET `/readme`

#### User routes

- GET `user/me`
    Cookie `payload=<token>`
- GET `user/:id`
    Header `x-api-key`
- POST `user/signup`
    Form-encode: `name=<name>&email=<email>&password=<***>`
- POST `user/login`
    Form-encoded `email=<email>&password=<***>`
    Response Cookie/JWT
- PUT `user/:id`
    Header `x-api-key`
    Form-encoded `id=<1>&name=<name>&email=<mail>&password=<******>`
- PUT `user/:id`
    Header `x-api-key`
    Form-encoded `name=<name>&email=<email>&password=<***>`
- DELETE `user/:id`
    Header `x-api-key`

### Pet routes

- POST `pet/`
    Cookie `payload=<token>`
    Form-encoded `name=<name>`
- GET `pet/me`
    Cookie `payload=<token>`
- PUT `pet/:id`
    Cookie `payload=<token>`
    Form-encoded `name=<name>`
- DELETE `pet/:id`
    Cookie `payload=<token>`
