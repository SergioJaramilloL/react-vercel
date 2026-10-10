# ucp-app-react

Aplicación React del curso Proceso de Desarrollo de Software (UCP), con despliegue automático a Vercel mediante GitHub Actions y pipeline de Jenkins con SonarQube y Snyk.

## Ejecutar localmente

```bash
npm install
npm start          # http://localhost:3000
npm run test:coverage
npm run build
```

## Antes de subir

1. En `Jenkinsfile`, cambia `TU_USUARIO` por tu usuario de GitHub y `TU_CORREO@ucp.edu.co` por tu correo.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit UCP"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ucp-app-react.git
git push -u origin main
```

El primer push dispara el workflow `Deploy to Vercel`, que fallará hasta que configures los secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` en Settings > Secrets and variables > Actions. Después de crearlos, vuelve a ejecutarlo con Re-run jobs.

## Estructura

```
.github/workflows/deploy.yml   Workflow de GitHub Actions (build + deploy a Vercel)
Jenkinsfile                    Pipeline: build, tests, SonarQube, Snyk, tests paralelos, deploy simulado
public/                        HTML base
src/                           Código React y pruebas
```
