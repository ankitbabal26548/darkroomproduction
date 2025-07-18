import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Photography-specific colors
				'darkroom-red': 'hsl(var(--darkroom-red))',
				'film-grain': 'hsl(var(--film-grain))',
				'lens-flare': 'hsl(var(--lens-flare))',
				'aperture-shadow': 'hsl(var(--aperture-shadow))',
				'developer-tray': 'hsl(var(--developer-tray))',
			},
			backgroundImage: {
				'gradient-darkroom': 'var(--gradient-darkroom)',
				'gradient-lens': 'var(--gradient-lens)',
				'gradient-golden': 'var(--gradient-golden)',
				'gradient-film': 'var(--gradient-film)',
			},
			boxShadow: {
				'lens': 'var(--shadow-lens)',
				'photo': 'var(--shadow-photo)',
				'darkroom': 'var(--shadow-darkroom)',
			},
			transitionTimingFunction: {
				'photo': 'var(--transition-photo)',
				'lens': 'var(--transition-lens)',
				'smooth': 'var(--transition-smooth)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'lens-focus': {
					'0%': { transform: 'scale(1)', filter: 'blur(2px)' },
					'50%': { transform: 'scale(1.05)', filter: 'blur(0px)' },
					'100%': { transform: 'scale(1)', filter: 'blur(0px)' }
				},
				'aperture-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'aperture-pulse': {
					'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.7' },
					'50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in-scale': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -5%)' },
					'20%': { transform: 'translate(-10%, 5%)' },
					'30%': { transform: 'translate(5%, -10%)' },
					'40%': { transform: 'translate(-5%, 15%)' },
					'50%': { transform: 'translate(-10%, 5%)' },
					'60%': { transform: 'translate(15%, 0%)' },
					'70%': { transform: 'translate(0%, 15%)' },
					'80%': { transform: 'translate(-15%, 0%)' },
					'90%': { transform: 'translate(10%, 5%)' }
				},
				'border-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'typewriter': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink-caret': {
					'0%, 50%': { border-color: 'transparent' },
					'51%, 100%': { border-color: 'hsl(var(--accent))' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'lens-focus': 'lens-focus 0.6s ease-in-out',
				'aperture-spin': 'aperture-spin 2s linear infinite',
				'aperture-pulse': 'aperture-pulse 3s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-scale': 'fade-in-scale 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'grain': 'grain 8s steps(10) infinite',
				'border-spin': 'border-spin 3s linear infinite',
				'typewriter': 'typewriter 4s steps(40) infinite alternate',
				'blink-caret': 'blink-caret 1s step-end infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
