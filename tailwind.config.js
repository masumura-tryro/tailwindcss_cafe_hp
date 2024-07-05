/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      "stripe-bg": "url('../src/images/stripe.png')",
      "home-hero-bg": "url('../src/images/home-hero.jpg')",
      "access-hero-bg": "url('../src/images/access-hero.jpg')",
      "menu-hero-bg": "url('../src/images/menu-hero.jpg')",
      "contact-hero-bg": "url('../src/images/contact-hero.jpg')",
    },
  },
  plugins: [],
}

