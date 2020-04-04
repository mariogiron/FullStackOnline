const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const moment = require('moment');

require('dotenv').config();

const apiRouter = require('./routes/api');
const alumnosRouter = require('./routes/alumnos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use((req, res, next) => {
    // fs.appendFileSync('./registro.log', `${moment().format('DD-MM-YYYY hh:mm')} ${req.method} ${req.url}\n`)
    next();
})

// http://localhost:3000/api/....
app.use('/api', apiRouter);
app.use('/alumnos', alumnosRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('server escuchando en puerto 3000');
})