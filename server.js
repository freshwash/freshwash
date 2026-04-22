const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // strip query strings
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);
  const ext      = path.extname(filePath).toLowerCase();
  const mimeType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 — Not found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 — Server error');
      }
      return;
    }

    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Fresh Wash dev server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.\n');

  // Auto-open in browser (best-effort)
  const { exec } = require('child_process');
  const open =
    process.platform === 'win32'  ? `start http://localhost:${PORT}` :
    process.platform === 'darwin' ? `open http://localhost:${PORT}`  :
                                    `xdg-open http://localhost:${PORT}`;
  exec(open);
});
