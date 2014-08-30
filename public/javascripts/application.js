
//= require_self

// App = {
//   Models: {},
//   Views: {},
//   Collections: {}
// };

$(document).ready(function(){
  router = new Router();
  Backbone.history.start();
});


// Google

// Tells the installer to load Google Feed
google.load("feeds", "1");
var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");

// Six initialize functions, one for each Category:
  // .load() fxn for every feed?
  //


function initialize() {

  techFeedsData.forEach(function(feedObj) {
    var feed = new google.feeds.Feed(feedObj.url);
    feed.load(function(result) {
      // iterate over a single feed
      // create empty collection
      // create a model for each entry in the feed
      // push model into collection
    });
  })

  
  ///////////


  var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");
  var feed2 = new google.feeds.Feed("http://www.rssmix.com/u/4439447/rss.xml");
  var feed3 = new google.feeds.Feed("http://feeds.mashable.com/mashable/tech");
  var feed4 = new google.feeds.Feed("http://www.rssmix.com/u/4439447/rss.json");

  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div);
      }
    }
  });

  // feed2.load(function(result) {
  //   if (!result.error) {
  //     var container = document.getElementById("feed");
  //     for (var i = 0; i < result.feed.entries.length; i++) {
  //       var entry = result.feed.entries[i];
  //       var div = document.createElement("div");
  //       div.appendChild(document.createTextNode(entry.title));
  //       container.appendChild(div);
  //     }
  //   }
  // });
  //
  // feed3.load(function(result) {
  //   if (!result.error) {
  //     var container = document.getElementById("feed");
  //     for (var i = 0; i < result.feed.entries.length; i++) {
  //       var entry = result.feed.entries[i];
  //       var div = document.createElement("div");
  //       div.appendChild(document.createTextNode(entry.title));
  //       container.appendChild(div);
  //     }
  //   }
  // });
  //
  // feed4.load(function(result) {
  //   if (!result.error) {
  //     var container = document.getElementById("feed");
  //     for (var i = 0; i < result.feed.entries.length; i++) {
  //       var entry = result.feed.entries[i];
  //       var div = document.createElement("div");
  //       div.appendChild(document.createTextNode(entry.title));
  //       container.appendChild(div);
  //     }
  //   }
  // });
}

google.setOnLoadCallback(initialize);
