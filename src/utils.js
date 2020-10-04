const request = require('request')

const getMeny = (address, callback) => {
    const url = 'https://service2.lounaspaikka.fi:8443/api/Restaurants/hndl/hyvinkaa/' + encodeURIComponent(address) + ' ' 
 
 request({url:url, json:true}, (error, response) => {
     if(error) {
         callback('Unable to connect to service!', undefined)
     } else if (response.body === 0) {
         callback('Unable to find meny', undefined)
     } else {
         var d = new Date()
         date = d.getDay()        
         callback(undefined, {name: response.body.name, meny: response.body.menus[date].text})
     }
 })
 }

 module.exports = getMeny