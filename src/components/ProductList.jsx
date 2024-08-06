import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = () => {
    const { products, addToCart } = useContext(ProductContext);

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
                >
                    <a>
                        <img
                            className="p-4 rounded-t-lg h-48 w-full object-contain"
                            src={product.image}
                            alt={product.title}
                        />
                    </a>
                    <div className="px-4 pb-5 flex flex-col flex-grow">
                        <a>
                            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white h-12 overflow-hidden">
                                {product.title}
                            </h5>
                        </a>
                        <div className="flex items-center mt-2 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {Array.from({ length: Math.floor(product.rating.rate) }).map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                {Array.from({ length: 5 - Math.floor(product.rating.rate) }).map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                {product.rating.rate}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            <button
                                onClick={() => addToCart(product)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
