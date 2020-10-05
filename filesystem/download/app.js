const fs = require('fs')
const download = require('download')

const img = 'https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
const zip = 'https://github.com/zhenya-paitash/node_libraries/archive/master.zip'

// fs
download(img)
  .then(res => fs.writeFileSync('dist/img.jpg', res))
  .then(() => console.log('Download... DONE!'))
  .catch(err => { throw err })

// download in dir
download(img, 'dist')

// download zip and extract
download(zip, 'dist', { extract: true })
download(zip, 'dist', { extract: false, filename: 'dist.zip' })