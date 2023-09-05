import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

export default withVanillaExtract(nextConfig)
