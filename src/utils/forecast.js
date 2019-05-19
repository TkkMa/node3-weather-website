const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = `https://api.darksky.net/forecast/eea5f052ce866b9a7e68766e011af739/${latitude},${longitude}?units=si`;
    request({url, json: true}, (error, {body})=>{
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location!', undefined)       
        } else{
            callback(undefined, body.daily.data[0].summary + `  It is currently ${body.currently.temperature} degrees out.  The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.daily.data[0].precipProbability}% chance of rain`)
        }
    }) 
}
module.exports = forecast


