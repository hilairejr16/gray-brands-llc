/* Bonafide Lyfe — Main JS v1.1.0
   Cart · Language Toggle · Search · Nav · UI Helpers */

'use strict';

/* ─── LANGUAGE ─────────────────────────────────────────────── */
const I18N = {
  en: {
    promoBar:        'Free shipping on orders over $50 | Use code BEAUTY10 for 10% off',
    signIn:          'Sign In',
    trackOrder:      'Track Order',
    searchPlaceholder: 'Search products, brands…',
    cart:            'Cart',
    heroEyebrow:     'New Arrivals Just Dropped',
    heroH1:          'Discover Your Beauty',
    heroSub:         'Premium hair care, cosmetics, fragrance, jewelry and wellness — all in one place.',
    shopNow:         'Shop Now',
    viewAll:         'View All',
    shopByCategory:  'Shop by Category',
    shopByCategorySub: 'Explore our curated collections',
    featuredProducts:'Featured Products',
    featuredSub:     'Our best-loved beauty essentials',
    addToCart:       'Add to Cart',
    promoBannerH:    'Beauty Deals — Up to 30% Off',
    promoBannerP:    'Shop this week\'s exclusive offers on top-rated products.',
    shopSale:        'Shop the Sale',
    fromBlog:        'From the Blog',
    fromBlogSub:     'Beauty tips, tutorials & lifestyle',
    readMore:        'Read More',
    stayConnected:   'Stay Connected',
    communityJoin:   'Join Our Beauty Community',
    communitySub:    'Events, giveaways, and exclusive member perks.',
    joinNow:         'Join Now',
    shop:            'Shop',
    products:        'Products',
    sortBy:          'Sort by',
    sortFeatured:    'Featured',
    sortPriceLow:    'Price: Low to High',
    sortPriceHigh:   'Price: High to Low',
    sortRating:      'Top Rated',
    sortNew:         'Newest',
    all:             'All',
    filters:         'Filters',
    clearFilters:    'Clear Filters',
    filterCategory:  'Category',
    filterPrice:     'Price Range',
    filterRating:    'Rating',
    noProducts:      'No products found.',
    qty:             'Qty',
    addedToCart:     'Added to cart!',
    removedFromCart: 'Removed from cart',
    cartEmpty:       'Your cart is empty',
    cartEmptySub:    'Start shopping to add items',
    startShopping:   'Start Shopping',
    subtotal:        'Subtotal',
    shipping:        'Shipping',
    free:            'FREE',
    orderTotal:      'Order Total',
    checkout:        'Checkout',
    viewCart:        'View Cart',
    payWith:         'Pay with',
    continueShopping:'Continue Shopping',
    placeOrder:      'Place Order',
    secureCheckout:  'Secure Checkout',
    aboutUs:         'About Us',
    ourStory:        'Our Story',
    ourValues:       'Our Values',
    contactUs:       'Contact Us',
    name:            'Name',
    email:           'Email',
    phone:           'Phone',
    subject:         'Subject',
    message:         'Message',
    sendMessage:     'Send Message',
    messageSent:     'Message sent! We\'ll respond within 24 hours.',
    blog:            'Blog',
    community:       'Community',
    home:            'Home',
    relatedProducts: 'You May Also Like',
    reviews:         'reviews',
    inStock:         'In Stock',
    benefits:        'Benefits',
    ingredients:     'Ingredients & Details',
    description:     'Description',
    buyNow:          'Buy Now',
    wishlist:        'Wishlist',
  },
  es: {
    promoBar:        'Envío gratis en pedidos mayores de $50 | Usa el código BEAUTY10 para 10% de descuento',
    signIn:          'Iniciar Sesión',
    trackOrder:      'Rastrear Pedido',
    searchPlaceholder: 'Buscar productos, marcas…',
    cart:            'Carrito',
    heroEyebrow:     'Nuevas llegadas',
    heroH1:          'Descubre Tu Belleza',
    heroSub:         'Cuidado del cabello, cosméticos, fragancias, joyería y bienestar — todo en un solo lugar.',
    shopNow:         'Comprar Ahora',
    viewAll:         'Ver Todo',
    shopByCategory:  'Comprar por Categoría',
    shopByCategorySub: 'Explora nuestras colecciones seleccionadas',
    featuredProducts:'Productos Destacados',
    featuredSub:     'Nuestros esenciales de belleza más amados',
    addToCart:       'Agregar al Carrito',
    promoBannerH:    'Ofertas de Belleza — Hasta 30% de Descuento',
    promoBannerP:    'Compra las ofertas exclusivas de esta semana en productos mejor valorados.',
    shopSale:        'Ver Ofertas',
    fromBlog:        'Del Blog',
    fromBlogSub:     'Consejos de belleza, tutoriales y estilo de vida',
    readMore:        'Leer Más',
    stayConnected:   'Mantente Conectada',
    communityJoin:   'Únete a Nuestra Comunidad de Belleza',
    communitySub:    'Eventos, sorteos y beneficios exclusivos para miembros.',
    joinNow:         'Unirse Ahora',
    shop:            'Tienda',
    products:        'Productos',
    sortBy:          'Ordenar por',
    sortFeatured:    'Destacados',
    sortPriceLow:    'Precio: Menor a Mayor',
    sortPriceHigh:   'Precio: Mayor a Menor',
    sortRating:      'Mejor Valorados',
    sortNew:         'Más Nuevos',
    all:             'Todo',
    filters:         'Filtros',
    clearFilters:    'Limpiar Filtros',
    filterCategory:  'Categoría',
    filterPrice:     'Rango de Precio',
    filterRating:    'Valoración',
    noProducts:      'No se encontraron productos.',
    qty:             'Cant.',
    addedToCart:     '¡Agregado al carrito!',
    removedFromCart: 'Eliminado del carrito',
    cartEmpty:       'Tu carrito está vacío',
    cartEmptySub:    'Comienza a comprar para agregar artículos',
    startShopping:   'Empezar a Comprar',
    subtotal:        'Subtotal',
    shipping:        'Envío',
    free:            'GRATIS',
    orderTotal:      'Total del Pedido',
    checkout:        'Pagar',
    viewCart:        'Ver Carrito',
    payWith:         'Pagar con',
    continueShopping:'Seguir Comprando',
    placeOrder:      'Realizar Pedido',
    secureCheckout:  'Pago Seguro',
    aboutUs:         'Sobre Nosotros',
    ourStory:        'Nuestra Historia',
    ourValues:       'Nuestros Valores',
    contactUs:       'Contáctenos',
    name:            'Nombre',
    email:           'Correo',
    phone:           'Teléfono',
    subject:         'Asunto',
    message:         'Mensaje',
    sendMessage:     'Enviar Mensaje',
    messageSent:     '¡Mensaje enviado! Responderemos en 24 horas.',
    blog:            'Blog',
    community:       'Comunidad',
    home:            'Inicio',
    relatedProducts: 'También te puede gustar',
    reviews:         'reseñas',
    inStock:         'En Stock',
    benefits:        'Beneficios',
    ingredients:     'Ingredientes y Detalles',
    description:     'Descripción',
    buyNow:          'Comprar Ahora',
    wishlist:        'Lista de Deseos',
  },
};

/* ─── STATE ────────────────────────────────────────────────── */
let LANG = localStorage.getItem('gb_lang') || 'en';
let CART = JSON.parse(localStorage.getItem('gb_cart') || '[]');
let cartOpen = false;

/* ─── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(LANG);
  renderCartCount();
  bindLangBtns();
  bindCartDrawer();
  bindSearch();
  bindMobileMenu();
  bindContactForm();
  initServiceWorker();

  /* Page-specific init */
  const page = document.body.dataset.page;
  if (page === 'home')      initHome();
  if (page === 'shop')      initShop();
  if (page === 'product')   initProduct();
  if (page === 'cart')      initCartPage();
  if (page === 'blog')      initBlog();
  if (page === 'community') initCommunity();
});

/* ─── LANGUAGE ─────────────────────────────────────────────── */
function t(key) { return I18N[LANG][key] || I18N.en[key] || key; }

function applyLang(lang) {
  LANG = lang;
  localStorage.setItem('gb_lang', lang);
  document.documentElement.lang = lang;

  /* Update all [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  /* Update lang buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function bindLangBtns() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      /* Re-render dynamic content */
      const page = document.body.dataset.page;
      if (page === 'shop')    renderShopProducts();
      if (page === 'home')    renderFeaturedProducts();
      if (page === 'product') renderProductDetail();
      if (page === 'cart')    renderCartPage();
    });
  });
}

/* ─── CART ─────────────────────────────────────────────────── */
function saveCart() { localStorage.setItem('gb_cart', JSON.stringify(CART)); }

function addToCart(productId, qty = 1) {
  const product = window.GB_PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = CART.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    CART.push({ id: productId, qty });
  }
  saveCart();
  renderCartCount();
  renderCartDrawer();
  showToast(t('addedToCart'), 'success');
  openCart();
}

function removeFromCart(productId) {
  CART = CART.filter(i => i.id !== productId);
  saveCart();
  renderCartCount();
  renderCartDrawer();
  showToast(t('removedFromCart'));
}

function updateCartQty(productId, delta) {
  const item = CART.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart();
  renderCartCount();
  renderCartDrawer();
  const page = document.body.dataset.page;
  if (page === 'cart') renderCartPage();
}

function cartTotal() {
  return CART.reduce((sum, item) => {
    const p = window.GB_PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCartCount() {
  const total = CART.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-flex' : 'none';
  });
}

function renderCartDrawer() {
  const body = document.getElementById('cart-items-body');
  if (!body) return;
  if (CART.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛍️</div>
        <p><strong data-i18n="cartEmpty">${t('cartEmpty')}</strong></p>
        <p style="font-size:0.85rem">${t('cartEmptySub')}</p>
        <a href="shop.html" class="btn btn-accent" style="margin-top:12px">${t('startShopping')}</a>
      </div>`;
    return;
  }
  body.innerHTML = CART.map(item => {
    const p = window.GB_PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    const name = LANG === 'es' && p.nameEs ? p.nameEs : p.name;
    return `
    <div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-price">$${p.price.toFixed(2)}</div>
        <div class="cart-item-controls">
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id},-1)">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id},1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕ Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');

  const subtotalEl = document.getElementById('cart-subtotal-amt');
  if (subtotalEl) subtotalEl.textContent = `$${cartTotal().toFixed(2)}`;
}

function bindCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const closeBtn = document.getElementById('cart-close');
  const cartBtns = document.querySelectorAll('.open-cart');

  cartBtns.forEach(b => b.addEventListener('click', e => { e.preventDefault(); openCart(); }));
  if (overlay) overlay.addEventListener('click', closeCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  renderCartDrawer();
}

function openCart() {
  cartOpen = true;
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartOpen = false;
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── SEARCH ────────────────────────────────────────────────── */
function bindSearch() {
  const forms = document.querySelectorAll('.search-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input')?.value?.trim();
      if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
    });
  });
}

/* ─── MOBILE MENU ───────────────────────────────────────────── */
function bindMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-menu-close');
  if (hamburger) hamburger.addEventListener('click', () => menu?.classList.add('open'));
  if (close) close.addEventListener('click', () => menu?.classList.remove('open'));
}

/* ─── HOME PAGE ─────────────────────────────────────────────── */
function initHome() {
  renderFeaturedProducts();
  renderCategoryGrid();
}

function renderCategoryGrid() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;
  grid.innerHTML = window.GB_CATEGORIES.map(c => `
    <a href="shop.html?cat=${c.id}" class="cat-card">
      <div class="cat-card-placeholder">${c.emoji}</div>
      <div class="cat-card-overlay">
        <h3>${LANG === 'es' ? c.nameEs : c.name}</h3>
        <small>${c.count} ${t('products')}</small>
      </div>
    </a>
  `).join('');
}

function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = window.GB_PRODUCTS.filter(p => ['sale','new'].includes(p.badge)).slice(0,4);
  grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
}

/* ─── SHOP PAGE ─────────────────────────────────────────────── */
let shopFilters = { cat: '', q: '', sort: 'featured', minPrice: 0, maxPrice: 999 };

function initShop() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('cat')) shopFilters.cat = params.get('cat');
  if (params.get('q'))   shopFilters.q   = params.get('q');

  /* Mark active category tab */
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === shopFilters.cat || (tab.dataset.cat === 'all' && !shopFilters.cat));
    tab.addEventListener('click', () => {
      shopFilters.cat = tab.dataset.cat === 'all' ? '' : tab.dataset.cat;
      document.querySelectorAll('.cat-tab').forEach(t2 => t2.classList.remove('active'));
      tab.classList.add('active');
      renderShopProducts();
    });
  });

  document.getElementById('sort-select')?.addEventListener('change', e => {
    shopFilters.sort = e.target.value;
    renderShopProducts();
  });

  /* Sidebar category checkboxes */
  document.querySelectorAll('.filter-cat-cb').forEach(cb => {
    if (cb.value === shopFilters.cat) cb.checked = true;
    cb.addEventListener('change', () => {
      shopFilters.cat = cb.checked ? cb.value : '';
      document.querySelectorAll('.filter-cat-cb').forEach(c => { if (c !== cb) c.checked = false; });
      renderShopProducts();
    });
  });

  renderShopProducts();
  updateShopHeading();
}

function getFilteredProducts() {
  let items = [...window.GB_PRODUCTS];
  if (shopFilters.cat) items = items.filter(p => p.category === shopFilters.cat);
  if (shopFilters.q) {
    const q = shopFilters.q.toLowerCase();
    items = items.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q));
  }
  items = items.filter(p => p.price >= shopFilters.minPrice && p.price <= shopFilters.maxPrice);
  if (shopFilters.sort === 'price-low')  items.sort((a,b) => a.price - b.price);
  if (shopFilters.sort === 'price-high') items.sort((a,b) => b.price - a.price);
  if (shopFilters.sort === 'rating')     items.sort((a,b) => b.rating - a.rating);
  if (shopFilters.sort === 'newest')     items.sort((a,b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
  return items;
}

function renderShopProducts() {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;
  const items = getFilteredProducts();
  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:var(--gap-xl) 0">${t('noProducts')}</p>`;
    return;
  }
  grid.innerHTML = items.map(p => productCardHTML(p)).join('');
  document.getElementById('product-count')?.setAttribute('data-count', items.length);
  const countEl = document.getElementById('product-count');
  if (countEl) countEl.textContent = `${items.length} ${t('products')}`;
}

function updateShopHeading() {
  const h = document.getElementById('shop-heading');
  if (!h) return;
  if (shopFilters.cat) {
    const c = window.GB_CATEGORIES.find(c => c.id === shopFilters.cat);
    if (c) h.textContent = LANG === 'es' ? c.nameEs : c.name;
  } else {
    h.textContent = t('shop');
  }
}

/* ─── PRODUCT DETAIL ────────────────────────────────────────── */
function initProduct() {
  renderProductDetail();
}

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = window.GB_PRODUCTS.find(p => p.id === id);
  if (!product) {
    document.getElementById('product-detail-wrap')?.insertAdjacentHTML('beforeend', '<p>Product not found.</p>');
    return;
  }

  const name = LANG === 'es' && product.nameEs ? product.nameEs : product.name;
  const desc = LANG === 'es' && product.descriptionEs ? product.descriptionEs : product.description;
  const benefits = LANG === 'es' && product.benefitsEs ? product.benefitsEs : product.benefits;

  const wrap = document.getElementById('product-detail-wrap');
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <div class="gallery-main">
          <div class="gallery-main-placeholder">${product.emoji}</div>
        </div>
        <div class="gallery-thumbs">
          ${[1,2,3,4].map(i => `<div class="gallery-thumb${i===1?' active':''}">${product.emoji}</div>`).join('')}
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">Bonafide Lyfe</div>
        <h1>${name}</h1>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span class="stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5-Math.round(product.rating))}</span>
          <span style="font-size:0.8rem;color:var(--text-muted)">${product.rating} (${product.reviews} ${t('reviews')})</span>
        </div>
        <div class="product-price-block">
          <span class="product-price ${product.originalPrice ? 'price-sale' : ''}">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-price-was">$${product.originalPrice.toFixed(2)}</span>` : ''}
          ${product.badge === 'new' ? '<span class="badge badge-new">New</span>' : ''}
        </div>
        <p class="product-desc">${desc}</p>
        <div class="qty-row">
          <div class="qty-control">
            <button class="qty-btn" id="qty-minus">−</button>
            <input type="number" class="qty-input" id="product-qty" value="1" min="1" max="99">
            <button class="qty-btn" id="qty-plus">+</button>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id}, parseInt(document.getElementById('product-qty').value||1))">
            ${t('addToCart')}
          </button>
        </div>
        <button class="buy-now-btn" onclick="addToCart(${product.id},1);window.location.href='cart.html'">
          ${t('buyNow')}
        </button>
        <div class="product-tabs">
          <div class="tab-buttons">
            <button class="tab-btn active" data-tab="desc">${t('description')}</button>
            <button class="tab-btn" data-tab="benefits">${t('benefits')}</button>
          </div>
          <div class="tab-pane active" id="tab-desc">${desc}</div>
          <div class="tab-pane" id="tab-benefits">
            <ul class="benefits-list">
              ${benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>`;

  /* Tab switching */
  wrap.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      wrap.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      wrap.querySelector(`#tab-${btn.dataset.tab}`)?.classList.add('active');
    });
  });

  /* Qty controls */
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    const inp = document.getElementById('product-qty');
    if (parseInt(inp.value) > 1) inp.value = parseInt(inp.value) - 1;
  });
  document.getElementById('qty-plus')?.addEventListener('click', () => {
    const inp = document.getElementById('product-qty');
    inp.value = parseInt(inp.value) + 1;
  });

  /* Update breadcrumb */
  document.getElementById('breadcrumb-product')?.setAttribute('textContent', name);
  if (document.getElementById('breadcrumb-product')) {
    document.getElementById('breadcrumb-product').textContent = name;
  }

  /* Related products */
  renderRelated(product);
  document.title = `${name} — Bonafide Lyfe`;
}

function renderRelated(product) {
  const grid = document.getElementById('related-grid');
  if (!grid) return;
  const related = window.GB_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  grid.innerHTML = related.map(p => productCardHTML(p)).join('');
}

/* ─── CART PAGE ─────────────────────────────────────────────── */
function initCartPage() {
  renderCartPage();
}

function renderCartPage() {
  const itemsWrap = document.getElementById('cart-page-items');
  const summaryWrap = document.getElementById('cart-page-summary');
  if (!itemsWrap) return;

  if (CART.length === 0) {
    itemsWrap.innerHTML = `
      <div style="text-align:center;padding:var(--gap-2xl) 0">
        <div style="font-size:5rem;margin-bottom:var(--gap-lg)">🛍️</div>
        <h2 style="margin-bottom:var(--gap-sm)">${t('cartEmpty')}</h2>
        <p style="color:var(--text-secondary);margin-bottom:var(--gap-xl)">${t('cartEmptySub')}</p>
        <a href="shop.html" class="btn btn-accent">${t('startShopping')}</a>
      </div>`;
    if (summaryWrap) summaryWrap.innerHTML = '';
    return;
  }

  itemsWrap.innerHTML = CART.map(item => {
    const p = window.GB_PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    const name = LANG === 'es' && p.nameEs ? p.nameEs : p.name;
    return `
    <div class="cart-page-item">
      <div class="cart-page-img">${p.emoji}</div>
      <div style="flex:1">
        <div style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:4px">${p.category}</div>
        <div style="font-size:1.05rem;font-weight:500;margin-bottom:8px">${name}</div>
        <div style="font-size:0.95rem;color:var(--text-secondary);margin-bottom:var(--gap-md)">$${p.price.toFixed(2)} each</div>
        <div style="display:flex;align-items:center;gap:var(--gap-md)">
          <div class="qty-control" style="border-width:1px">
            <button class="qty-btn" onclick="updateCartQty(${p.id},-1)">−</button>
            <span class="qty-input">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${p.id},1)">+</button>
          </div>
          <button onclick="removeFromCart(${p.id})" style="color:var(--text-muted);font-size:0.85rem;transition:color var(--ease)" onmouseover="this.style.color='var(--error)'" onmouseout="this.style.color='var(--text-muted)'">✕ Remove</button>
        </div>
      </div>
      <div style="font-weight:700;font-size:1.05rem;flex-shrink:0">$${(p.price * item.qty).toFixed(2)}</div>
    </div>`;
  }).join('');

  const sub = cartTotal();
  const shipping = sub >= 50 ? 0 : 5.99;
  const total = sub + shipping;

  if (summaryWrap) {
    const install = (total / 4).toFixed(2);
    summaryWrap.innerHTML = `
      <div class="order-summary">
        <h3>${t('secureCheckout')}</h3>
        <div class="summary-row"><span>${t('subtotal')}</span><span>$${sub.toFixed(2)}</span></div>
        <div class="summary-row"><span>${t('shipping')}</span><span>${shipping === 0 ? t('free') : '$'+shipping.toFixed(2)}</span></div>
        <div class="summary-row total"><span>${t('orderTotal')}</span><span>$${total.toFixed(2)}</span></div>

        <!-- Express Checkout -->
        <p class="pay-section-label">Express Checkout</p>
        <div id="paypal-button-container"></div>
        <button class="pay-btn pay-btn--shop-pay" onclick="handleShopPay()" style="margin-top:var(--gap-sm)">
          ✦ Shop Pay
        </button>
        <button class="pay-btn pay-btn--tiktok" onclick="handleTikTokPay()">
          ♪ TikTok Pay
        </button>

        <!-- Card via Stripe -->
        <div class="pay-divider"><span>or pay with card</span></div>
        <button class="pay-btn pay-btn--stripe" onclick="handleStripeCheckout(${total.toFixed(2)})">
          💳 Pay with Card
        </button>
        <div class="pay-card-icons">
          <span class="payment-icon">VISA</span>
          <span class="payment-icon">MC</span>
          <span class="payment-icon">AMEX</span>
          <span class="payment-icon">Debit</span>
        </div>

        <!-- BNPL -->
        <div class="pay-divider"><span>Buy Now, Pay Later</span></div>
        <div class="pay-2col">
          <button class="pay-btn pay-btn--afterpay" onclick="handleAfterPay()">
            Afterpay<small>4 × $${install}</small>
          </button>
          <button class="pay-btn pay-btn--klarna" onclick="handleKlarna()">
            Klarna<small>Pay in 4</small>
          </button>
        </div>

        <!-- Digital Wallets -->
        <div class="pay-divider"><span>Digital Wallets</span></div>
        <div class="pay-3col">
          <button class="pay-btn pay-btn--apple"  onclick="handleApplePay()"> Pay</button>
          <button class="pay-btn pay-btn--gpay"   onclick="handleGooglePay()">G Pay</button>
          <button class="pay-btn pay-btn--venmo"  onclick="handleVenmo()">Venmo</button>
        </div>

        <p style="font-size:0.7rem;color:var(--text-muted);text-align:center;margin-top:var(--gap-md)">
          🔒 Secure 256-bit SSL encryption
        </p>
      </div>`;
    loadPayPal(total);
  }
}

/* ─── PAYPAL INTEGRATION ────────────────────────────────────── */
function loadPayPal(amount) {
  /* PayPal client-ID: replace with real ID from PayPal developer dashboard
     https://developer.paypal.com — create app → get client-id
     Current: using sandbox client-id placeholder */
  const PAYPAL_CLIENT_ID = 'sb'; /* 'sb' = PayPal sandbox for testing */

  if (document.getElementById('paypal-sdk')) {
    renderPayPalButtons(amount);
    return;
  }
  const script = document.createElement('script');
  script.id = 'paypal-sdk';
  script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
  script.onload = () => renderPayPalButtons(amount);
  document.body.appendChild(script);
}

function renderPayPalButtons(amount) {
  const container = document.getElementById('paypal-button-container');
  if (!container || !window.paypal) return;
  container.innerHTML = '';
  paypal.Buttons({
    createOrder: (data, actions) => actions.order.create({
      purchase_units: [{ amount: { value: amount.toFixed(2) } }],
    }),
    onApprove: (data, actions) => actions.order.capture().then(details => {
      CART = [];
      saveCart();
      renderCartCount();
      showToast('Order placed! Thank you, ' + details.payer.name.given_name + '!', 'success');
      setTimeout(() => window.location.href = 'index.html', 2500);
    }),
    onError: err => showToast('Payment error. Please try again.', 'error'),
  }).render('#paypal-button-container');
}

/* ─── PAYMENT HANDLERS ──────────────────────────────────────── */

/* ── STRIPE ────────────────────────────────────────────────────
   1. Create a free account at https://stripe.com
   2. Go to Dashboard → Payment Links → Create a Link
   3. Paste the link URL below (format: https://buy.stripe.com/xxxx)
   Afterpay + Klarna are enabled inside Stripe Payment Methods settings */
const STRIPE_PAYMENT_LINK = ''; /* ← paste your Stripe Payment Link URL */

function handleStripeCheckout(amount) {
  if (STRIPE_PAYMENT_LINK) {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  } else {
    showToast('Card payments coming soon — use PayPal for now.', 'info');
  }
}

/* ── SHOP PAY / SHOPIFY ────────────────────────────────────────
   1. Create a Shopify store (or use existing)
   2. Enable the Buy Button sales channel
   3. Generate a storefront checkout URL and paste below */
const SHOPIFY_CHECKOUT_URL = ''; /* ← paste your Shopify checkout URL */

function handleShopPay() {
  if (SHOPIFY_CHECKOUT_URL) {
    window.open(SHOPIFY_CHECKOUT_URL, '_blank');
  } else {
    showToast('Shop Pay coming soon — use PayPal for now.', 'info');
  }
}

/* ── TIKTOK SHOP ───────────────────────────────────────────────
   1. Set up TikTok Shop at https://seller-us.tiktok.com
   2. Paste your TikTok Shop storefront URL below */
const TIKTOK_SHOP_URL = ''; /* ← paste your TikTok Shop URL */

function handleTikTokPay() {
  if (TIKTOK_SHOP_URL) {
    window.open(TIKTOK_SHOP_URL, '_blank');
  } else {
    showToast('TikTok Shop link coming soon!', 'info');
  }
}

/* ── AFTERPAY & KLARNA (via Stripe) ───────────────────────────
   These are enabled as payment methods inside your Stripe account.
   Once STRIPE_PAYMENT_LINK is set above, these will work. */
function handleAfterPay() {
  if (STRIPE_PAYMENT_LINK) {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  } else {
    showToast('Afterpay available once Stripe is connected.', 'info');
  }
}
function handleKlarna() {
  if (STRIPE_PAYMENT_LINK) {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  } else {
    showToast('Klarna available once Stripe is connected.', 'info');
  }
}

/* ── DIGITAL WALLETS ───────────────────────────────────────────
   Apple Pay + Google Pay work through Stripe or PayPal.
   Venmo works through the PayPal button above. */
function handleApplePay() {
  if (STRIPE_PAYMENT_LINK) {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  } else {
    showToast('Apple Pay available in Safari once Stripe is connected.', 'info');
  }
}
function handleGooglePay() {
  if (STRIPE_PAYMENT_LINK) {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  } else {
    showToast('Google Pay available once Stripe is connected.', 'info');
  }
}
function handleVenmo() {
  showToast('Pay with Venmo via the PayPal button above.', 'info');
}

/* ─── BLOG ──────────────────────────────────────────────────── */
function initBlog() { /* Blog posts are static HTML */ }

/* ─── COMMUNITY ─────────────────────────────────────────────── */
function initCommunity() { /* Events are static HTML */ }

/* ─── CONTACT FORM ──────────────────────────────────────────── */
function bindContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = '...';
    /* Simulate submission — in production connect to Formspree or EmailJS */
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = t('sendMessage');
      const success = document.getElementById('form-success');
      if (success) { success.style.display = 'block'; success.textContent = t('messageSent'); }
      showToast(t('messageSent'), 'success');
    }, 1200);
  });
}

/* ─── PRODUCT CARD HTML ─────────────────────────────────────── */
function productCardHTML(p) {
  const name = LANG === 'es' && p.nameEs ? p.nameEs : p.name;
  const cat = window.GB_CATEGORIES.find(c => c.id === p.category);
  const catName = cat ? (LANG === 'es' ? cat.nameEs : cat.name) : p.category;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  return `
    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="product-card-img">
        <div class="product-card-placeholder">${p.emoji}</div>
        <div class="product-card-badges">
          ${p.badge === 'sale' ? `<span class="badge badge-sale">Sale</span>` : ''}
          ${p.badge === 'new'  ? `<span class="badge badge-new">New</span>`  : ''}
        </div>
        <button class="product-card-wishlist" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡'" title="${t('wishlist')}">♡</button>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${catName}</div>
        <div class="product-card-name">${name}</div>
        <div class="product-card-rating">
          <span class="stars">${stars}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="product-card-price">
          <span class="price-current ${p.originalPrice ? 'price-sale' : ''}">$${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="product-card-add" onclick="event.stopPropagation();addToCart(${p.id})">${t('addToCart')}</button>
      </div>
    </div>`;
}

/* ─── TOAST ─────────────────────────────────────────────────── */
function showToast(msg, type = '') {
  let toast = document.getElementById('gb-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'gb-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ─── SERVICE WORKER ────────────────────────────────────────── */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

/* ─── COOKIE CONSENT BANNER ─────────────────────────────────── */
(function initCookieBanner() {
  const COOKIE_KEY = 'bl_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  /* If already decided, don't show */
  if (localStorage.getItem(COOKIE_KEY)) return;

  /* Show after short delay so page paints first */
  setTimeout(() => banner.classList.add('visible'), 800);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    banner.classList.remove('visible');
  });

  const declineBtn = document.getElementById('cookie-decline');
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'declined');
      banner.classList.remove('visible');
    });
  }
})();
