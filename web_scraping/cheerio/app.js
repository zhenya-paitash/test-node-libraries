const axios = require('axios');
const cheerio = require('cheerio');

const fs = require('fs');
const fileCsv = fs.createWriteStream('media.csv');
const fileTxt = fs.createWriteStream('media.txt');

// Write Headers
fileCsv.write(`index,Title,Age,Country,Genre,Logo,Link \n`);

async function grabMedia() {
  const url = 'https://rezka.ag';

  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const mediaData = $('.b-content__inline_items').find('.b-content__inline_item');

    mediaData.each((idx, el) => {
      const itemCover = $(el).find('.b-content__inline_item-cover');
      const itemLink = $(el).find('.b-content__inline_item-link');

      const title = itemLink.find('a').text();
      const small = itemLink.find('div').text().replace(/\s/g, '').split(',');
      const logo = url + itemCover.find('img').attr('src');
      const link = itemLink.find('a').attr('href');

      // Write Row To CSV
      fileCsv.write(`${idx + 1}, ${title}, ${small[0]}, ${small[1]}, ${small[2]}, ${logo}, ${link} \n`);
      // Write Row To TXT
      onTxt({ idx, title, small, logo, link });
    });
    console.log('Scraping Done...');
  
  } catch (err) {
    console.error(err);
  }
}

function onTxt(item) {
  const spaces = 10;
  fileTxt.write(`${' '.repeat(spaces + 2)}### ${item.idx + 1} \n`);
  fileTxt.write(`Title${' '.repeat(spaces - 'Title'.length)}: ${item.title} \n`);
  fileTxt.write(`Age${' '.repeat(spaces - 'Age'.length)}: ${item.small[0]} \n`);
  fileTxt.write(`Country${' '.repeat(spaces - 'Country'.length)}: ${item.small[1]} \n`);
  fileTxt.write(`Genre${' '.repeat(spaces - 'Genre'.length)}: ${item.small[2]} \n`);
  fileTxt.write(`Logo${' '.repeat(spaces - 'Logo'.length)}: ${item.logo} \n`);
  fileTxt.write(`Link${' '.repeat(spaces - 'Link'.length)}: ${item.link} \n\n`);
}

grabMedia();
