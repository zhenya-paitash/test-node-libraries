const fs = require('fs');

function writeInFile(media) {
  const fileCsv = fs.createWriteStream('media.csv');
  const fileTxt = fs.createWriteStream('media.txt');
  fileCsv.write(`content,page,index,Title,Age,Country,Genre,Logo,Link \n`);

  for (let content in media)
    for (let page in media[content])
      media[content][page].forEach(({ index, title, age, country, genre, logo, link }) => {
        fileCsv.write(`${content}, ${page}, ${index}, ${title}, ${age}, ${country}, ${genre}, ${logo}, ${link} \n`);
        
        const spaces = 10;
        fileTxt.write(`${' '.repeat(spaces + 2)}${content} | ${page} | ${index}/36 \n`);
        fileTxt.write(`Title${' '.repeat(spaces - 'Title'.length)}: ${title} \n`);
        fileTxt.write(`Age${' '.repeat(spaces - 'Age'.length)}: ${age} \n`);
        fileTxt.write(`Country${' '.repeat(spaces - 'Country'.length)}: ${country} \n`);
        fileTxt.write(`Genre${' '.repeat(spaces - 'Genre'.length)}: ${genre} \n`);
        fileTxt.write(`Logo${' '.repeat(spaces - 'Logo'.length)}: ${logo} \n`);
        fileTxt.write(`Link${' '.repeat(spaces - 'Link'.length)}: ${link} \n\n`);
      });
}

module.exports = writeInFile;
