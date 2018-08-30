let wrap = $('#wrapper'),
     btnCreate = $('#addProduct'),
     btnEdit = $('#editBtn'),
     modal = $('.cover, .modal, .content');

btnCreate.on('click', function() {
  modal.fadeIn();
  sessionStorage.setItem('id', ID());
});
// btnEdit.on('click', function() {
//   modal.fadeIn();
//   // console.log(localStorage.key(0));
//   console.log(this.parentNode.parentNode.rowIndex);
// });


$('.modal').click(function() {
  wrap.on('click', function(event) {
    let select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});