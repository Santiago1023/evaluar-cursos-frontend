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

> En caso de que no se vean los cambios, ejecuten:
> `$ docker compose build --no-cache` > `$ docker compose up --force-recreate`
> Para reconstruir la imagen y el contenedor de cero.
