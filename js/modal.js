// open modal
var wrap = $('#wrapper'),
     btn = $('#addProduct'),
     modal = $('.cover, .modal, .content');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});