// const request = require('request');

// const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=89d69971c452b58e9d8c5fa2b6a5b28b&units=metric'


// request({ url: url, json: true }, (error, response) => {
//     if (error){
//         console.log("Unable to connect...!");
//     } else if(response.body.error){
//         console.log("Must be some error over there");
//     } else {
//         console.log(`There is ${response.body.weather[0].description}. It's currently ${response.body.main.temp} degrees out. There is a ${response.body.clouds.all}% chance of rain out there.`);
//     }
// });






// Geocoding -> Location -> lat/long co-ordinate pair -> weather.

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic25laG9tb3kxMDAiLCJhIjoiY2tvNjBnaGY5MWhtZzJxbHl0NWdwOGF0dyJ9.Ps-ZNqoVkpQWZ_apcBgCyA&limit=1';
 
// first element of center array is longtitude & second one is lattitude.


request({ url: geocodeUrl, json: true }, (error, response) => {

    const lattitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    if (error) {
        console.log("Unable to Connect...");
    } else if(response.body.error){
        console.log("Something is going wrong at your end...");
    } else {
        console.log(lattitude, longtitude);
    }
})

