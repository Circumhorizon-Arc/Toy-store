import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/products';

const Home = () => {
    const { products } = useProducts();
    const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);
    const newArrivals = products.filter(p => p.isNew).slice(0, 4);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 overflow-hidden pt-10 lg:pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left z-10">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-bold shadow-sm mb-6"
                            >
                                🎉 New Collection Available
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
                            >
                                Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Magic</span> of Play
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
                            >
                                Explore our curated collection of premium toys that inspire creativity, learning, and endless fun for kids of all ages.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <Link to="/shop" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                                    Shop Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/about" className="btn-secondary w-full sm:w-auto bg-white text-slate-700 hover:bg-slate-50">
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex-1 relative">
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80"
                                    alt="Happy Kid"
                                    className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
                                />
                            </motion.div>
                            {/* Decorative blobs */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary-200/30 to-secondary-200/30 blur-3xl rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Safe & Non-Toxic", desc: "Certified safe materials for your peace of mind." },
                        { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders over $50." },
                        { icon: RotateCcw, title: "Easy Returns", desc: "30-day money back guarantee." },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                            <p className="text-slate-500">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop by Category</h2>
                    <p className="text-slate-600">Find the perfect toy for every interest</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link to={`/shop?category=${cat.name}`} key={cat.id}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`${cat.color} rounded-2xl p-6 text-center cursor-pointer h-full flex flex-col items-center justify-center group`}
                            >
                                <div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-slate-800 group-hover:text-primary-600 transition-colors">{cat.name}</h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Best Sellers</h2>
                        <p className="text-slate-600">Loved by kids and parents alike</p>
                    </div>
                    <Link to="/shop" className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Summer Sale is Live!</h2>
                        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Get up to 50% off on selected outdoor toys and games. Limited time offer.</p>
                        <Link to="/shop" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors shadow-lg">
                            Shop Sale
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
