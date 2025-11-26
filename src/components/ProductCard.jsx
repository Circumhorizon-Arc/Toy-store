import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(product.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                    </span>
                )}
                <button
                    onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white/80 backdrop-blur-sm text-slate-400 hover:text-red-500 hover:bg-white'}`}
                >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
            </div>

            <div className="p-4">
                <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-slate-500 font-medium">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviews})</span>
                </div>

                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-slate-800 mb-1 hover:text-primary-600 transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>

                <p className="text-sm text-slate-500 mb-4">{product.category}</p>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-600">${product.price}</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 active:scale-95"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
