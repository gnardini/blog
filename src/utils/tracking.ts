export function isBot(userAgent?: string) {
  if (!userAgent) {
    return false;
  }
  const bots = [
    'Googlebot',
    'bingbot',
    'PetalBot',
    'AhrefsBot',
    'AhrefsSiteAudit',
    'DuckDuckBot',
    'Baiduspider',
    'Slurp',
    'YandexBot',
    'facebot',
    'ia_archiver',
    'Exabot',
    'MJ12Bot',
    'SEMrushBot',
    'DotBot',
    'AdsBot',
    'APIs-Google',
    'Google-Site-Verification',
    'Bytespider',
    'YandexMobileBot',
    'redditbot',
    'ubermetrics-technologies.com',
    'gptbot',
    'Mediapartners-Google',
  ];
  return !!bots.find((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()));
}

export function mapReferer(referrer?: string) {
  if (!referrer) return null;
  if (referrer.startsWith('http://localhost:')) return 'dev';
  let shortened = referrer;
  if (shortened.startsWith('http://')) shortened = shortened.substring('http://'.length);
  if (shortened.startsWith('https://')) shortened = shortened.substring('https://'.length);
  if (shortened.startsWith('www.')) shortened = shortened.substring('www.'.length);
  if (shortened.startsWith('old.')) shortened = shortened.substring('old.'.length);
  if (shortened.startsWith('masterychart.com')) return 'masterychart.com';
  if (shortened.startsWith('google.') && shortened.length <= 15) return 'google.com';
  if (shortened.startsWith('gnardini.com/')) return shortened.substring('gnardini.com'.length);
  return shortened;
}
