/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                luxury: {
                    black: '#0a0a0a',
                    gold: '#d4af37',
                    bronze: '#cd7f32',
                    charcoal: '#121212',
                    cream: '#f5f5dc',
                    darkGold: '#b8941e'
                }
            },
            fontFamily: {
                heading: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
                '11xl': ['12rem', { lineHeight: '1' }],
                '12xl': ['14rem', { lineHeight: '1' }],
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(to right, #0a0a0a, #121212)',
                'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8941e 100%)',
                'radial-gold': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            },
            boxShadow: {
                'luxury': '0 20px 60px rgba(0, 0, 0, 0.5)',
                'gold-glow': '0 0 40px rgba(212, 175, 55, 0.3)',
                'inner-luxury': 'inset 0 2px 20px rgba(255, 255, 255, 0.05)',
            },
            backdropBlur: {
                'xs': '2px',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 0.8s ease-out',
                scaleIn: 'scaleIn 0.6s ease-out',
                slideInLeft: 'slideInLeft 0.7s ease-out',
                shimmer: 'shimmer 3s linear infinite',
            },
        },
    },
    plugins: [],
}
