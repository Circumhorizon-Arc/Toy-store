import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee on all unused items in their original packaging. If you're not completely satisfied, simply contact our support team to initiate a return."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for 1-2 day delivery."
    },
    {
        question: "Are your toys safe for children?",
        answer: "Absolutely! Safety is our top priority. All our toys undergo rigorous testing and meet or exceed all ASTM and CPSC safety standards. We clearly label age recommendations for every product."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to select countries worldwide. International shipping times and rates vary by location and will be calculated at checkout."
    },
    {
        question: "Can I track my order?",
        answer: "Yes, once your order ships, you will receive a confirmation email with a tracking number so you can follow your package's journey."
    },
    {
        question: "Do you offer gift wrapping?",
        answer: "Yes! We offer premium gift wrapping services for a small fee. You can select this option and add a personalized message during checkout."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900 text-lg">{question}</span>
                <span className={`p-2 rounded-full ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                        <HelpCircle className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-slate-600">
                        Find answers to common questions about our products, shipping, and services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={idx === openIndex}
                            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
                    <p className="text-slate-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <a href="/contact" className="btn-primary inline-flex items-center">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
