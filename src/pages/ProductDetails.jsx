import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Product not found</h2>
                <Link to="/shop" className="btn-primary">Back to Shop</Link>
            </div>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/shop" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-8">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="aspect-square bg-white rounded-xl border border-slate-100 p-2 cursor-pointer hover:border-primary-500 transition-colors">
                                <img src={product.image} alt="Thumbnail" className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-6">
                        <span className="text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full text-sm">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-yellow-400">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="text-slate-700 font-bold ml-1">{product.rating}</span>
                            </div>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-500">{product.reviews} Reviews</span>
                        </div>
                        <p className="text-3xl font-bold text-primary-600">${product.price}</p>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-slate-700 w-24">Age Group:</span>
                            <span className="text-slate-600">{product.ageGroup}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-slate-700 w-24">Availability:</span>
                            <span className="text-green-600 font-medium flex items-center gap-1">
                                <ShieldCheck className="w-4 h-4" /> In Stock
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 btn-primary py-4 text-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="w-5 h-5" /> Add to Cart
                        </button>
                        <button className="p-4 rounded-full border-2 border-slate-200 text-slate-400 hover:border-red-500 hover:text-red-500 transition-colors">
                            <Heart className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3">
                            <Truck className="w-6 h-6 text-primary-500" />
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Free Delivery</p>
                                <p className="text-xs text-slate-500">On orders over $50</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-primary-500" />
                            <div>
                                <p className="font-bold text-slate-800 text-sm">2 Year Warranty</p>
                                <p className="text-xs text-slate-500">Full coverage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
