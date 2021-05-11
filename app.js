const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=89d69971c452b58e9d8c5fa2b6a5b28b&units=metric'


request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.main.temp);
    console.log(`There is ${response.body.weather[0].description}. It's currently ${response.body.main.temp} degrees out. There is a ${response.body.clouds.all}% chance of rain out there.`);
});






const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic25laG9tb3kxMDAiLCJhIjoiY2tvNjBnaGY5MWhtZzJxbHl0NWdwOGF0dyJ9.Ps-ZNqoVkpQWZ_apcBgCyA&limit=1';

request({ url: geocodeUrl, json: true }, (error, response) => {
    console.log(response.body.features[0].center[0]);
    console.log(response.body.features[0].center[1]);
})

