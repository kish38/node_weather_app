const fs = require("fs")
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')

const buffer = fs.readFileSync("creds.json")
const creds = JSON.parse(buffer.toString())

const address = process.argv[2]
if (!address){
    console.log("Please provide a location")
}
else{
    geocode(creds, "India", (error, data)=>{
        if (error){
            return console.log("Error:", error)
        }
        
        forecast(creds, {latitude: data.latitude, longitude: data.longitude}, (error, forecaset_data)=>{
            if(error){
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecaset_data)
        })
    })
}

// const url = "https://api.darksky.net/forecast/"+creds.weather_api_key+"/37.8267,-122.4233"
forecast(creds, {latitude: 37.8267, longitude: -122.4233}, (error, data)=>{
    console.log(error)
    console.log(data)
})