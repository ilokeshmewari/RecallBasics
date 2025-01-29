// at first install Express using the command:
// npm install express

// Node.js Basic Operations

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// API Routes basics
app.get('/', (req, res) => {
    res.send('Welcome to Node.js we will learn node.js here');
});

// File Sys Operation
const filePath = path.join(__dirname, 'test.txt');
fs.writeFileSync(filePath, 'Hello, this is a test file made by lokesh.');

app.get('/readfile', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data);
});

// learning Promises
function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async task is completed hurray');
        }, 2000);
    });
}

app.get('/asynctask', async (req, res) => {
    const result = await asyncTask();
    res.send(result);
});

// Handling asynchronous task Async/Await
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'data is fetched successfully' });
        }, 1000);
    });
}

app.get('/fetch-data', async (req, res) => {
    const data = await fetchData();
    res.json(data);
});

// Starting Server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
