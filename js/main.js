let adminBlock = document.getElementById('adminPanel');
let clientBlock = document.getElementById('clientPanel');
let table = document.getElementById('tableProduct').getElementsByTagName("TBODY")[0];

for ( let i = 0, len = localStorage.length; i < len; ++i ) {
		let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
		let resultAvailable;
	  		
	  	let tr = document.createElement('TR');
		let td1 = document.createElement('TD');
		td1.appendChild(document.createTextNode(returnObj.code));
		let td2 = document.createElement('TD');
		td2.appendChild(document.createTextNode(returnObj.name));
		let td3 = document.createElement('TD');
		td3.appendChild(document.createTextNode(returnObj.description));
		let td4 = document.createElement('TD');
		td4.appendChild(document.createTextNode(returnObj.price));
		let td5 = document.createElement('TD');
		returnObj.available == true ? 
		td5.appendChild(document.createTextNode("+")) :
		td5.appendChild(document.createTextNode("-"));
		
		tr.appendChild(td1); 
		tr.appendChild(td2); 
		tr.appendChild(td3); 
		tr.appendChild(td4); 
		tr.appendChild(td5); 
		table.appendChild(tr)
	}
	
let ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

function additionOfGoods(){
	let name = document.getElementById('formName').value;
	let code = document.getElementById('formCode').value;
	let price = document.getElementById('formPrice').value;
	let available = document.getElementById('formAvailable').checked;
	let description = document.getElementById('formDescription').value;

	let object = {
		name : name,
		code : code,
		price : price,
		available : available,
		description : description
	};


	let serialObj = JSON.stringify(object);
	
	localStorage.setItem(ID(), serialObj);
	

	
}


function switchMode(str){
	switch(str){
		case 'admin' : 
			clientBlock.style.display = "none";
			adminBlock.style.display = "block";
			break
		case 'client' :
			adminBlock.style.display = "none";
			clientBlock.style.display = "block";
			break
	}
}
 

