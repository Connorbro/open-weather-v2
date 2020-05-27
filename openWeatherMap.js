const fetch = require('node-fetch')
const fs = require('fs');
const APPID= "224566a483405adb54b0ecf2dbbce14a"

const url = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${APPID}`;

const getWeather = async() => {
    let data = await fetch(url)
   
    let JSObject = await data.json()

    //fs.writeFileSync('./data.json', JSON.stringify(JSObject))

    return JSObject

}
module.exports = getWeather