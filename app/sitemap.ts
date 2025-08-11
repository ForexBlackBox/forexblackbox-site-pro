export default function sitemap(){
  const base = 'https://example.com';
  return [
    '', '/pricing','/subscribe','/features','/reviews','/about','/faq','/contact','/legal/terms','/legal/privacy','/legal/risk','/legal/refund'
  ].map(p=> ({ url: base + p, lastModified: new Date() }));
}
