const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    let log = `${Date.now()}  ${req.url}: New Request Arrive\n`
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/': res.end('You are on home page');
            break;
            case '/about': res.end('You are on about page');
            break;
            case '/contact': res.end('You are on contact page');
            break;
            default:
                res.end('Default Page');
        }
    })
});

myServer.listen(3000, () => { console.log('Server Started') })