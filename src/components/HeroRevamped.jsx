import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from './ui/SplitText';

export default function HeroRevamped() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-luxury-black z-10" />
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Floating Geometric Shapes */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 border border-luxury-gold/20 rotate-45 z-10"
                animate={{
                    y: [0, -30, 0],
                    rotate: [45, 55, 45],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-40 left-20 w-24 h-24 rounded-full border border-luxury-gold/30 z-10"
                animate={{
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-4 max-w-7xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-6 text-sm uppercase tracking-[0.4em] text-luxury-gold"
                >
                    Interior Design Studio
                </motion.div>

                <SplitText
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 leading-none"
                    delay={0.8}
                >
                    Crafting Spaces That Inspire
                </SplitText>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light"
                >
                    Where luxury meets functionality. We transform visions into breathtaking realities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <a
                        href="#works"
                        className="inline-block px-12 py-5 bg-luxury-gold text-luxury-black font-heading font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
                    >
                        View Our Work
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
            </motion.div>
        </section>
    );
}
