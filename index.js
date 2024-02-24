const fs = require('fs')

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

const textOut = `this is what we know about advacado: ${textIn}`

fs.writeFileSync('./txt/output.txt', textOut)

console.log('file written!');