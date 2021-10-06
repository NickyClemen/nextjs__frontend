module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            "fs": false,
            "path": false,
            "os": false,
        };

        return config;
    },
    images: {
        domains: ['cdn.alibrate.com'],
    },
}