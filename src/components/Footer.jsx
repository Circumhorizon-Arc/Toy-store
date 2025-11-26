import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">W</div>
                            <span className="text-xl font-bold text-white">WonderToys</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Making childhood magical with our premium collection of toys. Safe, educational, and fun!
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-primary-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Categories</h3>
                        <ul className="space-y-4">
                            <li><Link to="/shop?category=Soft Toys" className="hover:text-white transition-colors">Soft Toys</Link></li>
                            <li><Link to="/shop?category=Action Figures" className="hover:text-white transition-colors">Action Figures</Link></li>
                            <li><Link to="/shop?category=Educational" className="hover:text-white transition-colors">Educational</Link></li>
                            <li><Link to="/shop?category=Baby Toys" className="hover:text-white transition-colors">Baby Toys</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>123 Toy Street, Fun City, FC 12345</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>hello@wondertoys.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} WonderToys. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
