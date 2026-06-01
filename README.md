# PROTEC Website

Sitio web corporativo de PROTEC construido con React + TypeScript + Vite.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Build de producción

```bash
npm run build
```

El build está configurado para generar archivos estáticos en `dist/`.

## Deploy a GitHub Pages

Este repositorio incluye el workflow `.github/workflows/deploy-pages.yml` que:

1. Instala dependencias con `npm ci`
2. Ejecuta `npm run build`
3. Publica `dist/` en GitHub Pages con las acciones oficiales

Pasos para habilitarlo:

1. Ir a **Settings → Pages**
2. En **Build and deployment**, seleccionar **Source: GitHub Actions**
3. Hacer push a `main` o ejecutar manualmente el workflow **Deploy to GitHub Pages**

Base path configurado en Vite: `/Web-Protec/`

URL esperada: `https://rodri240.github.io/Web-Protec/`
