/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'utfs.io' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // Trust the X-Forwarded-Proto header from Nginx/Cloudflare reverse proxy
  // This prevents Clerk from generating http:// redirect URLs when behind HTTPS proxy
  // Without this, you get infinite redirect loops: HTTPS → HTTP → HTTPS → ...
  experimental: {
    trustedHeaders: ['x-forwarded-proto', 'x-forwarded-host'],
  },
}

module.exports = nextConfig
