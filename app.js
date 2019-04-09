const request = require("request")
const fs = require("fs")

const buffer = fs.readFileSync("creds.jsn")
const creds = JSON.parse(buffer.toString())

const url = "https://api.darksky.net/forecast/"+creds.weather_api_key+"/37.8267,-122.4233"

request({url: url, json: true}, (error, response) => {
    // console.log(response)
    if (error){
        console.log("Unable to connect to weather servie")
    } else if (response.body.error){
        // console.log(response.body.error)
        console.log("Unable to find the location")
    } else{
        console.log("It is Currently "+ response.body.currently.temperature+ " degrees out. There is a "+response.body.currently.precipProbability+ ' percent chance of rain')
    }
})

const address = "India"
const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token='+creds.geo_api_key+'&limit=1'

// Geo coding api.mapbox.com

request({url: geocode_url, json: true}, (error, response) => {
    if (error){
        console.log("Unable to connect to weather servie")
    } else if (response.body.features.length === 0){
        // console.log(response.body.error)
        console.log("Unable to find the location. Try another search")
    } else{
        const lat = response.body.features[0].center[0]
        const lan = response.body.features[0].center[0]
        console.log(lat, lan)
    }
})
