/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'utfs.io' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // Trust X-Forwarded-Proto from Nginx/Cloudflare reverse proxy so Next.js
  // knows the original request was HTTPS. Without this, Clerk generates http://
  // redirect URLs causing infinite loops: HTTPS → HTTP → HTTPS → ...
  //
  // NOTE: Do NOT add x-forwarded-host here! Nginx may set it to "host:80"
  // (e.g. "dklf.live:80"), causing Clerk to generate broken URLs like
  // https://dklf.live:80/sign-up. The Host header is sufficient.
  experimental: {
    trustedHeaders: ['x-forwarded-proto'],
  },
}

module.exports = nextConfig
