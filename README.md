# iamabeltran.com — Portafolio (Astro)

Un solo componente de página (`src/pages/[lang]/index.astro`) y dos diccionarios (`src/i18n/es.json`, `src/i18n/en.json`). Rutas generadas: `/es/` y `/en/` (`/` redirige a `/es/`).

## Uso

```bash
npm install
npm run dev        # desarrollo
npm run build      # valida i18n y genera dist/
```

`npm run build` ejecuta antes `scripts/check-i18n.mjs`, que falla si falta una clave en cualquiera de los dos idiomas. Además, `src/i18n/utils.ts` tipa `en.json` contra la forma de `es.json`.

## Archivos que debes agregar en `public/`

- `cv_es.pdf` — CV en español (aún no lo tengo; el botón ES apunta aquí).
- `cv_en.pdf` — ya incluido (CV EN v5).
- `preview.png` — imagen para Open Graph.

## Cloudflare Pages

Build command: `npm run build` · Output directory: `dist`. No requiere adapter mientras el sitio sea estático.

## Editar contenido

Cambia textos solo en los JSON. Para agregar un proyecto, añade un objeto a `projects` en **ambos** archivos.
