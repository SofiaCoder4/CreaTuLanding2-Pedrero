const products = [
  {
    id: '1',
    title: '👕 Remera básica',
    price: 2500,
    category: 'ropa',
    img: '👕'
  },
  {
    id: '2',
    title: '👟Zapatillas urbanas',
    price: 8500,
    category: 'calzado',
    img: '👟'
  },
  {
    id: '3',
    title: '🧥Campera deportiva',
    price: 12000,
    category: 'ropa',
    img: '🧥'
  },
  {
    id: '👟⚽',
    title: 'Botines de fútbol',
    price: 9500,
    category: 'calzado',
    img: '👟⚽'
  },
  {
    id: '5',
    title: '🧢Gorra estilo urbano',
    price: 1800,
    category: 'accesorios',
    img: '🧢'
  }
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 1000);
  });
