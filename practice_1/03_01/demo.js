var fs = require('fs')

var data = require('./data.json')

console.log(data.name)

//Asynchronous and need a function to be declared.
fs.readFile('./data.json', 'utf-8', (err, data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})