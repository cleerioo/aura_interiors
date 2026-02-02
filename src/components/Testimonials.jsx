import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "Aura transformed our penthouse into a masterpiece. Their attention to detail and understanding of our vision was exceptional.",
        author: "Sarah Mitchell",
        role: "CEO, Tech Innovations",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        quote: "Working with Aura was an absolute pleasure. They created a space that perfectly balances luxury with functionality.",
        author: "Michael Chen",
        role: "Founder, Luxury Brands",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        quote: "The team's creativity and professionalism exceeded all expectations. Our office is now a source of inspiration for our entire team.",
        author: "Emma Rodriguez",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoPlay]);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setAutoPlay(false);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoPlay(false);
    };

    return (
        <section className="py-32 px-6 bg-luxury-charcoal overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Client <span className="text-luxury-gold italic font-light">Testimonials</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="mb-12">
                                <svg className="w-16 h-16 mx-auto text-luxury-gold/30 mb-8" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                                </svg>

                                <p className="text-2xl md:text-3xl font-light text-neutral-200 leading-relaxed mb-12 max-w-3xl mx-auto">
                                    "{testimonials[current].quote}"
                                </p>

                                <div className="flex items-center justify-center gap-6">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold"
                                    />
                                    <div className="text-left">
                                        <div className="font-heading font-bold text-lg text-white">
                                            {testimonials[current].author}
                                        </div>
                                        <div className="text-sm text-neutral-500 uppercase tracking-widest">
                                            {testimonials[current].role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center hover:bg-luxury-gold/10 transition-colors"
                        >
                            <ChevronLeft className="text-luxury-gold" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrent(index);
                                        setAutoPlay(false);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'w-12 bg-luxury-gold' : 'w-2 bg-neutral-600'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center hover:bg-luxury-gold/10 transition-colors"
                        >
                            <ChevronRight className="text-luxury-gold" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
