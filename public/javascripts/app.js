var client = new Faye.Client('http://localhost:3000/faye');


var source = $('#tweet-template').html()
var template = Handlebars.compile(source);
var s = client.subscribe('/tweet', function(tweet) {
  console.log(tweet.text)
  $("#tweets").prepend(template({
    tweet: tweet
  }))
});

s.then(function() {
  console.log("ok")
})