// ============================================================
//  PIZZA KING — CART  (cart.js)
// ============================================================

const Cart = (() => {

let items = []; // [{ id, name, price, qty }]

// ── Persist ──────────────────────────────────────────────
function save() {
try { localStorage.setItem(‘pk_cart’, JSON.stringify(items)); } catch(e) {}
}
function load() {
try { const d = localStorage.getItem(‘pk_cart’); if (d) items = JSON.parse(d); } catch(e) { items = []; }
}

// ── Core API ─────────────────────────────────────────────

// Set an item to an exact qty (used by menu cards)
function setItem(id, name, price, qty) {
const idx = items.findIndex(i => i.id === id);
if (qty <= 0) {
if (idx !== -1) items.splice(idx, 1);
} else {
if (idx !== -1) {
items[idx].qty = qty;
items[idx].price = price; // price may change if size changes
} else {
items.push({ id, name, price, qty });
}
}
save();
render();
}

// Used by cart drawer +/- buttons
function updateQty(id, delta) {
const item = items.find(i => i.id === id);
if (!item) return;
const newQty = item.qty + delta;
setItem(id, item.name, item.price, newQty);
}

function clear() {
items = [];
save();
render();
}

function total() { return items.reduce((s, i) => s + i.price * i.qty, 0); }
function count() { return items.reduce((s, i) => s + i.qty, 0); }

// ── WhatsApp ──────────────────────────────────────────────
function sendToWhatsApp() {
if (items.length === 0) { alert(‘Your cart is empty! Add some items first.’); return; }
const note = document.getElementById(‘cart-note-input’)?.value || ‘’;
let msg = SITE.whatsappMsg + ‘*🛒 My Order:*\n’;
items.forEach(i => { msg += `• ${i.name} x${i.qty} = ₹${i.price * i.qty}\n`; });
msg += `\n*Total: ₹${total()}*`;
if (note.trim()) msg += `\n\n📝 Note: ${note.trim()}`;
msg += ’\n\n📍 Delivery Address: ’;
const encoded = encodeURIComponent(msg);
// Send to both numbers — open first immediately, second after short delay
window.open(`https://wa.me/${SITE.whatsapp}?text=${encoded}`, ‘_blank’);
setTimeout(() => {
window.open(`https://wa.me/${SITE.whatsapp2}?text=${encoded}`, ‘_blank’);
}, 800);
}

// ── Render drawer ─────────────────────────────────────────
function render() {
// Badge
const badge = document.querySelector(’.cart-badge’);
if (badge) { badge.textContent = count(); badge.classList.toggle(‘show’, count() > 0); }

```
// Body
const body = document.getElementById('cart-body');
if (!body) return;
if (items.length === 0) {
  body.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Your cart is empty</p><small>Tap − 0 + on any item to add it!</small></div>`;
} else {
  body.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">₹${item.price} × ${item.qty} = <strong>₹${item.price * item.qty}</strong></div>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" onclick="Cart.updateQty('${item.id}',-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="Cart.updateQty('${item.id}',1)">+</button>
      </div>
    </div>`).join('');
}

// Total
const tot = document.getElementById('cart-total-val');
if (tot) tot.textContent = `₹${total()}`;
```

}

// ── Drawer open/close ─────────────────────────────────────
function open() {
document.getElementById(‘cart-drawer’)?.classList.add(‘open’);
document.getElementById(‘cart-overlay’)?.classList.add(‘open’);
document.body.style.overflow = ‘hidden’;
}
function close() {
document.getElementById(‘cart-drawer’)?.classList.remove(‘open’);
document.getElementById(‘cart-overlay’)?.classList.remove(‘open’);
document.body.style.overflow = ‘’;
}

function init() { load(); render(); }

return { setItem, updateQty, clear, total, count, sendToWhatsApp, open, close, render, init };

})();