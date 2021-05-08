const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=89d69971c452b58e9d8c5fa2b6a5b28b&units=metric'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.main.temp);
    console.log(`It's currently ${response.body.main.temp} degrees out. There is a ${response.body.clouds.all}% chance of rain out there.`);
});

