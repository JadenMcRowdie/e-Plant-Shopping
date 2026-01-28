# Paradise Nursery - GitHub Deployment Guide

## Complete Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account
- Git installed on your computer
- Node.js installed (v14 or higher)

---

## Part 1: Local Setup and Testing

### Step 1: Organize Your Files
Ensure your project structure looks like this:
```
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.css
│   │   ├── ProductList.jsx
│   │   ├── ProductList.css
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── redux/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

### Step 2: Install Dependencies
```bash
cd paradise-nursery
npm install
```

### Step 3: Test Locally
```bash
npm start
```
Your app should open at `http://localhost:3000`

**Test these features:**
- ✓ Landing page displays with background image
- ✓ "Get Started" button navigates to products
- ✓ All 24 plants display in 4 categories
- ✓ "Add to Cart" buttons work and disable after adding
- ✓ Cart icon shows item count
- ✓ Shopping cart displays all items
- ✓ Quantity increase/decrease buttons work
- ✓ Delete button removes items
- ✓ Total cost calculates correctly
- ✓ "Continue Shopping" returns to products
- ✓ "Checkout" shows "Coming Soon" message

---

## Part 2: GitHub Repository Setup

### Method A: Using GitHub Web Interface (Easier)

1. **Create New Repository**
   - Go to https://github.com
   - Click the "+" icon → "New repository"
   - Repository name: `paradise-nursery`
   - Description: "Paradise Nursery - Premium Houseplants Shopping Application"
   - Choose "Public"
   - **Do NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Upload Files**
   - On the repository page, click "uploading an existing file"
   - Drag and drop ALL your project folders and files
   - Or use "choose your files" to select them
   - Add commit message: "Initial commit: Paradise Nursery application"
   - Click "Commit changes"

### Method B: Using Git Command Line

```bash
# Navigate to your project directory
cd paradise-nursery

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Paradise Nursery application"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/paradise-nursery.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 3: GitHub Pages Deployment

### Step 1: Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these lines to your `package.json`:

```json
{
  "name": "paradise-nursery",
  "version": "1.0.0",
  "homepage": "https://YOUR-USERNAME.github.io/paradise-nursery",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build your React app
2. Create a `gh-pages` branch
3. Push the build to that branch
4. Deploy your site

### Step 4: Enable GitHub Pages (if not automatic)
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", ensure `gh-pages` branch is selected
5. Click "Save" if needed

### Step 5: Wait and Access
- Wait 2-3 minutes for deployment to complete
- Your site will be live at: `https://YOUR-USERNAME.github.io/paradise-nursery/`

---

## Part 4: Getting URLs for Submission

After your repository is live, get the URLs for each file:

### Task 1: README.md URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/README.md
```

### Task 2: AboutUs.jsx URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/AboutUs.jsx
```

### Task 3: App.css URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.css
```

### Task 4: App.jsx URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.jsx
```

### Task 5: CartSlice.jsx URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/redux/CartSlice.jsx
```

### Task 6: ProductList.jsx URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/ProductList.jsx
```

### Task 7: CartItem.jsx URL
```
https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/CartItem.jsx
```

---

## Part 5: Verification Checklist

Before submitting, verify each requirement:

### Task 1: README.md (2 points)
- ✓ Contains project name "Paradise Nursery"
- ✓ Contains project description
- ✓ Contains setup instructions

### Task 2: AboutUs.jsx (1 point)
- ✓ Contains company details
- ✓ Contains company description
- ✓ Displays company name

### Task 3: App.css (1 point)
- ✓ Contains background image styling
- ✓ Background image URL present
- ✓ Styling for landing page

### Task 4: App.jsx (3 points)
- ✓ Paradise Nursery landing page
- ✓ Company name displayed
- ✓ "Get Started" button present
- ✓ Button links to product page

### Task 5: CartSlice.jsx (4 points)
- ✓ Redux Toolkit slice created
- ✓ addToCart action
- ✓ removeFromCart action
- ✓ incrementQuantity action
- ✓ decrementQuantity action
- ✓ State management implemented

### Task 6: ProductList.jsx (16 points)
- ✓ Displays 24 plants (6+ per category)
- ✓ Plants grouped in 4 categories
- ✓ Each plant has thumbnail, name, price
- ✓ "Add to Cart" buttons present
- ✓ Buttons add products to cart
- ✓ Buttons disable after adding
- ✓ Cart icon count increments
- ✓ Navbar with Home, Plants, Cart links
- ✓ Cart icon shows total items dynamically

### Task 7: CartItem.jsx (23 points)
- ✓ Displays shopping cart page
- ✓ Shows total cart amount
- ✓ Shows total cost for each plant
- ✓ Each item shows thumbnail
- ✓ Each item shows name
- ✓ Each item shows unit price
- ✓ Increase button present and working
- ✓ Decrease button present and working
- ✓ Quantity updates correctly
- ✓ Delete button for each item
- ✓ Delete removes item from cart
- ✓ Checkout button shows "Coming Soon"
- ✓ Continue Shopping button present
- ✓ Continue Shopping links to product page

---

## Troubleshooting

### Issue: npm install fails
**Solution:** Make sure Node.js is installed. Run `node --version` to check.

### Issue: Deploy fails
**Solution:** 
1. Make sure you're in the project directory
2. Run `npm install gh-pages --save-dev` again
3. Check that `homepage` URL in package.json is correct
4. Try `npm run build` first to see if there are any errors

### Issue: Page shows 404 after deploy
**Solution:**
1. Wait 3-5 minutes
2. Check Settings → Pages is enabled
3. Verify the `gh-pages` branch exists
4. Clear browser cache
5. Try accessing in incognito/private mode

### Issue: Images not loading
**Solution:** Images use external URLs from Unsplash, which should work. Check your internet connection.

### Issue: Cart not working
**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify Redux store is configured correctly
4. Make sure all imports are correct

---

## Making Updates

To update your deployed site after making changes:

```bash
# Make your changes to the code

# Test locally
npm start

# If everything works, deploy
git add .
git commit -m "Description of your changes"
git push origin main
npm run deploy
```

Wait 2-3 minutes for changes to appear on the live site.

---

## Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Make sure all dependencies are installed
4. Review the GitHub Pages documentation: https://docs.github.com/en/pages

---

**Congratulations!** Your Paradise Nursery application should now be live on GitHub Pages! 🎉
