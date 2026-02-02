import { motion } from 'framer-motion';
import { Home, Building2, PencilRuler, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <Home size={40} />,
        title: "Residential Design",
        description: "Transform your living spaces into personalized sanctuaries that reflect your unique style and enhance daily living.",
        features: ["Custom Furniture", "Space Planning", "Material Selection"]
    },
    {
        icon: <Building2 size={40} />,
        title: "Commercial Spaces",
        description: "Create inspiring work environments that boost productivity, reflect brand identity, and impress clients.",
        features: ["Office Design", "Retail Spaces", "Hospitality"]
    },
    {
        icon: <PencilRuler size={40} />,
        title: "Architecture",
        description: "From concept to completion, we design structures that seamlessly blend form, function, and environmental harmony.",
        features: ["3D Visualization", "Structural Design", "Sustainable Solutions"]
    },
    {
        icon: <Sparkles size={40} />,
        title: "Luxury Styling",
        description: "Curate exquisite details and premium finishes that elevate your space to the pinnacle of sophistication.",
        features: ["Art Curation", "Lighting Design", "Textile Selection"]
    }
];

export default function ServicesEnhanced() {
    return (
        <section id="services" className="relative py-32 px-6 bg-luxury-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-gold opacity-30 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial-gold opacity-20 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                        What We Offer
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Comprehensive design solutions tailored to your vision and lifestyle.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="premium-card p-10 group hover:shadow-gold-glow transition-all duration-500"
                        >
                            <motion.div
                                className="mb-6 text-luxury-gold"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {service.icon}
                            </motion.div>

                            <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-luxury-gold transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-neutral-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.div
                                className="mt-8 inline-flex items-center gap-2 text-luxury-gold text-sm uppercase tracking-widest font-heading font-bold group-hover:gap-4 transition-all"
                                whileHover={{ x: 5 }}
                            >
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
