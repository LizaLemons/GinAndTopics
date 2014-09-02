//= require_self
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  console.log('Oh, hai.');
  router = new App.Router();
  Backbone.history.start();
});

google.load("feeds", "1");

/////////////
// Google //
///////////

// google.load("feeds", "1");
//
//   function initialize() {
//     var feed = new google.feeds.Feed("http://feeds.feedburner.com/TechCrunch/greentech");
//     feed.setNumEntries(50);
//     feed.load(function(result) {
//       if (!result.error) {
//         var container = document.getElementById("feed");
//
//         // loop thru result.feed.entries
//         for (var i = 0; i < result.feed.entries.length; i++) {
//           var entry = result.feed.entries[i];
//           var div = document.createElement("div");
//           div.appendChild(document.createTextNode(entry.title));
//           div.appendChild(document.createTextNode(entry.link));
//           div.appendChild(document.createTextNode(entry.author));
//           container.appendChild(div);
//         }
//       }
//     });
//   }
//   google.setOnLoadCallback(initialize);
