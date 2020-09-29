const axios = require('axios');
const cheerio = require('cheerio');

async function getDataFromPage(url, res = []) {
  try {
    const page = await axios.get(url);
    const $ = cheerio.load(page.data);
    const mediaData = $('.b-content__inline_items').find('.b-content__inline_item');

    mediaData.each((idx, el) => {
      const itemCover = $(el).find('.b-content__inline_item-cover');
      const itemLink = $(el).find('.b-content__inline_item-link');

      const title = itemLink.find('a').text().replace(',', '');
      const small = itemLink.find('div').text().replace(/\s/g, '').split(',');
      const logo = url + itemCover.find('img').attr('src');
      const link = itemLink.find('a').attr('href');

      res.push({
        index: idx + 1,
        title,
        age: small[0],
        country: small[1],
        genre: small[2],
        logo,
        link,
      });
    });

    return res;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function getMedia(onPages = 1, media = {}) {
  const url = 'https://rezka.ag';
  const mediaContent = ['films', 'series', 'cartoons'];

  for (let content of mediaContent)
    for (let page = 1; page <= +onPages; page++) {
      const dataFromPage = await getDataFromPage(`${url}/${content}/page/${page}`);
      media = {
        ...media,
        [content]: { 
          ...media[content], 
          ['page_' + page]: dataFromPage 
        },
      };
    }
  return media;
}

module.exports = getMedia;
