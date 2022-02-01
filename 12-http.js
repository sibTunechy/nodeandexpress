const http = require('http');

const server = http.createServer((req, res) => {    //web servers keep on listening for requests 
    if(req.url === '/') {
        res.end('Welcome to our Home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short story')
    }
    else
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href='/'>back home</a>
    `)
})

server.listen(3050);