let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsDiv = document.getElementById("cart-items");

if (cart.length === 0) {
  cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
} else {
  cart.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
    `;
    cartItemsDiv.appendChild(div);
  });
}
