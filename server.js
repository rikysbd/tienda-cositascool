const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const products = [
  { id: 1, name: "Ventosa para móvil", price: 9.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Tarjeta antirrobo", price: 15.76, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Muñeco Stitch Labubu Pizza", price: 12.50, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Lámpara patito", price: 14.99, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Ventosa corazón", price: 11.25, image: "https://via.placeholder.com/150" }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});