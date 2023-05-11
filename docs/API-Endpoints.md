
## `GET /log`
**Request Scheme**
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

**Request Scheme**
`Content-Type: application/json`
```json
{
	"email": "example@udea.edu.co",
	"password": "password"
}
```
**Respuesta Scheme**
```json
{
	"role": "student",
	"courses": [
			{
				"id": 42546,
				"code": "Código de la materia en el plan de estudios",
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

**Request Scheme**
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

**Response Scheme**
Si se registra correctamente, retornar un `HTTP Status 200`, de lo contrario `HTTP Status 400`.

## `GET /courses?semester=value&faculty=value&course=value`

Obtener una lista de cursos para un profesor. Los filtros de semestre, facultad y nombre del curso se pasan en la URL como `Query Params`, **todos opcionales**.

**Response Scheme**
```json
[
	{
		"id": "ID de materia",
		"name": "Nombre de la materia",
		"code": "Código de la materia",
		"faculty": "Facultad"
	},
	
	{
		"id": "ID de materia 2",
		"name": "Nombre de la materia 2",
		"code": "Código de la materia 2",
		"faculty": "Facultad 2"
	},
]
```

## `GET /course/{id}`

Obtiene informe evaluación para un curso. En la respuesta se debera incluir
 - Nombre del profesor
 - Materia
 - Semestre

 Las preguntas están divididas por secciones por lo cual la respuesta deberá ser de la siguiente forma.

 Lara cada sección se tiene un numero de preguntas. Para cada pregunta se debe incluir 
 el promedio (`average`), desviación estándar (`desv_est`),  coeficiente de varianza (`coef_var`) 
 y la cantidad de respuestas de esa pregunta (`answers`) y para cada sección se debe incluir
 el promedio (`t_average`), desviación estándar (`t_desv_est`),  coeficiente de varianza (`t_coef_var`) 
 y la cantidad de respuestas para las preguntas de esa seccion (`t_answers`).

 **Response Scheme**
```json
{
        "headers": {
                "professor": "Wilmer Alberto Gil ",
                "subject": "Analisis y diseño de sistemas1",
                "semester": "2023-1"
        },
        "seccion1": {
                "q1": {
                        "average": 4,
                        "desv_est": 5,
                        "coef_var": 9,
                        "answers": 9
                },
                "total": {
                        "t_average": 4,
                        "t_desv_est": 5,
                        "t_coef_var": 9,
                        "t_answers": 9
                }
        },
        "session2": {
                "q2": {
                        "average": 4,
                        "desv_est": 5,
                        "coef_var": 9,
                        "answers": 9
                },
                "total": {
                        "t_average": 4,
                        "t_desv_est": 5,
                        "t_coef_var": 9,
                        "t_answers": 9
                }
        },
        "seccionN": {
                "q3": {
                        "average": 4,
                        "desv_est": 5,
                        "coef_var": 9,
                        "answers": 9
                },
                "q4": {
                        "average": 4,
                        "desv_est": 5,
                        "coef_var": 9,
                        "answers": 9
                },
                "qN": {
                        "average": 4,
                        "desv_est": 5,
                        "coef_var": 9,
                        "answers": 9
                },
                "total": {
                        "t_average": 8,
                        "t_desv_est": 7,
                        "t_coef_var": 27,
                        "t_answers": 12
                }
        }
}
```

A continuación se especifican las secciones y sus preguntas correspondientes.

```json
{
        "seccion1": {
                "q1": {
                        "aspect": "Materia: Importancia en el plan de estudios",
                        "question": "¿Cómo califica la importancia del curso dentro del plan de estudios?"
                }
        },
        "seccion2": {
                "q2": {
                        "aspect": "Materia: Relación con los prerrequisitos",
                        "question": "¿Cómo considera que es la relación de la materia con sus prerrequisitos?"
                }
        },
        "seccion3": {
                "q3": {
                        "aspect": "Materia: Actualidad",
                        "question": "¿Cómo evalúa la materia en cuánto a la actualidad y vigencia de sus temas?"
                }
        },
        "seccion4": {
                "q4": {
                        "aspect": "Profesor: Manejo de evaluaciones",
                        "question": "¿Cómo evalúa la elaboración de evaluaciones y exámenes del profesor?"
                },
                "q5": {
                        "aspect": "Profesor: Manejo de evaluaciones",
                        "question": "¿Cómo considera la objetividad del profesor a la hora de calificar?"
                }
        },
        "seccion5": {
                "q7": {
                        "aspect": "Profesor: Relación con los estudiantes",
                        "question": "¿Cómo considera que es el respeto y ecuanimidad con los estudiantes?"
                },
                "q6": {
                        "aspect": "Profesor: Relación con los estudiantes",
                        "question": "¿Cómo califica la disposición del profesor a atender dudas fuera del horario regular?"
                }
        },
        "seccion6": {
                "q8": {
                        "aspect": "Profesor: Conocimientos",
                        "question": "¿Cómo califica el dominio sobre los temas explicados por parte del profesor?"
                },
                "q9": {
                        "aspect": "Profesor: Conocimientos",
                        "question": "¿Como califica la seguridad de exposición del profesor?"
                },
                "q10": {
                        "aspect": "Profesor: Conocimientos",
                        "question": "¿Cómo evalúa las respuestas a las preguntas e inquietudes de los estudiantes?"
                }
        }
}
```
