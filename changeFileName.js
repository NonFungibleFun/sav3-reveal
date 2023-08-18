const fs = require('fs')

const changeFileName = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach((file, idx) => {
    function removeExtension(filename) {
      var lastDotPosition = filename.lastIndexOf('.')
      return filename.substring(0, lastDotPosition)
    }

    fs.renameSync(`${dir}/${file}`, `${dir}/${removeExtension(file)}`)
  })
}

changeFileName('./seeds')