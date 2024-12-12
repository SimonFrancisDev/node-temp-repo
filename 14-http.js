const http = require('http');

const port = 5000;
const server = http.createServer((req, res) => {
    // sending a response to our homepage;
    if(req.url === '/') {
        res.end("Welcome to this site, explore the role of node")
    } 

    // api for about us page
    if(req.url === '/about') {
        res.end("This is the about page");
    }

    // api for handling unavailable resource
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page that you are looking for</p>
        <a href="/">Back to homepage</a>    
    `)
})

server.listen(port);