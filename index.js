

const API_URL = "https://online-pharmacy-backend-1.onrender.com/medicines";

const medicineList = document.getElementById("medicine-list");
const cartList = document.getElementById("cart-items");
const searchInput = document.getElementById("search-input");

const adminForm = document.getElementById("admin-form");
const nameInput = document.getElementById("med-name");
const descInput = document.getElementById("med-desc");
const priceInput = document.getElementById("med-price");
const imgInput = document.getElementById("med-img");

let cart = [];

//  Fetch Medicines 
function fetchMedicines() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => renderMedicines(data))
    .catch((err) => console.error("Error fetching medicines:", err));
}

//  Render Medicine Cards 
function renderMedicines(medicines) {
  medicineList.innerHTML = "";
  medicines.forEach((med) => {
    const card = document.createElement("div");
    card.className = "medicine-card";

    card.innerHTML = `
      <img src="${med.image}" alt="${med.name}" />
      <div class="medicine-info">
        <h3>${med.name}</h3>
        <p>${med.description}</p>
        <p><strong>Ksh ${med.price}</strong></p>
      </div>
      <button data-id="${med.id}">Add to Cart</button>
    `;

    card.querySelector("button").addEventListener("click", () => addToCart(med));
    medicineList.appendChild(card);
  });
}

// Add to Cart 
function addToCart(medicine) {
  cart.push(medicine);
  renderCart();
}

// Render Cart
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Ksh ${item.price}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.backgroundColor = "#ff7675";
    removeBtn.style.border = "none";
    removeBtn.style.color = "#fff";
    removeBtn.style.cursor = "pointer";

    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

// Search 
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter((med) =>
        med.name.toLowerCase().includes(term)
      );
      renderMedicines(filtered);
    });
});

// Add New Medicine (Admin Form) 
adminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newMedicine = {
    name: nameInput.value,
    description: descInput.value,
    price: parseFloat(priceInput.value),
    image: imgInput.value,
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMedicine),
  })
    .then((res) => res.json())
    .then(() => {
      fetchMedicines();
      adminForm.reset();
    })
    .catch((err) => console.error("Error adding medicine:", err));
});

// Starts
function init() {
  fetchMedicines();
}

init();
