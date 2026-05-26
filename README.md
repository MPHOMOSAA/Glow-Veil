# Glow Veil — Luxury Skincare Website

> *"Reveal the glow beneath the veil."*

Powered by **Maphake Automation**

---

## 📁 What to Upload to GitHub

```
your-repo/
├── index.html        ← The entire website (CSS + JS all inline)
└── images/
    ├── logo.png
    ├── serum_model.png
    ├── serum_product.png
    ├── face_cream_model.png
    ├── face_cream_product.png
    ├── face_cream_applying.png
    ├── face_cream_lifestyle.png
    ├── cleanser_model.png
    ├── cleanser_product.png
    ├── cleanser_lifestyle.png
    ├── cleanser_stack.png
    ├── cleanser_editorial.png
    ├── body_butter_model.png
    ├── body_butter_product.png
    ├── body_butter_lifestyle.png
    ├── body_butter_open.png
    └── all_products.png
```

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### Step 1 — Create Repository
1. Go to **github.com** → Click **New** (green button)
2. Repository name: `glowveil` (or any name)
3. Set to **Public** ✅
4. Click **Create repository**

### Step 2 — Upload Files
1. In your new repo, click **uploading an existing file**
2. **First:** drag and drop `index.html` → Click **Commit changes**
3. Click **Add file → Upload files** again
4. Create the `images` folder by dragging ALL image files at once
   - GitHub will detect the `images/` folder from the zip structure
   
**OR use the zip method:**
1. Download the `glowveil-github.zip`
2. Unzip it on your computer
3. Drag the entire unzipped folder contents into GitHub

### Step 3 — Enable GitHub Pages
1. Go to **Settings** tab in your repo
2. Click **Pages** in the left sidebar
3. Under **Source** → Select **Deploy from a branch**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes
7. Your site is live at: `https://YOUR-USERNAME.github.io/glowveil/`

---

## ✅ Why This Structure Works

The `index.html` has all CSS and JavaScript **inlined** (no external files needed).
Only the `images/` folder needs to be alongside `index.html`.

This is the most reliable setup for GitHub Pages.

