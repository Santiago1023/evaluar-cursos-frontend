# Inicializar Aplicación con Docker

## Clonar Repositorio

```
$ git clone https://github.com/EvaluarCursos/evaluar-cursos-frontend.git
$ cd .\evaluar-cursos-frontend\
```

## Inicializar contenedor

```
$ docker compose up
```

> En caso de que no se vean los cambios, ejecuten:<br/>
> `$ docker compose build --no-cache`<br/>
> `$ docker compose up --force-recreate`<br/>
> Para reconstruir la imagen y el contenedor de cero.

Una vez inicializado el contenedor, pueden ver la aplicación en `http://localhost:8080`.

### Lista de rutas
- `/login`
- `/form`
- `/select-course`
- `/consult`
- `/results`
- `/inform`
> Recuerden que la mayoría de estas rutas están en desarrollo, pero pueden explorar.
