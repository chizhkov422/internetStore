let wrap = $('#wrapper'),
     btnCreate = $('#addProduct'),
     btnEdit = $('.editBtn'),
     modal = $('.cover, .modal, .content'),
     code = $('#formCode'),
     name = $('#formName'),
     price = $('#formPrice'),
     check = $('#formAvailable'),
     description = $('#formDescription');

//Calling the modal window to create a product
btnCreate.on('click', () => {
  modal.fadeIn();
  sessionStorage.setItem('id', ID());
});

//Calling the modal window for product editing
btnEdit.click(() =>{
  let objectLocal = JSON.parse(localStorage.getItem(localStorage.key(event.target.parentNode.parentNode.rowIndex - 1)));

  modal.fadeIn();
  sessionStorage.setItem('id', localStorage.key(event.target.parentNode.parentNode.rowIndex - 1));

//filling fields with data from local storages
  code.val(objectLocal.code);
  name.val(objectLocal.name);
  price.val(objectLocal.price);
  description.val(objectLocal.description);
  check.prop('checked', objectLocal.available);
});

//closing the modal window
$('.modal').click(() => {
  wrap.on('click', (event) => {
    let select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});