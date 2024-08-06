import React from 'react'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { ProductProvider } from './components/ProductContext';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './components/Checkout';
import About from './components/About';
import Support from './components/Support';
import Payment from './components/Payment';

const App = () => {
  return (
    <ProductProvider>
    <Router>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
                <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            </Routes>
      </Router>
    </ProductProvider>
  )
}

export default App
