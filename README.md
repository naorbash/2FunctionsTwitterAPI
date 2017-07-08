# 2FunctionsTwitterAPI

Twitter API Client for node. 

Supports:

**1.Twitting**

**2.Search for a list of tweets.**

## Tweet a message:
URL:
```
https://naorbashertwitterapi.herokuapp.com/tweet
```
Method: **POST**

Body contant type: **JSON**

Expected **body** content like here:
```
{
	"tweet": "Hello world!"
}
```
## Getting a list of tweets:
URL:
```
https://naorbashertwitterapi.herokuapp.com/getTweets
```
Method: **GET**

Expected **GET** request like here:
```
https://naorbashertwitterapi.herokuapp.com/getTweets?q=Trump&count=5&until=2017-07-06
```
### Query explnatoin:
q = **Search query: tell us the topic you want to see tweets about - A Required Field**

count = **The number of tweets to return per page, up to a maximum of 100. Defaults to 15**

until = **Returns tweets created before the given date. Date should be formatted as YYYY-MM-DD. Keep in mind that the search index has a 7-day limit.**
