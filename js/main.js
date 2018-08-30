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
		// let td6 = document.createElement('TD');
		// td6.innerHTML += '<button>&#128394;</button>';
		// td6.childNodes[0].id = "editBtn";
		let td7 = document.createElement('TD');
		td7.innerHTML += '<button>X</button>';
		td7.childNodes[0].onclick = function(){ table.deleteRow(this.parentNode.parentNode.rowIndex); localStorage.removeItem(localStorage.key(i)); };
		
		
		tr.appendChild(td1); 
		tr.appendChild(td2); 
		tr.appendChild(td3); 
		tr.appendChild(td4); 
		tr.appendChild(td5);
		// tr.appendChild(td6); 
		tr.appendChild(td7); 
		table.appendChild(tr)
	}

let ID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

let additionOfGoods = (id) => {
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
	
	localStorage.setItem(id, serialObj);	
}


let switchMode = (str) => {
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
 

