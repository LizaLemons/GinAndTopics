
App.SearchView = Backbone.View.extend({
  el: '#search',

  events: {
    'click #search-button': 'find'
  },

  find: function() {
    // Perform Find API call
    // ==> Put URLs (result) in an array
    // Loop thru array, perform loadFxn

    // console.log($('#input').val());
    google.load("feeds", "1");
    var query = $('#input').val();
    console.log(query);
    // performs the Find API call on the query
    google.feeds.findFeeds(query, this.findDone);

  },

  findDone: function(result) {
    console.log(result);
    // typeof: result.entries = an array of URLs

    var storyCollection = new App.StoriesCollection();
    var search = "search";
    storyCollection.category = search;
    App.ViewsSearch = new App.StoriesCollectionView({collection: storyCollection});

    // loop through URLs
    for (var i = 0; i < result.entries.length; i++) {
      var url = result.entries[i];
      var storyModel = this.createModel(url);
    }
  },

  createModel: function(feedUrl) {
    var feed = new google.feeds.Feed(feedUrl);
    feed.setNumEntries(1);
    feed.load(function(result) {
      if (!result.error) {
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
          App.ViewsSearch.collection.add(storyModel);
        }
      }
        App.ViewsSearch.render();
      });
    }
  // google.setOnLoadCallback(find);

});
