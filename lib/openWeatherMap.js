const fetch = require('node-fetch')
const fs = require('fs');


const url = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.APPID}`;

const getWeather = async() => {
    let data = await fetch(url) //promises - accepted, rejected and pending
   
    let JSObject = await data.json() //promise

    //fs.writeFileSync('./data.json', JSON.stringify(JSObject))
    return JSObject
}

module.exports = {
    getWeather
}