const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=864e35e3d7acf8d33ade11a8d77eae4c&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined);
        } else if (JSON.stringify(body.cod).startsWith('4')) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                temp: 'Temp: ' + body.main.temp + ' Min Temp: ' + body.main.temp_min + ' Max Temp: ' + body.main.temp_max,
                name: body.name
            });
        }
    });
}

module.exports = forecast;