const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, welcome to my World of CI/CD!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
