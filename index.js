const glob = require('tiny-glob')
const { join } = require('path')
const searchPattern = '{post,page}/**/*.{md}'
glob(searchPattern, {
  cwd: join(__dirname, 'content'),
  absolute: true
})
  .then(files => {
    console.log(files)
  })
  .catch(err => console.error(err))
