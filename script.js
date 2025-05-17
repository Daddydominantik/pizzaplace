// Отримуємо дані про товари з JSON файлу
async function getProducts() {
    let response = await fetch("mandarin.json");
    let products = await response.json();
    return products;
};

// Генеруємо HTML-код для карточки товару
function getCardHTML(product) {
    // Створюємо JSON-строку з даними про товар і зберігаємо її в data-атрибуті
    let productData = JSON.stringify(product)
    
    return `
    <div class="pizzas_item">
    <div class="bg">
      <img src="img/${product.image}" alt="">
      <p class="item_name">${product.title}</p>
      <p class="item_price">$${product.price}</p>
      <button class="item_buy" data-product='${productData}'>order</button>
    </div>
  </div>
    `;
}

// Відображаємо товари на сторінці
getProducts().then(function (products) {
    let productsList = document.querySelector('.pizzas_items')
    if (productsList) {
        products.forEach(function (product) {
            productsList.innerHTML += getCardHTML(product)
            
        })
       
    }
    


    // Отримуємо всі кнопки "Купити" на сторінці
    let buyButtons = document.querySelectorAll('.item_buy');
    // Навішуємо обробник подій на кожну кнопку "Купити"
    if (buyButtons) {
        buyButtons.forEach(function (button) {
            button.addEventListener('click', addToCart);
        });
    }
})
