/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ignore system directories that cause EPERM on Windows
    config.watchOptions = {
      ignored: [
        '**/C:/Users/Surendran/Cookies/**',
        '**/C:/Users/Surendran/Local Settings/**',
        '**/C:/Users/Surendran/AppData/**'
      ],
    };
    return config;
  },
  experimental: {
    // Ensures Next only scans inside your project
    outputFileTracingRoot: 'D:\\Full_Stack_Development\\Projects\\socially',
  },
};

export default nextConfig;
