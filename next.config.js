/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  images: {
      domains: ['hegerys.wsvehiculescrm.selectup.com'],
    },
  plugins: [],
}
