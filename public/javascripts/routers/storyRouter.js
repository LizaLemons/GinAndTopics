App.Router = Backbone.Router.extend({
  routes: {
    '' : 'index'
  },

  initialize: function() {
    console.log("New router");
    this.feedsDataLoop();
  },

  index: function() {
    console.log('Index fired');
  },

  feedsDataLoop: function() {
    // looping through feedsData hash

    for (var i = 0; i < feedsData.length; i++) {
      var category = feedsData[i]["category"];
      var domId = feedsData[i]["domId"];
      var feedsArray = feedsData[i]["feeds"];

      $('#feed').append('<h2>' + category + '</h2>');

      // create collection view
      App.Views[category] = new App.StoriesCollectionView({collection: new App.StoriesCollection()});
      // loop through feed URLs
      for (var j = 0; j < feedsArray.length; j++) {
        var storyModel = this.createFeedModel(feedsArray[j], category);
      }
    }
  },
  createFeedModel: function(feedUrl, category) {
    var feed = new google.feeds.Feed(feedUrl);
    feed.setNumEntries(1);
    feed.load(function(result) {
      console.log(result);
      if (!result.error) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          // console.log(result.feed.entries[i]);
          var storyModel = new App.StoryModel({
            title: result.feed.entries[i].title,
            author: result.feed.entries[i].author,
            link: result.feed.entries[i].link,
            content: result.feed.entries[i].content,
            contentSnippet: result.feed.entries[i].contentSnippet,
            publishedDate: result.feed.entries[i].publishedDate,
            categories: result.feed.entries[i].categories
          });

          App.Views[category].collection.add(storyModel);
        }
      }
    });
  }
});
