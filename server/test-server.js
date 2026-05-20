import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('ok'));
const server = app.listen(5000, () => console.log('started'));
server.on('close', () => console.log('closed'));
server.on('error', (e) => console.log('error', e));
