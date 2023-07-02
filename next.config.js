/** @type {import('next').NextConfig} */
const  withPWA = require('@imbios/next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'res.cloudinary.com',
      "lh3.googleusercontent.com"
    ]
  }
}
module.exports = nextConfig
