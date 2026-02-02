import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImageReveal() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const clipPath1 = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    const clipPath2 = useTransform(
        scrollYProgress,
        [0.3, 0.8],
        ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <section ref={ref} className="relative py-32 bg-luxury-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="text-sm uppercase tracking-[0.4em] text-luxury-gold mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Our Philosophy
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                            Design That
                            <span className="block text-luxury-gold italic font-light">Transcends Time</span>
                        </h2>

                        <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                            We believe that exceptional design is born from the perfect marriage of aesthetics and functionality.
                            Every space we create tells a unique story, reflecting the personality and aspirations of those who inhabit it.
                        </p>

                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Our approach combines timeless elegance with contemporary innovation, ensuring that each project
                            remains relevant and inspiring for years to come.
                        </p>

                        <motion.div
                            className="mt-12 flex items-center gap-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <div className="text-5xl font-heading font-bold text-luxury-gold mb-2">150+</div>
                                <div className="text-sm uppercase tracking-widest text-neutral-500">Projects</div>
                            </div>
                            <div>
                                <div className="text-5xl font-heading font-bold text-luxury-gold mb-2">25+</div>
                                <div className="text-sm uppercase tracking-widest text-neutral-500">Awards</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Reveals */}
                    <div className="relative h-[600px]">
                        <motion.div
                            style={{ clipPath: clipPath1 }}
                            className="absolute top-0 left-0 w-full h-[70%] rounded-2xl overflow-hidden shadow-luxury"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                                alt="Interior Design"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            style={{ clipPath: clipPath2 }}
                            className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-luxury"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
                                alt="Luxury Space"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
