const fs = require('fs')
const http = require('http')
//////////////////////////////
// FILES

//BLOCKING SYNCRONOUS WAY

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

// const textOut = `this is what we know about advacado: ${textIn}`

// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('file written!');


//NON-BLOCKING ASYNCRONOUS WAY

// fs.readFile('./txt/start.txt', 'utf-8', (err,data)=>{
//     if (err) return console.log(err);
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err,data1)=>{
//         fs.readFile('./txt/append.txt', 'utf-8', (err,data2) => {
//             fs.writeFile('./txt/final.txt', `${data1}\n ${data2}`, 'utf-8', (err)=>{
//                 console.log('file written!');
//             })
//         })
//     })
// })


//////////////////////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)
const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if (pathName =='/' || pathName=== '/overview'){
        console.log(__dirname);
        res.end('this is an OVERVIEW')
    } else if(pathName === '/product'){
        res.end('This is an PRODUCT')
    }
    else if(pathName ==='/api'){
        res.writeHead(404, {
            'Content-type': 'application/json'
        })
        res.end(data)
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1> Page not found </h1>')
    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening to port 8000');
})