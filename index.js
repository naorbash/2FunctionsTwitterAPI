var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var twitterAPI = require('./twitterAPI')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/tweet', function (req, res) {
    twitterAPI.tweet(req.body.tweet,res)
})

app.get('/getTweets', function (req, res) {
    var requestHeaders = req.headers
    twitterAPI.tweetsSearch(requestHeaders.q,requestHeaders.count,requestHeaders.util,res)
})

app.listen(3000, function () {
    console.log('app listening on port 3000')
})
