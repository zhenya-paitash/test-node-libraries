const fs = require('fs');
const Parser = require('rss-parser');

(async () => {
  
  // RSS Parser
  const parser = new Parser();

  // Get from RSS feed
  const url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC29ju8bIPH5as8OGnQzwJyA';  // traversy-media
  const urlReddit = 'https://www.reddit.com/.rss';
  const feed = await parser.parseURL(url); 

  let items = [];

  const filename = `${feed.title.replace(/\s+/g, '-').replace(/[/\\?%*:|"<>]/g, '').toLowerCase()}.json`;
  if (fs.existsSync(filename))
    items = require(filename);
  
  await Promise.all(feed.items.map(async curItem => {
    if (items.filter(i => i === curItem).length <= 1)
      items.push(curItem);
  }));

  // save the file
  fs.writeFileSync(filename, JSON.stringify(items));

})();