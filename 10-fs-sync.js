const {readFileSync, writeFileSync} = require('fs') // const fs = require('fs')  // same
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')      // used to read file
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/Third.txt', `Here is the Third message: ${first}, ${second}`, {flag: 'a'} ) // used to create a new file or overwrite an existing file
console.log('done with this task')
console.log('starting the nwxt one')
