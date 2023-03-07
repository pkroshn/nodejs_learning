var fs = require('fs')

var data = {
    name: 'Roshan'
}

fs.writeFile('data.json', data)