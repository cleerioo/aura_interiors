import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

const projects = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512918760532-3edbed13588e?auto=format&fit=crop&q=80&w=800"
];

function PortfolioItem({ src, index }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useTransform(x, [-300, 300], [-10, 10]);
    const mouseY = useTransform(y, [-300, 300], [-10, 10]);
    const transform = useMotionTemplate`rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;

    const handleMouseMove = (e) => {
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ transform, transformStyle: "preserve-3d" }}
            className={`relative group rounded-xl overflow-hidden mb-8 shadow-2xl ${index % 2 === 0 ? 'mt-0' : 'md:mt-16'}`}
        >
            <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={src}
                alt="Portfolio"
                className="w-full h-auto object-cover aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-heading tracking-widest border-b border-luxury-gold pb-1">VIEW PROJECT</span>
            </div>
        </motion.div>
    );
}

export default function Portfolio() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="works" className="py-32 px-6 bg-[#0f0f0f]" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-heading mb-20 text-center">Selected Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        {console.log('Rendering items')}
                        <PortfolioItem src={projects[0]} index={0} />
                        <PortfolioItem src={projects[1]} index={1} />
                    </div>
                    <div className="flex flex-col md:pt-20">
                        <PortfolioItem src={projects[2]} index={2} />
                        <PortfolioItem src={projects[3]} index={3} />
                    </div>
                    <div className="flex flex-col md:pt-40">
                        <PortfolioItem src={projects[4]} index={4} />
                        <PortfolioItem src={projects[5]} index={5} />
                    </div>
                </div>
            </div>
        </section>
    );
}
