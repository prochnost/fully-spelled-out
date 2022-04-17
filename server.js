'use strict';

const http = require('http');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Server
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('README.md', 'utf-8');
    stream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
