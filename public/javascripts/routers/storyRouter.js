App.Router = Backbone.Router.extend({
  routes: {
    '' : 'index'
  },

  initialize: function() {
    console.log("Router initialized");
    this.feedsDataLoop();
    App.searchView = new App.SearchView();
  },

  index: function() {
    console.log('Index fired');
  },

  feedsDataLoop: function() {
    // looping through each cat. in feedsData hash
    for (var i = 0; i < feedsData.length; i++) {
      var category = feedsData[i]["category"];
      var domId = feedsData[i]["domId"];
      var feedsArray = feedsData[i]["feeds"];

      // Displaying category without category template:
      // $('#feed').append('<h2>' + category + '</h2>');

      // create collection & collection view
      var storyCollection = new App.StoriesCollection();
      storyCollection.category = category;
      App.Views[category] = new App.StoriesCollectionView({collection: storyCollection});
      // loop through feeds array in each category
      for (var j = 0; j < feedsArray.length; j++) {
        var storyModel = this.createFeedModel(feedsArray[j], category);
      }
    }
  },
  // Creates models, adds them to correct collection
  createFeedModel: function(feedUrl, category) {
    // Make API call on each URL in feeds array
    var feed = new google.feeds.Feed(feedUrl);
    feed.setNumEntries(1);
    feed.load(function(result) {
      if (!result.error) {
        // loop through result (array of headlines) of each URL
        for (var i = 0; i < result.feed.entries.length; i++) {
          var storyContent = result.feed.entries[i].content;
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
      App.Views[category].render();
    });
  }
});

//////////////////////////////////////////////////////////
// regex to escape adds in content and content snippet //
////////////////////////////////////////////////////////

// Escape:
  // "da.feedsportal"
  // <a href="http://da.feedsportal.com/r/204367071126/u/31/f/642564/c/34625/s/3e01249e/sc/4/rc/1/rc.htm" rel="nofollow">
  // <img src="http://da.feedsportal.com/r/204367071126/u/31/f/642564/c/34625/s/3e01249e/sc/4/rc/1/rc.img" border="0"></a>

// Modifiers:
// g | find all matches rather than stopping after the first

// escape all double quotes within <html>
// 'mystring'.replace(/"/g, '&quot;');
// 'mystring'.replace(/'/g, '&quot;');
