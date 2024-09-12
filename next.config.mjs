/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL:
            process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://nodejs-app-inky.vercel.app'
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
                hostname: 'nodejs-app-inky.vercel.app',
                pathname: '/**'
            }
        ]
    }
}

export default nextConfig
