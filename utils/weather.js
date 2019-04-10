const request = require('request')

const forecast = (creds, data, callback) => {

    // const url = "https://api.darksky.net/forecast/"+creds.weather_api_key+"/37.8267,-122.4233"
    const url = "https://api.darksky.net/forecast/"+creds.weather_api_key+"/" + encodeURI(data.latitude) + "," + encodeURI(data.longitude)

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect to weather servie", undefined)
        } else if (response.body.error){
            callback("Unable to find the location", undefined)
        } else{
            callback("It is Currently "+ response.body.currently.temperature+ " degrees out. There is a "+response.body.currently.precipProbability+ ' percent chance of rain', undefined)
        }
    })

}

module.exports = forecast