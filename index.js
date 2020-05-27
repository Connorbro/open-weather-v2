const express = require('express');
const app = express();

const weather = require('./openWeatherMap')

app.get('/', (req, res) => {
    res.send('Hello, welcome to my website')
})
app.get('/page2', (req, res) => {
    res.send('I am the second page')
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})