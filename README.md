# rexwithluv-dev

![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)

Mi portfolio: **[rexwithluv.dev](https://rexwithluv.dev)**.

## Versiones

| Ruta  | Qué es                                 |
| ----- | -------------------------------------- |
| `/`   | Versión actual (rama `main`)           |
| `/v1` | Primera versión, congelada en `v1.0.0` |

Las versiones anteriores no se borran: cada una se congela en su imagen de Docker y se sirve bajo su propia ruta.

## Histórico

### v2 · _rainbow mono_ (en curso)

Rediseño completo desde cero. Es la versión que se sirve en `/`.

- Estética monoespaciada de terminal.
- Cada sección tiene su propio color del arcoíris, y la barra superior resalta en la que estás.
- Accesibilidad según **WCAG 2.2 AA**: contraste, navegación por teclado, gestión del foco y textos en otros idiomas marcados con `lang`.
- Modo claro y oscuro, también en el favicon `r_` (en curso).

### v1 · _indigo_ (congelada el 15/11/2026)

Desarrollada entre enero y abril de 2026, tras reiniciar el proyecto. Se sirve en [`/v1`](https://rexwithluv.dev/v1).

- SvelteKit 2 + Svelte 5 + Tailwind CSS 4, generada como web estática.
- i18n con `svelte-i18n` en español, inglés y gallego, con selector de idioma.
- Fondo con degradado, logo con forma de ventana y palabras clave resaltadas en índigo.
- Las skills enlazan a su documentación oficial.
- Despliegue en Kubernetes (K3s) con ingress para `rexwithluv.dev`.

### v0 · prototipo (agosto de 2025)

Primer intento, versiones `0.1.0` a `0.6.0`. Barra lateral, tarjetas de proyecto con imágenes, integración con la API de GitHub y páginas de skills y redes sociales. Aquí se montaron el pipeline de releases con semantic-release, la imagen de Docker y el primer despliegue en Kubernetes. En enero de 2026 se reinició el proyecto, que dio lugar a la v1.
