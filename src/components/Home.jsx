import React, { useEffect } from 'react'
import { useState } from 'react';
import { ProductContext } from './ProductContext';
import StoreNavigation from './StoreNavigation';
import ProductList from './ProductList';
import Banner from './Banner';

const Home = () => {
    
  return (
    
    <div class="bg-white">
        <StoreNavigation></StoreNavigation>
        <Banner></Banner>
        <ProductList></ProductList>

    </div>
  )
}

export default Home
