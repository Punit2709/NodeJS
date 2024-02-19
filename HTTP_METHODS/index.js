const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} new Request Arrive\n`;
    const modifiedUrl = url.parse(req.url, true)
    const username = modifiedUrl.query.name || '';

    fs.appendFile('log.txt', log, (err, data) => {
        switch (modifiedUrl.pathname) {
            case '/':
                res.end(`You are on home page`);
                break;
            case '/about':
                res.end(`Hello ${username}, You are on about page`);
                break;
            case '/contact':
                res.end(`You are on contact page`);
                break;
            case '/signup':
                if(req.method === 'GET') res.end(`Hello ${username}, You are on signup page`);
                else if(req.method === 'POST') res.end(`Sucess`);
                break;
            default:
                res.end('Hello Server is Here !!!');
        }
    });
});

myServer.listen(3000, () => { console.log('Server Started') });

// get, post, put, patch, delete
// GET  : used when getting some data from Server
// POST : used when mutating something on server, submit form
// put  : uploading files or photo
// patch: DB entry is updated...changing username on insta
// Delete: deleting record on DB