/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:5000'
                : 'http://manhxanh.id.vn' || 'https://ivy-api.vercel.app'
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
                protocol: 'https',
                hostname: 'manhxanh.id.vn',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'https://ivy-api.vercel.app',
                pathname: '/**'
            }
        ]
    }
}

export default nextConfig
