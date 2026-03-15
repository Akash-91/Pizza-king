# 🍕 Pizza King Website

**Live site:** https://akash-91.github.io/Pizza-king

---

## 📁 Project Structure

```
Pizza-king/
├── index.html      ← Website shell (don't need to edit)
├── style.css       ← All styles (edit to change look/feel)
├── data.js         ← ✅ EDIT THIS to update menu, prices, hours, info
├── cart.js         ← Cart logic & WhatsApp order builder (don't need to edit)
├── images/         ← Upload your food photos here
│   ├── pizza.jpg
│   ├── burger.jpg
│   ├── chinese.jpg
│   ├── drinks.jpg
│   └── wraps.jpg
└── README.md
```

---

## 🖥️ Open in IntelliJ IDEA

1. **Clone the repo:**
   ```
   git clone https://github.com/Akash-91/Pizza-king.git
   ```
2. **Open in IntelliJ:** File → Open → select the `Pizza-king` folder
3. **Preview locally:** Right-click `index.html` → Open In → Browser
   - Or install the **Live Server** plugin for auto-refresh on save

---

## ✏️ How to Update Content (edit data.js only)

### Change a price
```js
{ name: "Veg Burger", price: 60 }
// just change 60 to the new price
```

### Add a new menu item
Find the right section and add a line:
```js
{ name: "New Item", price: 99 },
```

### Change opening hours
```js
hours: [
  { day: "Monday – Friday", time: "10:00 AM – 10:00 PM", open: true },
]
```

### Add gallery photos
1. Upload your photo to the `images/` folder
2. Update `data.js`:
```js
gallery: [
  { src: "images/myphoto.jpg", label: "My Food", tall: true, emoji: "🍕" },
]
```
> If the image is missing, the emoji shows as a fallback automatically.

### Change phone / WhatsApp number
```js
phone1:   "9760110526",
phone2:   "9557657708",
whatsapp: "919760110526",  // country code + number, no +
```

---

## 🛒 Cart & WhatsApp Ordering

- Every menu item has a **+** button
- Customer taps **+** to add items → cart fills up
- Tap the **🛒 Cart** button in the navbar to review
- Add a note (e.g. delivery address, special requests)
- Tap **Send Order on WhatsApp** → WhatsApp opens with a formatted order message sent to your number

---

## 🚀 Deploy Changes via GitHub

### Option A — Edit directly on GitHub (quickest)
1. Go to https://github.com/Akash-91/Pizza-king
2. Click `data.js` → click the ✏️ pencil icon
3. Make changes → click **Commit changes**
4. Wait ~1 min → site updates live!

### Option B — Edit in IntelliJ and push
```bash
git add .
git commit -m "Updated menu prices"
git push
```

---

## 🌐 GitHub Pages Setup (one-time)
1. Go to repo **Settings** → **Pages**
2. Branch: `main`, Folder: `/ (root)` → **Save**
3. Site goes live at: `https://akash-91.github.io/Pizza-king`

---

## 📸 Adding Real Food Photos

1. Take a photo → name it (e.g. `pizza.jpg`, `burger.jpg`)
2. In GitHub: **Add file** → **Upload files** → upload to `images/` folder
3. In `data.js`, make sure `src` matches the filename exactly:
```js
{ src: "images/pizza.jpg", label: "Signature Pizzas", tall: true, emoji: "🍕" }
```
