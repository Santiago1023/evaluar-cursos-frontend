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
