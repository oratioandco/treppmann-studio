import { mkdir, rm, writeFile } from 'node:fs/promises';

const out = new URL('../personal-dist/', import.meta.url);
await mkdir(out, { recursive: true });
await rm(new URL('images/work/', out), { recursive: true, force: true });
await writeFile(new URL('CNAME', out), 'treppmann.de\n');
await writeFile(new URL('.nojekyll', out), '');
await writeFile(new URL('robots.txt', out), 'User-agent: *\nAllow: /\n\nSitemap: https://treppmann.de/sitemap.xml\n');
await writeFile(new URL('sitemap.xml', out), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://treppmann.de/</loc></url>
  <url><loc>https://treppmann.de/en/</loc></url>
  <url><loc>https://treppmann.de/impressum/</loc></url>
  <url><loc>https://treppmann.de/datenschutz/</loc></url>
</urlset>
`);
