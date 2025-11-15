# 🛍️ ECOMMERCE-LANDING - Pedrero

Proyecto realizado en React para el curso de Coderhouse. Esta app simula una tienda online con navegación por categorías, vista de detalle de productos y contador de unidades.

---

## 🚀 Tecnologías utilizadas

- React
- React Router DOM
- Bootstrap
- JavaScript
- JSX

---

## 📦 Estructura del proyecto

src/
 ├── components/ │
  ├── NavBar.jsx │ 
  ├── CartWidget.jsx │
  ├── ItemListContainer.jsx │
  ├── ItemList.jsx │
  ├── Item.jsx │
  ├── ItemDetailContainer.jsx │ 
  ├── ItemDetail.jsx 
  │ └── ItemCount.jsx 
 ├── data/ 
 │ └── products.js 
 ├── App.js 
 └── index.js

 
---

## 🧭 Navegación

- `/` → catálogo completo
- `/category/:categoryId` → productos filtrados por categoría
- `/item/:itemId` → vista detalle del producto
- `*` → ruta 404

---

## 🧪 Simulación de datos

Los productos se obtienen mediante Promises con retardo simulado (`setTimeout`) desde el archivo `products.js`.

---

## 🎨 Estilos

- Bootstrap para diseño responsive
- Cards para productos
- Botones estilizados en el contador
- Menú de navegación con enlaces funcionales

---

## ✅ Entregas cumplidas

### Entrega 1: Crea tu landing

- NavBar con enlaces y carrito
- ItemListContainer con mensaje de bienvenida
- Componentes organizados y funcionales

### Entrega 2: Navega las rutas

- Rutas configuradas con React Router
- Filtro por categoría
- Vista detalle con contador
- Simulación de datos
- Navegación completa


## 💻 Cómo correr el proyecto

```bash
npm install
npm start
