
const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_YOUR_SECRET_KEY");
const cors = require("cors");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const products = {
  "ventosa-corazon": { name: "Ventosa móvil corazón", price: 530 },
  "ventosa-rectangular": { name: "Ventosa móvil rectangular", price: 640 },
  "stitch-labubu": { name: "Muñeco Stitch Labubu Pizza", price: 1250 },
  "gps-tarjeta": { name: "Tarjeta GPS antirrobo cartera", price: 1576 },
  "lampara-patito": { name: "Lámpara con forma de patito", price: 1560 },
};

app.post("/create-checkout-session", async (req, res) => {
  const { productId } = req.body;
  const product = products[productId];
  if (!product) return res.status(400).send("Producto no encontrado");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ],
    success_url: "https://comforting-brioche-7ef971.netlify.app/success.html",
    cancel_url: "https://comforting-brioche-7ef971.netlify.app/cancel.html",
    automatic_tax: { enabled: true },
  });

  res.json({ url: session.url });
});

app.listen(4242, () => console.log("Servidor en http://localhost:4242"));
