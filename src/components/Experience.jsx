import { motion } from 'framer-motion';

export default function Experience() {
    const text = "We craft spaces that transcend the ordinary. Every line, every texture, every shadow is a deliberate stroke of art. Aura is not just design; it is an emotion.";

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-luxury-charcoal py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center">
                    {text.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0.1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.02 }}
                            viewport={{ margin: "-100px" }}
                            className="text-3xl md:text-5xl lg:text-6xl font-heading text-neutral-200"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
