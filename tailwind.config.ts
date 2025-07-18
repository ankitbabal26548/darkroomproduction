
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
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-spotlight': 'var(--gradient-spotlight)',
			},
			boxShadow: {
				'lens': 'var(--shadow-lens)',
				'photo': 'var(--shadow-photo)',
				'darkroom': 'var(--shadow-darkroom)',
				'aperture': 'var(--shadow-aperture)',
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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
				'aperture-open': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'aperture-close': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.3)', opacity: '0' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'stagger-in': {
					'0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 5px hsl(var(--accent) / 0.3)' },
					'50%': { boxShadow: '0 0 20px hsl(var(--accent) / 0.6)' },
					'100%': { boxShadow: '0 0 5px hsl(var(--accent) / 0.3)' }
				},
				'film-advance': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'counter-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'developer-reveal': {
					'0%': { 
						filter: 'brightness(0) contrast(0)',
						transform: 'scale(0.9)'
					},
					'50%': { 
						filter: 'brightness(0.5) contrast(1.5)',
						transform: 'scale(1.02)'
					},
					'100%': { 
						filter: 'brightness(1) contrast(1)',
						transform: 'scale(1)'
					}
				},
				'light-leak': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-100%) rotate(-45deg)'
					},
					'50%': { 
						opacity: '1'
					},
					'100%': { 
						opacity: '0',
						transform: 'translateX(100%) rotate(-45deg)'
					}
				},
				'viewfinder-scan': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'lens-focus': 'lens-focus 0.6s ease-in-out',
				'aperture-spin': 'aperture-spin 2s linear infinite',
				'aperture-open': 'aperture-open 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'aperture-close': 'aperture-close 0.6s ease-in-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-up': 'slide-in-up 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'stagger-in': 'stagger-in 0.6s ease-out',
				'spin-slow': 'spin-slow 3s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'film-advance': 'film-advance 10s linear infinite',
				'counter-up': 'counter-up 0.8s ease-out',
				'developer-reveal': 'developer-reveal 1.2s ease-out',
				'light-leak': 'light-leak 3s ease-in-out infinite',
				'viewfinder-scan': 'viewfinder-scan 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
