function trackRiyadhLinux(client) {
  var Twitter = require('node-tweet-stream')
  var t = new Twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      token: process.env.token,
      token_secret: process.env.token_secret
    })

  
  t.track('RLUGroup')
  t.track('tweet')
  t.on('tweet', function (tweet) {
    client.publish('/tweet', tweet)
  })

  t.on('error', function (err) {
    console.log('Oh no')
  })
}

module.exports = trackRiyadhLinux