/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL: process.env.BACKEND_URL || 'https://nodejs-app-inky.vercel.app',
    },
    images: {
        domains: ['localhost', 'nodejs-app-inky.vercel.app'],
    },
};

export default nextConfig;
