const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=89d69971c452b58e9d8c5fa2b6a5b28b'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.list.dt);
    // const temperature = response.body[list][main][temp];
    // console.log("It is currently " + temperature);
});

