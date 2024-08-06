import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [userAuthenticated, setUserAuthenticated] = useState(() => {
        return localStorage.getItem('userAuthenticated') === 'true';
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const onSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // Increment the quantity if the product already exists in the cart
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Add new product to the cart
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                let productlisturl = 'https://fakestoreapi.com/products';
                
                if (selectedCategory !== 'All') {
                    productlisturl = `https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`;
                }

                const response = await fetch(productlisturl);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Could not load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const categoryList = await response.json();
                setCategories(['All', ...categoryList]);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Could not load categories. Please try again later.');
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Persist cart state to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('userAuthenticated', userAuthenticated.toString());
    }, [userAuthenticated]);

    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ProductContext.Provider value={{ 
            products, 
            categories, 
            selectedCategory, 
            onSelectCategory, 
            userAuthenticated, 
            setUserAuthenticated,
            cart,
            addToCart,
            cartItemCount,
            updateQuantity,
            removeFromCart
        }}>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                children
            )}
        </ProductContext.Provider>
    );
};
