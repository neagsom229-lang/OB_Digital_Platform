import { readFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { curriculumModules } from '../src/data/curriculum.js'

const configuredUrl = process.argv[2] ?? process.env.SITE_URL

if (!configuredUrl) {
  console.error('Provide the public site URL: npm run sitemap -- https://your-domain.example')
  process.exit(1)
}

let siteUrl
try {
  const parsedUrl = new URL(configuredUrl)
  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new TypeError('The public site URL must use HTTP or HTTPS.')
  }
  siteUrl = parsedUrl.origin
} catch (error) {
  console.error(`Invalid public site URL: ${error.message}`)
  process.exit(1)
}

const publicPaths = [
  '/',
  '/charter',
  '/audit',
  '/lexicon',
  '/sources',
  '/curriculum',
  ...curriculumModules.map(({ id }) => `/curriculum/${id}`),
]
const lastModified = new Date().toISOString().slice(0, 10)
const entries = publicPaths
  .map(
    (path) =>
      `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
  )
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`

await writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap)
await writeFile(
  new URL('../public/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
const indexPath = new URL('../index.html', import.meta.url)
const indexHtml = await readFile(indexPath, 'utf8')
const canonicalHtml = indexHtml
  .replace('href="/" />', `href="${siteUrl}/" />`)
  .replace('property="og:url" content="/"', `property="og:url" content="${siteUrl}/"`)
  .replaceAll('content="/social-preview.svg"', `content="${siteUrl}/social-preview.svg"`)

if (canonicalHtml === indexHtml) {
  throw new Error('Could not find expected canonical and social-image metadata in index.html')
}

await writeFile(indexPath, canonicalHtml)
console.log(`Generated public/sitemap.xml with ${publicPaths.length} URLs for ${siteUrl}`)
