import { motion } from 'framer-motion';
import { Home, Building2, PencilRuler } from 'lucide-react';

const services = [
    {
        icon: <Home size={32} />,
        title: "Residential",
        description: "Curated living spaces that reflect your soul."
    },
    {
        icon: <Building2 size={32} />,
        title: "Commercial",
        description: "Office environments that inspire and empower."
    },
    {
        icon: <PencilRuler size={32} />,
        title: "Architecture",
        description: "Structural elegance meets functional design."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-luxury-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-2xl group hover:bg-white/10 transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="mb-6 text-luxury-gold group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-medium mb-4 text-white group-hover:text-luxury-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-400 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Border Glow Gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-transparent bg-gradient-to-br from-luxury-gold/20 to-transparent [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] pointer-events-none rounded-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
