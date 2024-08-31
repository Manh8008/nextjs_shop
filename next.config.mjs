/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000',
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
