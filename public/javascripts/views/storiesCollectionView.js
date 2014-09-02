App.StoriesCollectionView = Backbone.View.extend({
  className: 'collections',
  initialize: function() {
    console.log("New Collection View");
    // listen for added models, when - create model view
    this.listenTo(this.collection, 'add', this.createSingleView);
    $('#feed').append(this.el);
  },
  events: {
    // click on collection h1, showCategoryStories
  },
  createSingleView: function(newModel) {
    var singleView = new App.StoryView({ model: newModel })
    this.$el.append(singleView.el)
  },
  showCategoryStories: function() {
    // App.router.navigate('')
    // trigger CSS to show more?

  }
});
