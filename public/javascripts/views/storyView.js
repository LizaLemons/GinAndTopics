App.StoryView = Backbone.View.extend({
  className: 'story',
  initialize: function() {
    // console.log("New Story View");
    this.template = Handlebars.compile($('#story-template').html());
    this.modalTemplate = Handlebars.compile($('#story-modal-template').html());
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
  },
  events: {
    // click anywhere on model, showModal
    'click':'showModal'
  },
  showModal: function() {
    var modal = $('#modal').empty();
    modal.html(this.modalTemplate(this.model.toJSON()));
  }
});
