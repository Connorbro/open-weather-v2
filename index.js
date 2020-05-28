const express = require('express'); // npm i express
const hbs = require('express-handlebars'); //npm i express-handlebars
const path = require('path'); //built in module
const app = express();

require('dotenv').config();

const openWeatherMap = require('./lib/openWeatherMap');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
    
    // let data = await openWeatherMap.getWeather();
    // res.send(data)
    res.render('index')
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})
