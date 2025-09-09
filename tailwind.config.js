/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  safelist: [
    // Buttons
    'btn', 'btn-primary', 'btn-secondary', 'btn-accent', 'btn-ghost', 'btn-lg', 'btn-md', 'btn-sm', 'btn-xs',
    'btn-info', 'btn-success', 'btn-warning', 'btn-error',
    
    // Layout
    'navbar', 'navbar-start', 'navbar-center', 'navbar-end',
    'hero', 'hero-content',
    'footer',
    'divider',
    
    // Data Display
    'card', 'card-body', 'card-title', 'card-actions',
    'stat', 'stat-figure', 'stat-title', 'stat-value', 'stat-desc',
    
    // Navigation
    'menu', 'menu-horizontal', 'menu-vertical', 'menu-sm', 'menu-md', 'menu-lg',
    'dropdown', 'dropdown-content', 'dropdown-top', 'dropdown-bottom',
    'link', 'link-hover', 'link-primary',
    
    // Data Input
    'form-control', 'label', 'label-text', 'label-text-alt',
    'input', 'input-bordered', 'input-primary',
    'select', 'select-bordered', 'select-primary',
    'textarea', 'textarea-bordered', 'textarea-primary',
    
    // Colors
    'bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral', 'bg-base-100', 'bg-base-200', 'bg-base-300',
    'bg-info', 'bg-success', 'bg-warning', 'bg-error',
    'text-primary', 'text-secondary', 'text-accent', 'text-neutral', 'text-base-content',
    'text-primary-content', 'text-secondary-content', 'text-accent-content', 'text-neutral-content',
    'text-info', 'text-info-content', 'text-success', 'text-success-content',
    'text-warning', 'text-warning-content', 'text-error', 'text-error-content',
    
    // Conference Custom Classes
    'hero-gradient', 'hero-text', 'hero-text-secondary',
    'navbar-light', 'footer-light',
    'bg-conf-primary', 'bg-conf-secondary', 'bg-conf-accent', 'bg-conf-bg-light', 'bg-conf-bg-medium',
    'text-conf-primary', 'text-conf-secondary', 'text-conf-accent',
  ],
  theme: {
    extend: {
      colors: {
        'conf': {
          'primary': 'var(--conf-primary)',
          'secondary': 'var(--conf-secondary)',
          'accent': 'var(--conf-accent)',
          'bg-light': 'var(--conf-bg-light)',
          'bg-medium': 'var(--conf-bg-medium)',
        },
        'hero': {
          'from': 'var(--hero-from)',
          'to': 'var(--hero-to)',
          'text': 'var(--hero-text-primary)',
          'text-secondary': 'var(--hero-text-secondary)',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate"],
  },
}