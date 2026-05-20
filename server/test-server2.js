import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('ok'));
const server = app.listen(5002, () => console.log('started on 5002'));
