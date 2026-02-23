const https = require('https');

https.get('https://arxiv.org/html/2510.04374v1', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Table 2')) {
        console.log(lines.slice(i, i + 100).join('\n'));
      }
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
