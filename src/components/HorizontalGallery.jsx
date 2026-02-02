import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Modern Penthouse",
        location: "Manhattan, NY",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 2,
        title: "Coastal Villa",
        location: "Malibu, CA",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 3,
        title: "Urban Loft",
        location: "Brooklyn, NY",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 4,
        title: "Minimalist Retreat",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 5,
        title: "Classic Residence",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200"
    },
];

export default function HorizontalGallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section id="works" ref={targetRef} className="relative h-[300vh] bg-luxury-charcoal">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative group min-w-[70vw] md:min-w-[50vw] h-[70vh] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                            >
                                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-luxury-gold uppercase tracking-widest">
                                    {project.location}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
