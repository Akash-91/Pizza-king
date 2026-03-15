// ============================================================
//  PIZZA KING — CART  (cart.js)
//  Handles: add/remove/update items, drawer UI, WhatsApp order
// ============================================================

const Cart = (() => {

  // ── State ──────────────────────────────────────────────
  let items = [];   // [{ id, name, price, qty, size? }]

  // ── Helpers ────────────────────────────────────────────
  const genId = (name, size) => (name + (size || '')).replace(/\s+/g, '_').toLowerCase();

  function save() {
    try { localStorage.setItem('pk_cart', JSON.stringify(items)); } catch(e) {}
  }

  function load() {
    try {
      const d = localStorage.getItem('pk_cart');
      if (d) items = JSON.parse(d);
    } catch(e) { items = []; }
  }

  // ── Public API ─────────────────────────────────────────

  function add(name, price, size) {
    const id = genId(name, size);
    const existing = items.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      items.push({ id, name: size ? `${name} (${size})` : name, price, qty: 1 });
    }
    save();
    render();
    animateBadge();
  }

  function updateQty(id, delta) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) items = items.filter(i => i.id !== id);
    save();
    render();
  }

  function clear() {
    items = [];
    save();
    render();
  }

  function total() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function count() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  // ── WhatsApp order message ──────────────────────────────

  function buildOrderMsg(note) {
    if (items.length === 0) return '';
    let msg = SITE.whatsappMsg;
    msg += '*🛒 My Order:*\n';
    items.forEach(item => {
      msg += `• ${item.name} x${item.qty} = ₹${item.price * item.qty}\n`;
    });
    msg += `\n*Total: ₹${total()}*`;
    if (note && note.trim()) {
      msg += `\n\n📝 Note: ${note.trim()}`;
    }
    msg += '\n\n📍 Delivery Address: ';
    return msg;
  }

  function sendToWhatsApp() {
    if (items.length === 0) {
      alert('Your cart is empty! Please add some items first.');
      return;
    }
    const note = document.getElementById('cart-note-input')?.value || '';
    const msg = buildOrderMsg(note);
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  // ── DOM Rendering ──────────────────────────────────────

  function animateBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    badge.textContent = count();
    badge.classList.toggle('show', count() > 0);
    badge.classList.remove('pop');
    void badge.offsetWidth;
    badge.classList.add('pop');
  }

  function render() {
    // Update badge
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      badge.textContent = count();
      badge.classList.toggle('show', count() > 0);
    }

    // Render drawer body
    const body = document.getElementById('cart-body');
    if (!body) return;

    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <span>🛒</span>
          <p>Your cart is empty</p>
          <small style="color:var(--muted);font-size:0.8rem">Tap the + button next to any item to add it!</small>
        </div>`;
    } else {
      body.innerHTML = items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item__info">
            <div class="cart-item__name">${item.name}</div>
            <div class="cart-item__price">₹${item.price} each · Subtotal: ₹${item.price * item.qty}</div>
          </div>
          <div class="cart-item__qty">
            <button class="qty-btn" onclick="Cart.updateQty('${item.id}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="Cart.updateQty('${item.id}', 1)">+</button>
          </div>
        </div>`).join('');
    }

    // Update total
    const totalEl = document.getElementById('cart-total-val');
    if (totalEl) totalEl.textContent = `₹${total()}`;
  }

  // ── Drawer open/close ──────────────────────────────────

  function open() {
    document.getElementById('cart-drawer')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('cart-drawer')?.classList.remove('open');
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Init ───────────────────────────────────────────────

  function init() {
    load();
    render();
  }

  return { add, updateQty, clear, total, count, sendToWhatsApp, open, close, render, init };

})();
