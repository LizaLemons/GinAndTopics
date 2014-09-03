App.StoriesCollectionView = Backbone.View.extend({
  className: '.collection',
  initialize: function() {
    console.log("New Collection View");
    // listen for added models, when - create model view
    this.listenTo(this.collection, 'add', this.addOne);
    $('#feed').append(this.$el);
    // this.template = Handlebars.compile($('#category-template').html());
    // this.render();
  },
  render: function(categories) {
    this.$el.empty();
    this.$el.html(this.template());
  },
  events: {
    // click on collection h1, showCategoryStories
    
    // click event on search button
  },
  addOne: function(newModel) {
    var singleView = new App.StoryView({ model: newModel })
    this.$el.append(singleView.el);
  },
  addAll: function() {
    this.collection.forEach(this.addOne, this);
  }
  // showCategoryStories: function() {
  //   // App.router.navigate('') - need?
  //   // trigger CSS to show more stories
  // }
});
