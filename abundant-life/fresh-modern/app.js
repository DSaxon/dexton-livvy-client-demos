/* Abundant Life Market — Fresh Modern · shared app (header, footer, cart, product rendering) */
(function () {
  var PRODIMG = {
    'produce-bag': '1488459716781-31db52582fe9',
    'farm-eggs': '1506976785307-8732e854ad03',
    'chicken-breast': '1604503468506-a8da13d82791',
    'turkey-legs': '1606728035253-49e8a23146de',
    'greencake': '1607478900766-efe13248b125',
    'green-powder': '1622480916113-9000ac49b79d'
  };
  function img(id, w) { return 'https://images.unsplash.com/photo-' + (PRODIMG[id] || id) + '?w=' + (w || 600) + '&q=72&auto=format&fit=crop'; }

  var PRODUCTS = [
    { id: 'produce-bag', name: 'Organic Produce Bag', price: 20, unit: 'each', cat: 'Produce', tint: '--c-produce', desc: 'Organic produce grown on the Eastern Shore — okra, mustard &amp; collard greens, bok choy, green cherry tomatoes.' },
    { id: 'farm-eggs', name: 'Farm Fresh Eggs', price: 8, unit: 'per dozen', cat: 'Eggs', tint: '--c-eggs', desc: 'One dozen eggs from free-range chickens. Deep-gold yolks, laid this week.' },
    { id: 'chicken-breast', name: 'Chicken Breast', price: 22, unit: 'per 1.5 lb', cat: 'Meat', tint: '--c-meat', desc: 'Boneless, skinless breast of pastured, soy-free chicken. Clean protein from ethical farmers.' },
    { id: 'turkey-legs', name: 'Smoked Turkey Legs', price: 12, unit: 'each', cat: 'Meat', tint: '--c-meat', desc: 'Wood-smoked turkey legs from an Amish family farm in Lancaster, PA.' },
    { id: 'greencake', name: 'Greencake', price: 40, unit: 'each', cat: 'Wellness', tint: '--c-greens', desc: 'Whole-food green nutrition, baked into a rich, satisfying cake.' },
    { id: 'green-powder', name: 'Green Powder', price: 74, unit: 'each', cat: 'Wellness', tint: '--c-greens', desc: 'Whole-food greens for shakes &amp; smoothies. DMV delivery only.', dmv: true }
  ];
  var CATS = ['All', 'Produce', 'Eggs', 'Meat', 'Wellness'];

  var KEY = 'abundantLifeCart';
  var cart = JSON.parse(localStorage.getItem(KEY) || '[]');
  function save() { localStorage.setItem(KEY, JSON.stringify(cart)); }
  function find(id) { return cart.find(function (i) { return i.id === id; }); }
  function P(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }

  var LEAF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21c0-6 3-9 8-9-1 6-4 9-8 9Zm0 0c0-6-3-9-8-9 1 6 4 9 8 9Zm0 0V9"/></svg>';

  var NAV = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'shop.html', label: 'Shop', page: 'shop' },
    { href: 'about.html', label: 'Our Story', page: 'about' },
    { href: 'delivery.html', label: 'Delivery', page: 'delivery' },
    { href: 'contact.html', label: 'Contact', page: 'contact' }
  ];

  function injectHeader() {
    var active = document.body.getAttribute('data-page');
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === active ? ' class="active" aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');
    var h = document.createElement('header');
    h.className = 'nav';
    h.innerHTML =
      '<div class="nav-in">' +
        '<a class="logo" href="index.html"><span class="mk">' + LEAF + '</span>Abundant Life</a>' +
        '<nav class="links" id="navlinks">' + links + '</nav>' +
        '<div class="nav-right">' +
          '<button class="cart-btn" id="cartBtn" aria-label="Open cart">Cart <span class="cart-count" id="cc">0</span></button>' +
          '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-menu" id="mobileMenu">' + links + '</div>';
    document.body.insertBefore(h, document.body.firstChild);
    document.getElementById('cartBtn').addEventListener('click', openCart);
    var burger = document.getElementById('burger'), mm = document.getElementById('mobileMenu');
    burger.addEventListener('click', function () { mm.classList.toggle('open'); burger.classList.toggle('x'); });
  }

  function injectFooter() {
    var f = document.createElement('footer');
    f.className = 'site-foot';
    f.innerHTML =
      '<div class="foot-in">' +
        '<div class="foot-brand"><a class="logo" href="index.html"><span class="mk">' + LEAF + '</span>Abundant Life</a>' +
          '<p>Good food, grown close. Organic produce, pasture-raised meats, eggs &amp; whole-food supplements from Maryland &amp; Pennsylvania farms, delivered across the DMV.</p></div>' +
        '<div class="foot-col"><h4>Shop</h4><a href="shop.html">All products</a><a href="shop.html">Produce</a><a href="shop.html">Meats &amp; eggs</a><a href="shop.html">Wellness</a></div>' +
        '<div class="foot-col"><h4>Company</h4><a href="about.html">Our story</a><a href="delivery.html">Delivery &amp; FAQ</a><a href="contact.html">Contact</a></div>' +
        '<div class="foot-col"><h4>Find us</h4><span>Capitol Heights, MD</span><span>&amp; the DMV Area</span><a href="contact.html">Ask about delivery →</a></div>' +
      '</div>' +
      '<div class="foot-bottom"><span>© 2026 Abundant Life Market</span><span>Sourcing the best for our community</span></div>';
    document.body.appendChild(f);
  }

  function injectCart() {
    var ov = document.createElement('div'); ov.className = 'overlay'; ov.id = 'ov';
    var dw = document.createElement('aside'); dw.className = 'drawer'; dw.id = 'dw'; dw.setAttribute('aria-label', 'Shopping cart');
    dw.innerHTML =
      '<h3 class="disp">Your cart <button class="x" id="cartClose" aria-label="Close">×</button></h3>' +
      '<div class="items" id="items"></div>' +
      '<div class="foot-cart"><div class="subtotal"><span>Subtotal</span><span class="amt disp" id="sub">$0.00</span></div>' +
      '<button class="checkout" id="checkoutBtn">Checkout</button>' +
      '<p class="cart-note">Delivery across the DMV · checkout coming soon</p></div>';
    var toast = document.createElement('div'); toast.className = 'toast'; toast.id = 'toast';
    document.body.appendChild(ov); document.body.appendChild(dw); document.body.appendChild(toast);
    ov.addEventListener('click', closeCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
  }

  function cardHTML(p) {
    return '<article class="card" data-cat="' + p.cat + '">' +
      '<div class="top" style="background:var(' + p.tint + ')"><img src="' + img(p.id, 600) + '" alt="' + p.name + '" loading="lazy">' +
        '<span class="tagpill">' + p.cat + '</span>' + (p.dmv ? '<span class="dmv">DMV only</span>' : '') +
      '</div>' +
      '<div class="body"><h3 class="disp">' + p.name + '</h3><p class="desc">' + p.desc + '</p>' +
        '<div class="row"><div class="price disp">$' + p.price.toFixed(0) + '<small>' + p.unit + '</small></div>' +
        '<button class="add" data-id="' + p.id + '" aria-label="Add ' + p.name + ' to cart">+</button></div>' +
      '</div></article>';
  }
  function wireAdds(scope) {
    (scope || document).querySelectorAll('.add').forEach(function (b) {
      if (b.dataset.wired) return; b.dataset.wired = '1';
      b.addEventListener('click', function () { add(b.dataset.id, b); });
    });
  }

  function renderInto(id, list) {
    var el = document.getElementById(id); if (!el) return;
    el.innerHTML = list.map(cardHTML).join('');
    wireAdds(el);
  }

  function initShopFilter() {
    var bar = document.getElementById('filterBar'); if (!bar) return;
    bar.innerHTML = CATS.map(function (c, i) {
      return '<button class="filter' + (i === 0 ? ' on' : '') + '" data-cat="' + c + '">' + c + '</button>';
    }).join('');
    renderInto('shopGrid', PRODUCTS);
    bar.querySelectorAll('.filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        bar.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        var c = btn.dataset.cat;
        renderInto('shopGrid', c === 'All' ? PRODUCTS : PRODUCTS.filter(function (p) { return p.cat === c; }));
      });
    });
  }

  function add(id, btn) {
    var it = find(id); if (it) it.q++; else cart.push({ id: id, q: 1 });
    save(); updateCart();
    if (btn) { btn.textContent = '✓'; btn.classList.add('added'); setTimeout(function () { btn.textContent = '+'; btn.classList.remove('added'); }, 1000); }
    toast(P(id).name + ' added to cart');
  }
  window.__alm_add = add;
  function chg(id, d) { var it = find(id); if (!it) return; it.q += d; if (it.q < 1) cart = cart.filter(function (i) { return i.id !== id; }); save(); updateCart(); }

  function updateCart() {
    var n = cart.reduce(function (a, i) { return a + i.q; }, 0);
    document.getElementById('cc').textContent = n;
    var box = document.getElementById('items');
    if (!cart.length) { box.innerHTML = '<div class="empty">Your cart is empty — <a href="shop.html">visit the shop</a>.</div>'; }
    else {
      box.innerHTML = cart.map(function (i) {
        var p = P(i.id);
        return '<div class="line"><div class="ic" style="background:var(' + p.tint + ')"><img src="' + img(i.id, 120) + '" alt=""></div>' +
          '<div class="n"><b>' + p.name + '</b><span>$' + p.price.toFixed(2) + ' · ' + p.unit + '</span></div>' +
          '<div class="qty"><button data-id="' + i.id + '" data-d="-1" aria-label="Decrease">–</button><span>' + i.q + '</span><button data-id="' + i.id + '" data-d="1" aria-label="Increase">+</button></div></div>';
      }).join('');
      box.querySelectorAll('.qty button').forEach(function (b) { b.addEventListener('click', function () { chg(b.dataset.id, parseInt(b.dataset.d, 10)); }); });
    }
    document.getElementById('sub').textContent = '$' + cart.reduce(function (a, i) { return a + P(i.id).price * i.q; }, 0).toFixed(2);
  }
  function openCart() { document.getElementById('ov').classList.add('open'); document.getElementById('dw').classList.add('open'); }
  function closeCart() { document.getElementById('ov').classList.remove('open'); document.getElementById('dw').classList.remove('open'); }
  function checkout() { if (!cart.length) { toast('Your cart is empty.'); return; } closeCart(); toast('Checkout coming soon — message us to place your order!'); }
  var tt; function toast(m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('show'); }, 2400); }

  /* simple FAQ accordion + contact form (demo) */
  function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () { q.parentElement.classList.toggle('open'); });
    });
  }
  function initContactForm() {
    var f = document.getElementById('contactForm'); if (!f) return;
    f.addEventListener('submit', function (e) { e.preventDefault(); f.reset(); toast('Thanks! We’ll be in touch about your DMV order soon.'); });
  }

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCart(); });
  document.addEventListener('DOMContentLoaded', function () {
    injectHeader(); injectFooter(); injectCart();
    renderInto('featured', PRODUCTS.slice(0, 4));   // home featured
    initShopFilter();                               // shop page
    initFAQ(); initContactForm();
    updateCart();
  });
})();
