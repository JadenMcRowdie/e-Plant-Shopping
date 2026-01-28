import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
