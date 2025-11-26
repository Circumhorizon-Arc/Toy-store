import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/products';

const Shop = () => {
    const { products } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
    const [priceRange, setPriceRange] = useState(100);
    const [searchQuery, setSearchQuery] = useState('');

    // Update category when URL params change
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        } else {
            setSelectedCategory('All');
        }
    }, [searchParams]);

    useEffect(() => {
        let result = products;

        // Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Filter by Price
        result = result.filter(p => p.price <= priceRange);

        // Filter by Search
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilteredProducts(result);
    }, [selectedCategory, priceRange, searchQuery, products]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="lg:w-1/4 space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                        <div className="flex items-center gap-2 mb-6 text-slate-800">
                            <Filter className="w-5 h-5" />
                            <h2 className="font-bold text-lg">Filters</h2>
                        </div>

                        {/* Search */}
                        <div className="mb-6">
                            <label className="text-sm font-medium text-slate-700 mb-2 block">Search</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search toys..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-6">
                            <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === 'All'}
                                        onChange={() => setSelectedCategory('All')}
                                        className="text-primary-600 focus:ring-primary-500"
                                    />
                                    <span className="text-slate-600">All Toys</span>
                                </label>
                                {categories.map(cat => (
                                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === cat.name}
                                            onChange={() => setSelectedCategory(cat.name)}
                                            className="text-primary-600 focus:ring-primary-500"
                                        />
                                        <span className="text-slate-600">{cat.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label className="text-sm font-medium text-slate-700 mb-2 block">
                                Max Price: <span className="text-primary-600 font-bold">${priceRange}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="lg:w-3/4">
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-slate-900">
                            {selectedCategory === 'All' ? 'All Toys' : selectedCategory}
                            <span className="text-sm font-normal text-slate-500 ml-2">({filteredProducts.length} items)</span>
                        </h1>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No toys found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory('All'); setPriceRange(200); setSearchQuery(''); }}
                                className="mt-4 text-primary-600 font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
