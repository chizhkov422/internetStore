const clientBlock = document.getElementById('clientPanel');
const tableOrder = document.getElementById('tableOrder');

for ( let i = 0, len = localStorage.length; i < len; ++i ) {
	let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));

	//The product blocks are drawn
	if(returnObj.available && !returnObj.ordered){
		let product = document.createElement('div');
		product.className = "product";
		product.id = localStorage.key( i );

		let description = document.createElement('div');
		description.className = "description";

		let price = document.createElement('div');
		price.className = "price";

		let h1 = document.createElement('h1');
		let h3 = document.createElement('h3');
		let h4 = document.createElement('h4');

		let addButton = document.createElement('button');
		addButton.className = "addButton";
		addButton.id = localStorage.key( i );
		returnObj.selected ? 
			addButton.style.display = "none" :
			addButton.style.display = "block";


		let deleteButton = document.createElement('button');
		deleteButton.className = "deleteButton";
		deleteButton.id = localStorage.key( i );
		returnObj.selected ? 
			deleteButton.style.display = "block" :
			deleteButton.style.display = "none";

		addButton.onclick =function(){
			let object = JSON.parse(localStorage.getItem(event.target.parentNode.parentNode.id)); 
			object.selected = true;
			let serial = JSON.stringify(object);
			localStorage.setItem(event.target.parentNode.parentNode.id, serial);
			addButton.style.display = "none";
			deleteButton.style.display = "block";
			alert("Product added to basket");
			};
		deleteButton.onclick =function(){
			let object = JSON.parse(localStorage.getItem(event.target.parentNode.parentNode.id)); 
			object.selected = false;
			let serial = JSON.stringify(object);
			localStorage.setItem(event.target.parentNode.parentNode.id, serial);
			deleteButton.style.display = "none";
			addButton.style.display = "block";
			alert("Product is removed from the basket");
			};

		h3.appendChild(document.createTextNode(returnObj.name));
		h4.appendChild(document.createTextNode(returnObj.description));
		h1.appendChild(document.createTextNode(returnObj.price + "$"));
		addButton.appendChild(document.createTextNode("+"));
		deleteButton.appendChild(document.createTextNode("x"));

		description.appendChild(h3);
		description.appendChild(h4);

		price.appendChild(h1);
		price.appendChild(addButton);
		price.appendChild(deleteButton);

		product.appendChild(description);
		product.appendChild(price);

		clientBlock.appendChild(product);
	}
}

//handler onclick for purchase
const buy = () => {
	event.preventDefault();
	const deleteButton = document.getElementsByClassName('deleteButton');
	const addButton = document.getElementsByClassName('addButton');
	const customer = {
		name : document.getElementById('customerName').value,
		surname : document.getElementById('customerSurname').value,
		phone : document.getElementById('customerPhone').value
	}
	const btnBuy = document.getElementsByClassName('btnBuy');

	if((customer.name === "") || (customer.surname === "") || (customer.phone === "")){
		alert("Fill in all the fields");
	}else if((/\d/.test(customer.name)) || (/\d/.test(customer.surname))){
			alert("Name and surname must consist of letters");
		}else{
			for ( let i = 0, len = localStorage.length; i < len; ++i ) {
				let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
				if(returnObj.selected){
					for(let unit of deleteButton){
						if(unit.id === localStorage.key( i )){
							unit.style.display = "none";
						}
					}
					for(let unit of addButton){
						if(unit.id === localStorage.key( i )){
							unit.style.display = "block";
						}
					}
					
					returnObj.selected = false;
					let serial = JSON.stringify(returnObj);
					localStorage.setItem(localStorage.key( i ), serial);
					returnObj.ordered = true;
					returnObj.customer = customer;
					serial = JSON.stringify(returnObj);
					localStorage.setItem(ID(), serial);
				}
			}
			document.getElementById('customerName').value = "";
			document.getElementById('customerSurname').value = "";
			document.getElementById('customerPhone').value = "";

			modal.fadeOut();
			location.reload();
		}
	
}