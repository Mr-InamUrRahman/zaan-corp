/** @type {import('next').NextConfig} */ 
module.exports = {
  reactStrictftde: false, 
  webpack5: true, 
  webpack: (config) => { 
    config.resolve.fallback = { fs: false }; 
  
    return config; 
  }}
