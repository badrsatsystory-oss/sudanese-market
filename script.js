const products = [
  {
    id: 1,
    name: "تمر منزوع النوى",
    category: "food",
    price: 220,
    oldPrice: 280,
    discount: "20%",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "هاتف ذكي",
    category: "electronics",
    price: 1850,
    oldPrice: 2200,
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "حقيبة أنيقة",
    category: "fashion",
    price: 460,
    oldPrice: 600,
    discount: "23%",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "دش داخلي",
    category: "home",
    price: 680,
    oldPrice: 820,
    discount: "17%",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "زيت ذرة فاخر",
    category: "food",
    price: 150,
    oldPrice: 190,
    discount: "21%",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "مجفف شعر",
    category: "home",
    price: 540,
    oldPrice: 700,
    discount: "22%",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "مسكّن عناية",
    category: "beauty",
    price: 210,
    oldPrice: 270,
    discount: "18%",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "بلوزة أنيقة",
    category: "fashion",
    price: 340,
    oldPrice: 420,
    discount: "19%",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
];

const productsGrid = document.getElementById("products-grid");
const cartCount = document.getElementById("cart-count");
let cart = 0;

function getCategoryName(category) {
  const names = {
    food: "مواد غذائية",
    electronics: "إلكترونيات",
    fashion: "أزياء",
    home: "منزل",
    beauty: "جمال",
  };

  return names[category] || "منتج";
}

function renderProducts(selectedCategory = "all") {
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-item">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="discount-tag">${product.discount}</span>
          </div>
          <div class="product-info">
            <div class="product-header">
              <h3>${product.name}</h3>
            </div>
            <span class="product-category">${getCategoryName(product.category)}</span>

            <div class="price-row">
              <div>
                <div class="price">${product.price} ج.س.د</div>
                <div class="old-price">${product.oldPrice} ج.س.د</div>
              </div>
              <button class="add-btn" data-id="${product.id}">أضف</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      cart += 1;
      cartCount.textContent = cart;
      button.textContent = "تمت الإضافة";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = "أضف";
        button.disabled = false;
      }, 800);
    });
  });
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

renderProducts();
