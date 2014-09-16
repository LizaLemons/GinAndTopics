
App.SearchView = Backbone.View.extend({
  el: '#search',
  initialize: function() {
    this.template = Handlebars.compile($('#category-template').html());
  },
  render: function(category) {
    this.$('#searched-content').html(App.ViewsSearch.el);
  },
  events: {
    'click #search-button': 'find'
  },
  find: function() {
    google.load("feeds", "1");
    var query = $('#input').val();
    console.log(query);
    google.feeds.findFeeds(query, this.findDone.bind(this));
  },
  findDone: function(result) {
    // typeof: result.entries = an array of URLs
    var storyCollection = new App.StoriesCollection();
    // var search = "Search Results";
    var query = $('#input').val();
    storyCollection.category = query;
    App.ViewsSearch = new App.StoriesCollectionView({collection: storyCollection});
    // loop through URLs
    // result =
    for (var i = 0; i < result.entries.length; i++) {
      var url = result.entries[i].url;
      var storyModel = this.createModel(url);
    }
  },
  createModel: function(feedUrl) {
    var feed = new google.feeds.Feed(feedUrl);
    feed.setNumEntries(1);
    console.log(feedUrl, feed);
    feed.load(function(result) {
      if (!result.error) {
        // looping thru one URL's stories, creates model for each
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
          console.log(storyModel)
          App.ViewsSearch.collection.add(storyModel);
        }
      }
      App.ViewsSearch.render();
    });
    this.render();
  }
  // google.setOnLoadCallback(find);
});
