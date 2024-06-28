// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'output',
    images: {
        unoptimized: true,
      },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
