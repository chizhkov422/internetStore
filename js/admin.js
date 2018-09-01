const adminBlock = document.getElementById('adminPanel');
const table = document.getElementById('tableProduct').getElementsByTagName("TBODY")[0];

//Drawing a table with data from local storage
for ( let i = 0, len = localStorage.length; i < len; ++i ) {
	let returnObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
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
	let td6 = document.createElement('TD');
	td6.innerHTML += '<button>&#128394;</button>';
	td6.childNodes[0].classList.add('editBtn');
	// let td6 = document.createElement('TD');
	// td6.innerHTML += '<img src="' + returnObj.file + '"></img>';
	let td7 = document.createElement('TD');
	td7.innerHTML += '<button>X</button>';
	td7.childNodes[0].onclick = function(){ table.deleteRow(this.parentNode.parentNode.rowIndex); localStorage.removeItem(localStorage.key(i)); };
		
			
	tr.appendChild(td1); 
	tr.appendChild(td2); 
	tr.appendChild(td3); 
	tr.appendChild(td4); 
	tr.appendChild(td5);
	tr.appendChild(td6); 
	tr.appendChild(td7); 
	table.appendChild(tr)
}

//Adding product data to local storage
const additionOfGoods = (id) => {
	let name = document.getElementById('formName').value;
	let code = document.getElementById('formCode').value;
	let price = document.getElementById('formPrice').value;
	let available = document.getElementById('formAvailable').checked;
	let description = document.getElementById('formDescription').value;
	let input = document.getElementById('uploadFile');
	// let urlFile;
	// if (input.files && input.files[0]) {
	//     let reader = new FileReader();

	//     reader.onload = function(e) {
	//       urlFile = e.target.result;
	//     }

	//     reader.readAsDataURL(input.files[0]);
 //  	}



	const object = {
		name : name,
		code : code,
		price : price,
		available : available,
		description : description,
		selected : false,
		// file : urlFile
	};


	let serialObj = JSON.stringify(object);
	
	localStorage.setItem(id, serialObj);	
}
