import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],
  reactCompiler: true,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
