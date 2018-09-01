//Сreation of id
let ID = () => {
	let date = new Date;
  	return date.getTime();
};



//Switching modes
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
 

