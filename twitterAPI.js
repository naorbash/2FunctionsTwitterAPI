var request = require('request');

var authentication = {
    consumer_key: '7HC173lie0by9CtQWjNJ4Twfh',
    consumer_secret: 'qtsDIBnwu754rxgQ5fLhfiR2IebrHktM5NdQwATJoUbyVr0gqh',
    token: '882025487761104897-OwOXlvZfz7jkOSob60uQhm3Xylp971P',
    token_secret: 'ucffKCAyoiDePwbwDAtRCItlb8XwN2wi1V2pWQDNX9J5r'
};

function tweet(status, res) {
    request.post({
        url: 'https://api.twitter.com/1.1/statuses/update.json',
        oauth: authentication,
        qs: {
            status: status
        }
    }, function (error, response, body) {
        if (error) {
            res.send(error.message)
        }
        else {
            var parsedBody = JSON.parse(body)
            if (parsedBody.errors) {
                res.send(parsedBody.errors[0].message)
            } else {
                res.send('Your tweet was posted successfully on:' + parsedBody.created_at)
            }
        }
    })
}

function tweetsSearch(searchString, count, until, res) {
    request.get({
        url: 'https://api.twitter.com/1.1/search/tweets.json',
        oauth: authentication,
        qs: {
            q: searchString,
            count: count,
            until: until
        }
    }, function (error, response) {
        if (error) {
            res.send(error.message)
        }
        else {
            var parsedResponse = JSON.parse(response.body)
            if (parsedResponse.errors) {
                res.send(parsedResponse.errors[0].message)
            }
            else {
                var twittsFullInfoArray = parsedResponse.statuses
                var jsonTwitts = [];
                for (i = 0; i < twittsFullInfoArray.length; i++) {
                    jsonTwitts.push({
                        created_at: twittsFullInfoArray[i].created_at,
                        text: twittsFullInfoArray[i].text,
                        user: twittsFullInfoArray[i].user.name,
                        screen_name: twittsFullInfoArray[i].user.screen_name
                    });
                }
                res.send(jsonTwitts)
            }
        }
    })
}

exports.tweet = tweet
exports.tweetsSearch = tweetsSearch
