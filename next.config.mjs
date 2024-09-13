/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:5000'
                : 'http://manhxanh.id.vn' || 'https://nodejs-app-inky.vercel.app'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: 'manhxanh.id.vn',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'nodejs-app-inky.vercel.app',
                pathname: '/**'
            }
        ]
    }
}

export default nextConfig
