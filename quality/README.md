# MJ Quality

Una plataforma web integral dedicada al control y aseguramiento de la calidad, diseñada para optimizar procesos y garantizar estándares de excelencia en cada proyecto.

## 🚀 Lanzamiento

**Fecha de lanzamiento:** Abril 2026  
**Versión:** 1.0.0  
**Estado:** Producción

## 🌐 Enlaces de Acceso

- **Aplicación Web (Frontend):** [https://mj-quality-tje5.vercel.app/](https://mj-quality-tje5.vercel.app/)  
- **API de Servicios (Backend):** [https://api-quality.onrender.com](https://api-quality.onrender.com)

## 📋 Descripción

MJ Quality es una solución completa para la gestión de calidad que conecta frontend y backend mediante una arquitectura moderna y escalable. La plataforma permite a los usuarios gestionar, monitorear y validar procesos de calidad de manera eficiente, ofreciendo una interfaz intuitiva y un respaldo de servicios robusto.

## ⚙️ ¿Cómo Funciona?

### Arquitectura

- **Frontend:** Construido con React, TypeScript y Vite para un rendimiento óptimo y desarrollo ágil.
- **Backend:** API RESTful alojada en Render, encargada de la lógica de negocio y persistencia de datos.
- **Comunicación:** El frontend consume los servicios expuestos por la API mediante peticiones HTTP asíncronas.

### Flujo de Trabajo

1. El usuario accede a la aplicación web a través del frontend desplegado en Vercel.
2. La interfaz permite navegar entre módulos: Inicio, Servicios, Acerca de y Contacto.
3. Cada módulo interactúa con la API para obtener, crear o actualizar información según sea necesario.
4. La API procesa las peticiones, aplica validaciones y reglas de negocio, y retorna respuestas estructuradas.
5. El frontend renderiza los resultados en tiempo real, ofreciendo una experiencia fluida y responsiva.

## 🛠️ Cómo Levantar el Proyecto Localmente

### Requisitos Previos

- Node.js (versión recomendada: 18+)
- npm o yarn
- Git

### Pasos para Levantar el Frontend

1. Clonar el repositorio:
   ```bash
   git clone https://mikim@github.com/MJ-Quality/quality.git
   cd quality
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno (si aplica):
   - Crear un archivo `.env` en la raíz del proyecto con las variables necesarias para conectar con la API.

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abrir el navegador en la dirección indicada (por defecto: `http://localhost:5173`).

### Levantar la API Localmente (Opcional)

Si deseas ejecutar la API en tu entorno local, consulta el repositorio correspondiente del backend y sigue sus instrucciones de despliegue. La API actualmente en producción está disponible en:  
[https://api-quality.onrender.com](https://api-quality.onrender.com)

## 📖 Páginas Disponibles

- **Home:** Vista principal con resumen y accesos rápidos.
- **Services:** Catálogo de servicios de calidad ofrecidos.
- **About Us:** Información sobre el proyecto y el equipo.
- **Contact:** Formulario y canales de comunicación.

## 🧑‍💻 Desarrollado por

- **Brenda Yañes**  
  [Portafolio](https://tu-portafolio-brenda.com) *(enlace a portafolio)*

- **Miqueas Correa**  
  [Portafolio](https://tu-portafolio-miqueas.com) *(enlace a portafolio)*

## ©️ Derechos Reservados

Todos los derechos reservados © 2026 MJ Quality.  
Prohibida la reproducción total o parcial sin autorización por escrito de los autores.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.