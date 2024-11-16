/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatar.iran.liara.run",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
