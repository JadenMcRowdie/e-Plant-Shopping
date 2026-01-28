import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, selectTotalQuantity } from '../redux/CartSlice';
import './ProductList.css';

// Plant data organized by categories
const plantsData = [
  // Tropical Beauties
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 45,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },
  {
    id: 2,
    name: 'Bird of Paradise',
    price: 65,
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    price: 55,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },
  {
    id: 4,
    name: 'Philodendron Pink Princess',
    price: 85,
    image: 'https://images.unsplash.com/photo-1597689879283-8f6ff9d46b23?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },
  {
    id: 5,
    name: 'Calathea Orbifolia',
    price: 42,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },
  {
    id: 6,
    name: 'Alocasia Polly',
    price: 48,
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400&h=400&fit=crop',
    category: 'Tropical Beauties',
  },

  // Air Purifiers
  {
    id: 7,
    name: 'Snake Plant',
    price: 28,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },
  {
    id: 8,
    name: 'Peace Lily',
    price: 32,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },
  {
    id: 9,
    name: 'Spider Plant',
    price: 22,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },
  {
    id: 10,
    name: 'Boston Fern',
    price: 35,
    image: 'https://images.unsplash.com/photo-1585735273441-fbb00cbbe0f1?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },
  {
    id: 11,
    name: 'Rubber Plant',
    price: 38,
    image: 'https://images.unsplash.com/photo-1595254037971-85b9dd6f8c1f?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },
  {
    id: 12,
    name: 'Dracaena',
    price: 40,
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400&h=400&fit=crop',
    category: 'Air Purifiers',
  },

  // Easy Care
  {
    id: 13,
    name: 'Pothos Golden',
    price: 22,
    image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },
  {
    id: 14,
    name: 'ZZ Plant',
    price: 38,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },
  {
    id: 15,
    name: 'Chinese Evergreen',
    price: 35,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },
  {
    id: 16,
    name: 'Cast Iron Plant',
    price: 30,
    image: 'https://images.unsplash.com/photo-1604334203832-4c951c03e8dc?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },
  {
    id: 17,
    name: 'Heartleaf Philodendron',
    price: 25,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015faf4?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },
  {
    id: 18,
    name: 'Ivy',
    price: 20,
    image: 'https://images.unsplash.com/photo-1586165368502-7f4b2c3e9654?w=400&h=400&fit=crop',
    category: 'Easy Care',
  },

  // Succulents
  {
    id: 19,
    name: 'Jade Plant',
    price: 18,
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 20,
    name: 'Aloe Vera',
    price: 24,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 21,
    name: 'Echeveria',
    price: 15,
    image: 'https://images.unsplash.com/photo-1551893478-d726a8f5cc93?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 22,
    name: 'Haworthia',
    price: 16,
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 23,
    name: 'String of Pearls',
    price: 28,
    image: 'https://images.unsplash.com/photo-1619462217884-e0c7dc4e9dde?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 24,
    name: 'Burro\'s Tail',
    price: 22,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
];

// Group plants by category
const groupedPlants = plantsData.reduce((acc, plant) => {
  if (!acc[plant.category]) {
    acc[plant.category] = [];
  }
  acc[plant.category].push(plant);
  return acc;
}, {});

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuantity = useSelector(selectTotalQuantity);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    
    // Show visual feedback
    setAddedItems(prev => new Set([...prev, plant.id]));
    
    // Remove feedback after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(plant.id);
        return newSet;
      });
    }, 2000);
  };

  const isItemAdded = (plantId) => {
    return addedItems.has(plantId);
  };

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => navigate('/')}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#2d5016" 
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span className="navbar-brand">Paradise Nursery</span>
          </div>

          {/* Nav Links */}
          <div className="navbar-links">
            <button className="nav-link" onClick={() => navigate('/')}>Home</button>
            <button className="nav-link active">Plants</button>
            <button className="nav-link cart-link" onClick={() => navigate('/cart')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="header-section">
          <h1 className="page-title">Our Plant Collection</h1>
          <p className="page-subtitle">
            Handpicked houseplants to bring life and beauty into your space
          </p>
        </div>

        {/* Categories */}
        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            
            <div className="plants-grid">
              {plants.map((plant, index) => (
                <div
                  key={plant.id}
                  className="plant-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="plant-image-container">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="plant-image"
                    />
                  </div>
                  
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price}</p>
                    
                    <button
                      className={`add-to-cart-btn ${isItemAdded(plant.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isItemAdded(plant.id)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                      </svg>
                      {isItemAdded(plant.id) ? 'Added to Cart!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
