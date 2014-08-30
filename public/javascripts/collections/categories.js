categoryCollection = Backbone.Collection.extend({
  model: storyModel,
  // url: '',
  initialize: function() {
    console.log("New Category");
  },
  save: function() {
    this.each(function(model){
      if(!model.has('id') || model.hasChanged()) { model.save(); }
    }, this)
  }
});
