# Paradise Nursery Shopping Application

## Project Name
**Paradise Nursery**

## Description
Paradise Nursery is a premium houseplants shopping application where customers can browse a curated collection of extraordinary houseplants and purchase them online. The application features an elegant, nature-inspired design that transforms the online shopping experience.

## Project Overview
Welcome to Paradise Nursery, where nature meets nurture. We cultivate extraordinary houseplants that transform living spaces into vibrant sanctuaries. Each plant is carefully selected and tended, ready to bring life, color, and tranquility to your home.

## Key Features
- **Landing Page**: Beautiful hero section with company information and call-to-action
- **Product Catalog**: Browse 8+ houseplants organized in 4+ categories
- **Shopping Cart**: Full cart management with Redux state management
- **Responsive Design**: Works seamlessly across all devices
- **Real-time Updates**: Dynamic cart count and total calculations

## Technology Stack
- React 18
- Redux Toolkit
- React Router
- CSS3 with animations
- GitHub Pages for deployment

## Categories
1. Tropical Beauties
2. Air Purifiers
3. Easy Care Plants
4. Succulents

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/yourusername/paradise-nursery.git
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

### GitHub Pages Deployment
1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your application will be live at: `https://yourusername.github.io/paradise-nursery/`

## Project Structure
```
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Features Implementation

### Landing Page (AboutUs.jsx)
- Company name and logo
- Background image with overlay
- Company description
- "Get Started" button linking to product page

### Product Listing (ProductList.jsx)
- Display 6+ plants per category
- 3+ plant categories
- Thumbnail images, names, and prices
- "Add to Cart" buttons that disable after adding
- Navigation bar with cart icon
- Dynamic cart count

### Shopping Cart (CartItem.jsx)
- Display all cart items with thumbnails
- Unit price and total cost per item
- Increase/decrease quantity buttons
- Delete button for each item
- Total cart amount
- Continue Shopping button
- Checkout button (Coming Soon)

### State Management (CartSlice.jsx)
- Redux Toolkit slice for cart operations
- Add to cart functionality
- Update quantity (increase/decrease)
- Remove from cart
- Calculate totals

## Author
Created for web development final project

## License
MIT License

## Acknowledgments
- Plant images from Unsplash
- Icons from Lucide
- Fonts from Google Fonts

---

**Last Updated**: January 2026
