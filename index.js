const express = require('express');
const hbs = require('express-handlebars');
const app = express();

require('dotenv').config();

const openWeatherMap = require('./lib/openWeatherMap');

app.get('/', async(req, res) => {
    
    let data = await openWeatherMap.getWeather();
 
    res.send(data)
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})
