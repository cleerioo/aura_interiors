import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2574"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 tracking-tighter mix-blend-difference"
                >
                    Redefining <br />
                    <span className="text-luxury-gold italic font-light">Luxury</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 10.8, delay: 0.8 }}
                >
                    <MagneticButton>
                        Explore Works
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
