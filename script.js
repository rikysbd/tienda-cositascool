
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} añadido al carrito. Total: €${cart.reduce((t, i) => t + i.price, 0).toFixed(2)}`);
}

function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
  } else {
    const total = cart.reduce((t, i) => t + i.price, 0).toFixed(2);
    alert(`Compra finalizada. Total a pagar: €${total}`);
  }
}
