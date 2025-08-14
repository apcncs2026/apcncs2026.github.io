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
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate"],
  },
}