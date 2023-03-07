var fs = require('fs')

fs.readdir('/usr/', (err, data) => {
    console.log(data)
})