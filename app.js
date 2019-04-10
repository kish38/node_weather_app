const fs = require("fs")
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')

const buffer = fs.readFileSync("creds.json")
const creds = JSON.parse(buffer.toString())


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
