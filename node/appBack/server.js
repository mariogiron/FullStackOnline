const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRouter = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// http://localhost:3000/api/....
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('server escuchando en puerto 3000');
})