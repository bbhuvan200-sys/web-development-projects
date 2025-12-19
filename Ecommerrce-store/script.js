let cart = [];
let cartVisible = false;

function toggleCart() {
  cartVisible = !cartVisible;
  document.getElementById("cart").style.right =
    cartVisible ? "0" : "-380px";
}

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <p>${item.name} x ${item.qty}
      <button onclick="removeItem(${index})">❌</button></p>`;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
  alert("Order cancelled");
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  updateCart();
}

/* CLICK IMAGE TO ADD */
document.querySelectorAll(".img-box").forEach((box, index) => {
  const products = [
    ["Wireless Headphones",1999],
    ["Smart Watch",2999],
    ["Laptop",59999],
    ["Camera",34999]
  ];
  box.addEventListener("click", () => {
    addToCart(products[index][0], products[index][1]);
  });
});
