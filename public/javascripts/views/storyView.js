App.StoryView = Backbone.View.extend({
  className: 'story',
  initialize: function() {
    // console.log("New Story View");
    this.template = Handlebars.compile($('#story-template').html());
    this.modalTemplate = Handlebars.compile($('#story-modal-template').html());
    this.carouselTemplate = Handlebars.compile($('#carousel-template').html());
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
  },
  events: {
    // click anywhere on model (headline), showModal
    'click':'showModal'
  },
  showModal: function() {
    // create div#blackout; appendTo body
    $('<div id="blackout"></div>').appendTo('body');

    // CSS for div#blackout
    var pageHeight = $(document).height();
    var pageWidth = $(window).width();

    $('#blackout').css({
      'position':'absolute',
      'top':'0',
      'left':'0',
      'background-color':'rgba(0,0,0,0.6)',
      'height':pageHeight,
		  'width':pageWidth,
		  'z-index':'10'
    });

    // create div#modalBox; appendTo #blackout
    var modalBox = $('<div id="modalBox"></div>').appendTo($('#blackout'));
    $(modalBox).empty();

    // empty div#modalBox; set HTML as modalTemplate
    // var modalBox = $('#modalBox').empty();
    modalBox.html(this.modalTemplate(this.model.toJSON()));

    modalBox.css({
    'background-color':'rgba(255,255,255,0.7)',
		'position':'fixed',
		'border':'3px',
    'border-style':'solid',
    'border-color': '#1F1F2E',
		'z-index':'50',
		'height':'px',
		'width':'px',
    // Positioning
    'top':'25%',
    'left':'1%',
    // Scrolling
    'overflow':'auto',
    'padding':'50px'
    });

    // $('#story-modal-template').css({
    //
    // });

    $("a").css({
      'text-decoration': 'none',
      'color':'#666699'
    });

    $('#title').css({
      'font-size':'20px'
    });

    $('.close').css({
      'color':'black',
      'text-decoration': 'none'
    });

    // Close modal
    $('.close').click(function() {
      $('#blackout').fadeOut().remove();
    });

  }
});
