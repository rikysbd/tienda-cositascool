const backendUrl = "https://cositascool-backend.onrender.com";

fetch(`${backendUrl}/products`)
  .then((res) => res.json())
  .then((products) => {
    const container = document.querySelector(".product-list");
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} €</p>
        <button>Añadir al carrito</button>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error al cargar productos:", error);
