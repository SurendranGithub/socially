/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/C:/Users/Surendran/Cookies/**'], // ignore the protected path
    };
    return config;
  },
};

export default nextConfig;
