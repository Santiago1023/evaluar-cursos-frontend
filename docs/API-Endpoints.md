## `GET /log`
**Request de ejemplo**
Se hace una petición al backend con la Cookie `session`.
Si el usuario es auténtico, el backend deberá responder con la siguiente información:
```json
{
	"role": "student",
	"courses": [
			{
				"id": 583753,
				"code": "Código",
				"teacher": "Nombre de Profesor",
				"name": "Nombre de la materia"
			},
			{
				"id": 839084,
				"code": "Código 2",
				"teacher": "Nombre de Profesor 2",
				"name": "Nombre de la materia 2"
			},
	]
}
```
Y si no lo es, deberá responder con un `HTTP Error Status 401`.

## `POST /log`
**Request de ejemplo**
`Content-Type: application/json`
```json
{
	"email": "example@udea.edu.co",
	"password": "password"
}
```
**Respuesta de ejemplo**
```json
{
	"role": "student",
	"courses": [
			{
				"id": 42546,
				"code": "Código",
				"teacher": "Nombre de Profesor",
				"name": "Nombre de la materia",
				"evaluated": false,
			},
			{
				"id": 374563635,
				"code": "Código 2",
				"teacher": "Nombre de Profesor 2",
				"name": "Nombre de la materia 2",
				"evaluated": false,
			},
	]
}
```

En la HTTP Response se espera una cookie `session` con un token que identifique al usuario en la base de datos.

## `POST /form`

**Request de ejemplo**
Esta solicitud se hace con la Cookie `session` para identificar al usuario.
```json
{
	"id": 34265844357,
	"q1": 1,
	"q2": 3,
	
	"qN": 4,
	"feedback": "Comentario final"
}
```

**Response**
Si se registra correctamente, retornar un `HTTP Status 200`, de lo contrario `HTTP Status 400`.
