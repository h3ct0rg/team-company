# Aprobaciones humanas

Los agentes avanzan autónomamente en análisis, investigación, planificación y creación o edición de archivos del equipo. Antes de cualquier acción reservada, el responsable debe presentar la solicitud en el chat y esperar una aprobación explícita.

## Acciones reservadas

- Cualquier gasto, compra, suscripción o compromiso monetario.
- Instalar software, extensiones o dependencias en el sistema.
- Conectar, autorizar o iniciar sesión en correo, redes sociales, cuentas, APIs u otros servicios externos.
- Cambiar configuración del sistema o ejecutar una acción con efectos externos relevantes (publicar, enviar mensajes, cambiar precios en una tienda, etc.).
- Programar tareas recurrentes o automatizaciones (por ejemplo, la revisión semanal).
- Mover o borrar archivos que el humano aportó en `[empresa]/items/`. Esos archivos nunca se modifican: si hace falta una versión editada, se crea una copia.
- Crear, modificar o borrar archivos fuera de la carpeta de los agentes y la carpeta de la empresa.
- Renombrar o mover la carpeta de la empresa.
- Contratar por encima del máximo de 15 agentes.

Editar o versionar archivos creados por el equipo no requiere aprobación.

## Formato de solicitud

**Acción:** qué se hará exactamente.  
**Motivo:** objetivo y agente responsable.  
**Costo:** monto y moneda, o «desconocido».  
**Efecto y datos:** qué cambia y qué información se comparte.  
**Alternativas:** opción sin esta acción, si existe.  
**Aprobación solicitada:** pregunta explícita de sí/no.

Una aprobación solo cubre la acción descrita. Si cambian el costo, el alcance, los datos compartidos o el servicio, solicita aprobación nueva. El silencio no cuenta como aprobación.

## Conexiones a servicios externos

Nada viene conectado de antemano. Cada rol lista en su archivo las conexiones que **podría** necesitar, pero las pide solo cuando una tarea concreta lo requiere.

- Pide la conexión en el momento en que hace falta, con el formato de solicitud y explicando qué tarea queda desbloqueada.
- Pide por separado el permiso de **lectura** (por ejemplo, «ver tus ventas de la tienda») y el de **escritura** (por ejemplo, «publicar productos» o «responder mensajes»). Aprobar la lectura no autoriza escribir.
- Si existe una alternativa sin conexión (que el humano exporte un archivo o copie un dato), ofrécela.
- Registra cada conexión aprobada en `[empresa]/memory/CONEXIONES.md`: servicio, alcance (lectura o escritura), rol que la usa, fecha de aprobación y para qué. Nunca registres credenciales, claves ni tokens.
- Antes de pedir una conexión, revisa `CONEXIONES.md`: si ya está aprobada con el mismo alcance, úsala sin volver a preguntar.
- Si el humano revoca una conexión, márcala como revocada y deja de usarla.

## Solicitar materiales al humano

Pedir un archivo o dato no requiere una autorización especial, pero sí debe ser claro y justificar el uso. Ejemplo: «Para preparar los anuncios necesito fotos de frente y detalle de cada modelo. Súbelas en `[empresa]/items/marketing/` en JPG o PNG; el equipo de marketing las usará para comparar estilos y redactar publicaciones.»

Cada solicitud se registra como tarea en `[empresa]/tareas/HUMANO.md`.
