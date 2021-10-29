// handling http requests in nodejs

const request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=44350a15f38473661ce8cc0150e8b306';

request({url: url}, (error, response) => {
    console.log(response);
})