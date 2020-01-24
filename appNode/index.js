const axios = require('axios');
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

axios.get('https://www.google.es')
    .then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log(err);
    });