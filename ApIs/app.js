let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupNavbarAuth();
  fetchProducts();
  setupSearch();
  setupCartModal();
  updateCartBadge();
});
function setupTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  document.body.setAttribute('data-theme', savedTheme);
  if (themeToggleBtn) {
    themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }
}
function setupNavbarAuth() {
  const userContainer = document.getElementById('userNavContainer');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (userContainer) {
    if (currentUser) {
      userContainer.innerHTML = `
        <span>Welcome, <strong>${currentUser.username}</strong></span>
        <button onclick="logout()" class="btn">Log Out</button>
      `;
    } else {
      userContainer.innerHTML = `
        <a href="login.html" class="btn-link">Sign In</a>
        <a href="signup.html" class="btn">Sign Up</a>
      `;
    }
  }
}
function fetchProducts() {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '<p>Loading drinks...</p>';
  fetch('https://api.sampleapis.com/coffee/hot')
    .then(res => res.json())
    .then(data => {
      allProducts = data.map(item => ({
        ...item,
        price: parseFloat((Math.random() * 4 + 2.5).toFixed(2))
      }));
      displayProducts(allProducts);
    })
    .catch(error => {
      console.error('Error fetching drinks:', error);
      container.innerHTML = '<p>Failed to load beverages.</p>';
    });
}
function displayProducts(products) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  if (products.length === 0) {
    container.innerHTML = '<p>No beverages found matching your search.</p>';
    return;
  }
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.05}s`; 
    const imageSrc = product.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300';
    card.innerHTML = `
      <div class="img-wrapper">
        <img src="${imageSrc}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300'">
      </div>
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}
function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    }
  }
}
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = cart.length;
  }
}
function setupCartModal() {
  const cartBtn = document.getElementById('cartBtn');
  const closeModal = document.getElementById('closeModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (cartBtn && modalOverlay) {
    cartBtn.addEventListener('click', () => {
      renderCartItems();
      modalOverlay.classList.add('active');
    });
    closeModal.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      alert('Order Placed Successfully! Payment method: Cash on Delivery.');
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartBadge();
      renderCartItems();
      modalOverlay.classList.remove('active');
    });
  }
}
function renderCartItems() {
  const cartList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = '';
  if (cart.length === 0) {
    cartList.innerHTML = '<li>Your cart is empty.</li>';
    cartTotal.textContent = '$0.00';
    return;
  }
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <span>${item.title}</span>
      <strong>$${item.price.toFixed(2)}</strong>
    `;
    cartList.appendChild(li);
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
}
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      const filtered = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
      );
      displayProducts(filtered);
    });
  }
}