# El precio es…
Aplicación independiente para sesiones de juego en vivo, enlazada desde Éthykos Next.

## Flujo
- El administrador inicia sesión con correo y contraseña.
- Configura los artículos y precios exactos.
- Crea una sesión y comparte el código.
- Los participantes entran con nombre y código.
- En cada ronda se envía una única estimación por participante.
- El envío queda bloqueado hasta que el docente avance.
- El docente visualiza las estimaciones, revela el precio real y controla la siguiente ronda.
- La sesión termina al avanzar después del último artículo o al finalizar manualmente.

## Firebase
- Authentication: Email/Password para administrador y Anonymous para participantes.
- Firestore: sesiones, participantes, respuestas y reglas.
- Los precios no se incluyen en el documento público de sesión antes de revelarse.

## Estado
El código está implementado en una primera versión sincronizada. Falta publicar reglas en Firebase Console y realizar pruebas multi-dispositivo y de seguridad. No se considera validado para uso en aula hasta completar esas pruebas.

Éthykos Next enlaza a esta aplicación independiente. No hay sincronización entre apps; el registro de acceso en Éthykos no certifica que el juego haya terminado.