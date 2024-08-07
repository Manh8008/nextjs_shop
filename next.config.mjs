const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                BACKEND_URL: 'http://localhost:5000', // URL backend khi chạy local
            },
        };
    }

    return {
        env: {
            BACKEND_URL: process.env.BACKEND_URL || 'nodejs-app-1-sn84.onrender.com',
        },
    };
};
