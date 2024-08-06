import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';  // Corrected import
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const StoreNavigation = () => {
    const { categories, onSelectCategory, userAuthenticated, setUserAuthenticated, cartItemCount } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        setUserAuthenticated(false);
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-evenly items-center text-cyan-50">
                <li>
                    <a href="/home">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt="Company Logo"
                            src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
                            className="h-8 w-auto"
                        />
                    </a>
                </li>
                {categories.map((category, index) => (
                    <li key={index} className="mx-2">
                        <button
                            onClick={() => onSelectCategory(category)}
                            className="focus:outline-none hover:text-indigo-400"
                            aria-label={`Select category ${category}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
                <li className="relative">
                    <a href="/checkout" className="ml-4 hover:text-indigo-400 focus:outline-none" aria-label="View Cart">
                        <i className="fas fa-shopping-cart"></i>
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {cartItemCount}
                            </span>
                        )}
                    </a>
                </li>
                
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-blue-400">
                        <div class="flex flex-wrap items-center justify-center gap-4 cursor-pointer">    
                               <img src='https://readymadeui.com/team-1.webp' class="w-12 h-12 rounded-full" />
                               <p className='text-white'>Hello User</p>
                               </div>
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>
                    </div>
                    <MenuItems
                        as="div"  // Changed to 'div' as MenuItems should render as div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                    >
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="/support"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Support
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="/about"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    About author
                                </a>
                            </MenuItem>
                            {userAuthenticated && (
                                <MenuItem>
                                    <button
                                        onClick={handleSignOut}
                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign out
                                    </button>
                                </MenuItem>
                            )}
                        </div>
                    </MenuItems>
                </Menu>
            </ul>
        </nav>
    );
};

export default StoreNavigation;
