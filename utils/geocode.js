const request = require('request')

const geocode = (creds, address, callback) =>{
    const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token='+creds.geo_api_key+'&limit=1'
    request({url: geocode_url, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect to weather servie", undefined)
        } else if (response.body.features.length === 0){
            callback("Unable to find the location. Try another search", undefined)
        } else{
            callback({
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }, undefined)
            
        }
    })
    callback(undefined, geocode_url)
}
// const address = "India"


// // Geo coding api.mapbox.com

// request({url: geocode_url, json: true}, (error, response) => {
//     if (error){
//         console.log("Unable to connect to weather servie")
//     } else if (response.body.features.length === 0){
//         // console.log(response.body.error)
//         console.log("Unable to find the location. Try another search")
//     } else{
//         const lat = response.body.features[0].center[0]
//         const lan = response.body.features[0].center[0]
//         console.log(lat, lan)
//     }
// })
module.exports = geocode