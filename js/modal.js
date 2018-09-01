let wrap = $('.wrapper'),
    wrapBasket = $('#wrapperBasket'),
    btnCreate = $('#addProduct'),
    btnBasket = $('#goToBasket'),
    btnEdit = $('.editBtn'),
    modal = $('.cover, .modal, .content, .contentBasket'),
    code = $('#formCode'),
    name = $('#formName'),
    price = $('#formPrice'),
    check = $('#formAvailable'),
    description = $('#formDescription'),
    costHTML = $('#orderCost'),
    cost = 0;

//Calling the modal window to create a product
btnCreate.on('click', () => {
  modal.fadeIn();
  sessionStorage.setItem('id', ID());

  code.val("");
  name.val("");
  price.val("");
  description.val("");
  check.prop('checked', false);
});


btnBasket.on('click', () => {
  modal.fadeIn();
  
  for ( let i = 0, len = localStorage.length; i < len; ++i ) {
    let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
    if(returnObj.selected){
      let tr = document.createElement('TR');
      let td1 = document.createElement('TD');
      td1.appendChild(document.createTextNode(returnObj.name));
      let td2 = document.createElement('TD');
      td2.appendChild(document.createTextNode(returnObj.price + "$"));

      tr.appendChild(td1); 
      tr.appendChild(td2); 

      tableOrder.appendChild(tr)

      cost += parseInt(returnObj.price, 10);
    }
  }
});

//Calling the modal window for product editing
btnEdit.click(() => {
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
    let select = $('.content, .contentBasket');
    if ($(event.target).closest(select).length)
      return;
    for(let i = 1; i<tableOrder.rows.length; ++i){
      tableOrder.deleteRow(i);
    }
    modal.fadeOut();
    wrap.unbind('click');
  });
});