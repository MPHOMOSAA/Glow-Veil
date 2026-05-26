# Glow Veil — Luxury Skincare Website

> *"Reveal the glow beneath the veil."*

A fully responsive, multi-page luxury skincare website for **Glow Veil** — a premium South African skincare brand based in Sandton, Johannesburg.

The AI assistant (Glow Guide) is **powered by Maphake Automation**.

---

## 📁 File Structure

```
glowveil/
├── index.html          ← Main website (all 7 pages)
├── css/
│   └── style.css       ← All styles, animations, responsive design
├── js/
│   └── script.js       ← Page transitions, AI chat, interactions
├── images/
│   ├── logo.png
│   ├── serum_model.png
│   ├── serum_product.png
│   ├── face_cream_model.png
│   ├── face_cream_product.png
│   ├── face_cream_applying.png
│   ├── face_cream_lifestyle.png
│   ├── cleanser_model.png
│   ├── cleanser_product.png
│   ├── cleanser_lifestyle.png
│   ├── cleanser_stack.png
│   ├── cleanser_editorial.png
│   ├── body_butter_model.png
│   ├── body_butter_product.png
│   ├── body_butter_lifestyle.png
│   ├── body_butter_open.png
│   └── all_products.png
└── README.md
```

---

## 🚀 GitHub Pages Deployment

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and click **New repository**
2. Name it: `glowveil` (or `glowveil-website`)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload Files
**Option A — Drag & Drop (easiest):**
1. Open your new repository on GitHub
2. Click **uploading an existing file**
3. Drag and drop the entire `glowveil` folder contents
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd glowveil
git init
git add .
git commit -m "Initial Glow Veil website launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/glowveil.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings**
2. Click **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/glowveil/`

---

## ✨ Features

- **7 Pages:** Home, About, Products, Gallery, Why Us, Glow Guide AI, Contact
- **Page Transitions:** Smooth panel wipe animation between pages
- **Mobile Responsive:** Fully optimised for all screen sizes
- **Glow Guide AI:** Claude-powered skincare assistant (Powered by Maphake Automation)
- **Floating Chat Widget:** Available on all pages
- **Scroll Reveal Animations:** Elements animate in on scroll
- **Sticky Navbar:** Transparent → cream glass on scroll
- **Gallery:** 15 product & lifestyle images with hover effects

---

## 🤖 AI Assistant — Glow Guide

Glow Guide is powered by the **Anthropic Claude API** via **Maphake Automation**.

The AI assistant helps visitors with:
- Product recommendations
- Skincare routines
- Brand information
- Any queries when Glow Veil is unreachable

**Note:** The AI API calls are made client-side. For production, consider adding a backend proxy to secure your API key.

---

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Warm Cream | `#FFF7EF` |
| Soft Beige | `#E8D6C3` |
| Blush Pink | `#F3C8C8` |
| Champagne Gold | `#D8B76A` |
| Deep Cocoa | `#3A2A24` |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Desktop (>1024px) | 4-column products, full grid |
| Tablet (768–1024px) | 2-column products, adjusted footer |
| Mobile (<768px) | Single column, hamburger menu |
| Small Mobile (<480px) | Optimised for 320px+ screens |

---

*Built by Maphake Automation — AI automation & web development agency.*
