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
			backgroundImage: {
				'gradient-darkroom': 'var(--gradient-darkroom)',
				'gradient-lens': 'var(--gradient-lens)',
				'gradient-golden': 'var(--gradient-golden)',
				'gradient-film': 'var(--gradient-film)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
				// New creative animations
				'aperture-slow': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'100%': { transform: 'rotate(360deg) scale(1.02)' }
				},
				'aperture-reverse': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'100%': { transform: 'rotate(-360deg) scale(0.98)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float-random': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'lens-focus': 'lens-focus 0.6s ease-in-out',
				'aperture-spin': 'aperture-spin 2s linear infinite',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				// New creative animations
				'aperture-slow': 'aperture-slow 8s linear infinite',
				'aperture-reverse': 'aperture-reverse 12s linear infinite reverse',
				'spin-slow': 'spin-slow 6s linear infinite',
				'float-random': 'float-random 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
