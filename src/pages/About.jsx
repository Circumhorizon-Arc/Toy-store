import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 pb-16">
            {/* Hero Section */}
            <section className="relative bg-primary-50 py-20 mb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Our Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 leading-relaxed"
                        >
                            At WonderToys, we believe that play is the most important work of childhood.
                            Since 2020, we've been on a mission to spark imagination and joy in kids everywhere.
                        </motion.p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full translate-x-1/3 translate-y-1/3" />
            </section>

            {/* Mission & Values */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80"
                            alt="Kids playing"
                            className="rounded-3xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Do What We Do</h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            We curate toys that are not just fun, but also safe, educational, and durable.
                            We understand that every toy is a potential memory, a learning opportunity, and a companion.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { icon: Heart, text: "Passion for Play" },
                                { icon: Star, text: "Quality You Can Trust" },
                                { icon: Users, text: "Community Focused" },
                                { icon: Award, text: "Award Winning Selection" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50k+", label: "Happy Customers" },
                            { number: "1000+", label: "Products" },
                            { number: "4.9", label: "Average Rating" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">{stat.number}</div>
                                <div className="text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
