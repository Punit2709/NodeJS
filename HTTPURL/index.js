const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.url} new Request Arrive\n`;
    const modifiedUrl = url.parse(req.url, true)
    fs.appendFile('log.txt', log, (err, data) => {
        switch (modifiedUrl.pathname) {
            case '/':
                res.end(`You are on home page`);
                break;
            case '/about':
                const username = modifiedUrl.query.name;
                res.end(`Hello ${username}, You are on about page`);
                break;
            case '/contact':
                res.end(`You are on contact page`);
                break;
            default:
                res.end('Hello Server is Here !!!');
        }
    });
});

myServer.listen(3000, () => { console.log('Server Started') });

// URL : Unified Resouce Locator
// https:// :- this is protocol
// www.google.com :- this is domain name
// query?q=javascript+interview+questions : this is query