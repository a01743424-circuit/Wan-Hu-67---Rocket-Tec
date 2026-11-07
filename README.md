# WAN HU 67 — Bitácora de misión

Sitio web estático para presentar **WAN HU 67**, proyecto aeroespacial de Rocket Tec en el contexto del **Reto F1025B / Mission 2026**, Tecnológico de Monterrey, Campus Sinaloa.

## Contenido del sitio

- Presentación de misión y cuenta regresiva configurable.
- Historia de Wan Hu narrada como leyenda, no como acontecimiento histórico comprobado.
- Explicación divulgativa de empuje, gravedad, resistencia aerodinámica, estabilidad, apogeo y recuperación.
- Metodología: ingeniería empírica e ingeniería predictiva.
- Herramientas: MATLAB y SolidWorks Flow Simulation.
- Métricas de lanzamiento con campos por medir; no se inventan resultados.
- Resultados académicos esperados.
- Identidad visual original y cinco fichas de integrantes con roles propuestos.
- Selector de idioma español / inglés.

## Estructura del repositorio

```text
wan-hu-67-mission-site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── wan-hu-67-emblema.png
    ├── wan-hu-67-horizontal.png
    └── guia-identidad-visual.png
```

## Tecnologías

- HTML5 semántico.
- CSS3: variables, Grid, Flexbox, animaciones y diseño adaptable.
- JavaScript puro: cambio de idioma, menú móvil, navegación activa y cuenta regresiva.
- Emblemas oficiales servidos desde `assets/`; no se requieren imágenes alojadas en terceros.
- Tipografías Google Fonts (Space Grotesk, Inter y DM Mono); se incluyen alternativas del sistema en CSS.

No necesita frameworks, instalación de paquetes ni proceso de compilación. El contenido del sitio está en español por defecto; el selector superior cambia el contenido traducible a inglés.

## Configurar la fecha de lanzamiento

Abre `script.js` y busca:

```js
const LAUNCH_DATE_ISO = null;
```

Sustituye `null` por la fecha y hora confirmadas en formato ISO 8601 con zona horaria, por ejemplo:

```js
const LAUNCH_DATE_ISO = "2027-05-15T09:00:00-07:00";
```

La fecha del ejemplo es ilustrativa: **no representa una fecha oficial de WAN HU 67**. Mientras el equipo no confirme el dato, debe permanecer `null` y la página mostrará “Fecha por confirmar”.

## Actualizar métricas y roles

En `index.html`, localiza la sección `#metricas` para sustituir los guiones por resultados verificados, conservando las unidades. Actualiza también las fichas `#equipo` si el equipo acuerda una distribución diferente de responsabilidades. Los roles que se muestran actualmente son propuestas editables, no asignaciones oficiales confirmadas.

## Ejecutar localmente

1. Descarga o clona el repositorio.
2. Descomprime el proyecto si descargaste el ZIP.
3. Abre `index.html` en un navegador moderno.

También puedes abrir la carpeta en Visual Studio Code y utilizar Live Server, aunque no es obligatorio.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `wan-hu-67`.
2. Sube todos los archivos y la carpeta `assets` a la rama `main`.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Presiona **Save**.
7. GitHub Pages publicará el sitio y mostrará la URL, normalmente `https://USUARIO.github.io/wan-hu-67/`.
8. Comprueba el selector de idioma, la navegación, la cuenta regresiva y la visualización móvil.

Cada envío de cambios a la rama configurada volverá a desplegar el sitio automáticamente.

## Referencias introductorias

- NASA Glenn Research Center, [Four Forces on a Rocket](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-rocket-forces/).
- NASA, [Rockets Educator Guide](https://www.nasa.gov/wp-content/uploads/2012/07/rockets-educator-guide-20.pdf), referencia de divulgación para la historia legendaria de Wan Hu y conceptos básicos de cohetería.

## Revisión antes de entregar

- Confirmar la fecha y la zona horaria del lanzamiento antes de activar la cuenta regresiva.
- Sustituir los valores pendientes de las métricas únicamente con datos registrados.
- Revisar los roles propuestos con todos los integrantes.
- Añadir evidencias, fotografías propias, tablas o gráficas del proyecto cuando estén disponibles.
- Verificar que la descripción de la metodología corresponda a lo que realmente realizaron.

---

**WAN HU 67 · Rocket Tec · Tecnológico de Monterrey, Campus Sinaloa · 2026**

## Roles propuestos del equipo

- Adrián Ley Calderón: diseño CAD y simulación.
- Juan Manuel Pérez Osuna: modelado matemático.
- Santiago Lugo Martínez: integración de misión y pruebas.
- Luis Daniel Maldonado Vargas: registro y métricas.
- Karely Valencia: documentación y comunicación.

Los roles son editables y deben validarse con el equipo.

