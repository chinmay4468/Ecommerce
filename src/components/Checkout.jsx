import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import StoreNavigation from './StoreNavigation';

const Checkout = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal, setCartTotal } = useContext(ProductContext);

    const handleQuantityChange = (id, event) => {
        const quantity = parseInt(event.target.value, 10);
        updateQuantity(id, quantity);
    };

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <>
            <StoreNavigation></StoreNavigation>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h2 className="text-3xl font-bold text-center">Shopping Cart</h2>
            <div className="mt-6 grid gap-6">
                {cart.length === 0 ? (
                    <div className="text-center text-gray-500">Your cart is empty.</div>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                            <div className="flex items-center">
                                <img className="h-24 w-24 object-cover rounded" src={item.image} alt={item.title} />
                                <div className="ml-4">
                                    <div className="text-lg font-semibold">{item.title}</div>
                                    <div className="text-sm text-gray-500">Price: ${item.price}</div>
                                    <div className="text-sm text-gray-500">In stock</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e)}
                                    className="w-16 text-center border border-gray-300 rounded"
                                />
                                <div className="text-lg font-semibold ml-4">${item.price * item.quantity}</div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-600 hover:text-red-700 focus:outline-none mt-2 ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
                <div className="text-lg font-semibold text-right mt-4">
                    Subtotal: ${subtotal.toFixed(2)}
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                <a href="/payment" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                    Checkout
                </a>
                <a href="/home" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                    Continue Shopping
                </a>
            </div>
        </div>
        </>

    );
};

export default Checkout;
