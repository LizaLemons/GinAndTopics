App.StoriesCollection = Backbone.Collection.extend({
  model: App.StoryModel,
  initialize: function() {
    console.log('New story collection');
  }

});
