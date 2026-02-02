import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
    const whatsappNumber = "918864045462"; // India country code + number
    const whatsappMessage = "Hi! I'm interested in your interior design services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer id="contact" className="relative min-h-screen bg-luxury-black flex flex-col justify-center items-center overflow-hidden px-6 pt-20">

            {/* Background Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[20vw] font-heading font-bold text-white/5 whitespace-nowrap select-none pointer-events-none z-0">
                AURA
            </div>

            <div className="relative z-10 w-full max-w-2xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading mb-6"
                >
                    Let's shape <span className="text-luxury-gold italic font-light">vision</span> together.
                </motion.h2>

                <p className="text-neutral-400 mb-12 font-light text-lg">
                    Ready to redefine your space? Reach out for a consultation.
                </p>

                {/* WhatsApp Contact Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-12 py-5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-heading font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <MessageCircle size={24} />
                        Contact on WhatsApp
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-neutral-500 text-sm mb-8">Or send us a message</p>

                    <form className="space-y-6 text-left">
                        <div className="group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none group-hover:border-luxury-gold transition-colors placeholder:text-neutral-600 text-white"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none group-hover:border-luxury-gold transition-colors placeholder:text-neutral-600 text-white"
                            />
                        </div>
                        <div className="group">
                            <textarea
                                placeholder="Tell us about your project..."
                                rows="3"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none group-hover:border-luxury-gold transition-colors placeholder:text-neutral-600 text-white resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center pt-10">
                            <MagneticButton className="!px-12 !py-5">
                                Send Message
                            </MagneticButton>
                        </div>
                    </form>
                </motion.div>
            </div>

            <div className="absolute bottom-10 w-full flex justify-between px-10 text-xs text-neutral-500 uppercase tracking-widest z-10">
                <div>© 2026 Aura Interiors</div>
                <div className="space-x-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Behance</a>
                </div>
            </div>
        </footer>
    );
}
