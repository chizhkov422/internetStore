let clientBlock = document.getElementById('clientPanel');
let tableOrder = document.getElementById('tableOrder');

for ( let i = 0, len = localStorage.length; i < len; ++i ) {
	let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));

	//The product blocks are drawn
	if(returnObj.available){
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
		returnObj.selected ? 
			addButton.style.display = "none" :
			addButton.style.display = "block";


		let deleteButton = document.createElement('button');
		deleteButton.className = "deleteButton";
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

function buy() {
	let deleteButton = document.getElementsByClassName('deleteButton');
	let addButton = document.getElementsByClassName('addButton');
	for ( let i = 0, len = localStorage.length; i < len; ++i ) {
		let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
		if(returnObj.selected){
			deleteButton[i].style.display = "none";
			addButton[i].style.display = "block";
			returnObj.selected = false;
			let serial = JSON.stringify(returnObj);
			localStorage.setItem(localStorage.key( i ), serial);
		}
	}
modal.fadeOut();
}