/** @type {import('next').NextConfig} */
// const  output= "standalone";
const nextConfig = {
    output: "standalone",
    eslint : {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      }
};

module.exports = nextConfig;