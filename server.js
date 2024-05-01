import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 3000;

// Get current path


const server = http.createServer((req, res) => {
    try {
        if (req.method === `GET`) {
            if (req.url === `/`) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Homepage</h1>');
            } else if (req.url === `/about`) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About</h1>');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Not Found</h1>');
            }

        } else {
            throw new Error(`Method Not Allowed`);
        }
    }

    catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('server error');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});