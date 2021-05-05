const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=89d69971c452b58e9d8c5fa2b6a5b28b'

request({ url: url}, (error, response) => {
    // console.log(response);
    const data = JSON.parse(response.body);
    console.log(data);
});

