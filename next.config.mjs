import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [], // z.B. 'remark-gfm' als string, falls du GitHub-Flavored Markdown willst
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // alle normalen Next.js Optionen
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // MDX + normale Seiten
}

// Exportiere Next.js Config kombiniert mit MDX Support
export default withMDX(nextConfig)
