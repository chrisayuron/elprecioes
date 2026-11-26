# El precio es…
Juego complementario independiente de Éthykos Next.

## Estado
- Proyecto Firebase: `elprecioes`.
- Firestore creado en modo producción (reglas iniciales de denegación).
- SDK Firebase modular inicializado en `src/firebase.js`.
- La interfaz muestra un indicador de inicialización.
- La aplicación todavía no realiza operaciones de lectura/escritura en Firestore.
- El prototipo local de juego sigue siendo provisional; no representa la dinámica final ya acordada.

## Próximos pasos
- Implementar la dinámica establecida con sesiones sincronizadas.
- Definir esquema y reglas de seguridad de Firestore.
- Implementar autenticación y permisos reales exclusivos del administrador.
- Participantes: acceso limitado a las funciones y datos que requiera la partida.
- Pruebas multi-dispositivo y deployment Vercel.

Éthykos Next enlaza al deployment. No se requiere sincronización entre apps. El registro de acceso en Éthykos no certifica que el juego haya terminado.
