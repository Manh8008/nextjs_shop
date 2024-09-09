/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL: process.env.BACKEND_URL || 'https://nodejs-app-inky.vercel.app',
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
