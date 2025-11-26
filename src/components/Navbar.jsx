import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                            W
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                            WonderToys
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
                        <Link to="/shop" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Shop</Link>
                        <Link to="/about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">About</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-slate-600 hover:text-primary-600 transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <Link to="/wishlist" className="text-slate-600 hover:text-secondary-500 transition-colors">
                            <Heart className="w-6 h-6" />
                        </Link>
                        <Link to="/cart" className="relative text-slate-600 hover:text-primary-600 transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-2 text-slate-600 hover:text-primary-600">
                                    <User className="w-6 h-6" />
                                    <span className="text-sm font-medium">{user.name}</span>
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all transform origin-top-right">
                                    {user.role === 'admin' && (
                                        <Link to="/admin" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Admin Dashboard</Link>
                                    )}
                                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="btn-primary py-2 px-4 text-sm">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            <Link to="/" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/shop" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                            <Link to="/cart" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                Cart ({cartCount})
                            </Link>
                            {user ? (
                                <>
                                    <div className="border-t border-slate-100 pt-4">
                                        <p className="text-sm text-slate-500 mb-2">Signed in as {user.name}</p>
                                        {user.role === 'admin' && (
                                            <Link to="/admin" className="block text-primary-600 font-medium mb-2" onClick={() => setIsMenuOpen(false)}>Admin Dashboard</Link>
                                        )}
                                        <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-red-600 font-medium">Logout</button>
                                    </div>
                                </>
                            ) : (
                                <Link to="/login" className="block w-full text-center btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>Login</Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
