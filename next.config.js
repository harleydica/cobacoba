/* eslint-disable @typescript-eslint/no-var-requires */
import withPwa from 'next-pwa'
import runtimeCaching from 'next-pwa/cache'

/** @type {import('next').NextConfig} */
export default withPwa({
  images: {
    domains: ['ik.imagekit.io', 'og-image.vercel.app', 'media3.giphy.com', 'media0.giphy.com']
  },
  // reactStrictMode: true
  // replace react with preact if on production
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  },
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  }
})
