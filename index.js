const fs = require('fs')

//BLOCKING SYNCRONOUS WAY

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

// const textOut = `this is what we know about advacado: ${textIn}`

// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('file written!');


//NON-BLOCKING ASYNCRONOUS WAY

fs.readFile('./txt/start.txt', 'utf-8', (err,data)=>{
    if (err) return console.log(err);
    fs.readFile(`./txt/${data}.txt`, 'utf-8', (err,data1)=>{
        fs.readFile('./txt/append.txt', 'utf-8', (err,data2) => {
            fs.writeFile('./txt/final.txt', `${data1}\n ${data2}`, 'utf-8', (err)=>{
                console.log('file written!');
            })
        })
    })
})