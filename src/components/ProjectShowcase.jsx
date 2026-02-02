import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Skyline Penthouse",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        description: "A modern penthouse with panoramic city views and contemporary design."
    },
    {
        id: 2,
        title: "Ocean View Villa",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        description: "Coastal elegance meets modern luxury in this stunning villa."
    },
    {
        id: 3,
        title: "Tech Startup HQ",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        description: "An innovative workspace designed to inspire creativity and collaboration."
    },
    {
        id: 4,
        title: "Boutique Hotel",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
        description: "Intimate luxury with bespoke design elements throughout."
    },
    {
        id: 5,
        title: "Urban Loft",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
        description: "Industrial chic meets refined comfort in this converted warehouse."
    },
    {
        id: 6,
        title: "Corporate Office",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        description: "Professional elegance with state-of-the-art amenities."
    },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectShowcase() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="py-32 px-6 bg-luxury-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Explore our portfolio of exceptional spaces that redefine luxury living and working.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-8 py-3 rounded-full font-heading uppercase tracking-widest text-sm transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-luxury-gold text-luxury-black'
                                    : 'bg-white/5 text-white hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <motion.div
                                        className="text-xs uppercase tracking-widest text-luxury-gold mb-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.category}
                                    </motion.div>
                                    <h3 className="text-2xl font-heading font-bold text-white">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="relative max-w-4xl w-full bg-luxury-charcoal rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <X className="text-white" />
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-96 object-cover"
                            />

                            <div className="p-12">
                                <div className="text-xs uppercase tracking-widest text-luxury-gold mb-4">
                                    {selectedProject.category}
                                </div>
                                <h3 className="text-4xl font-heading font-bold mb-6">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-lg text-neutral-400 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
