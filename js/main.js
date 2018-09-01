//Сreation of id
const ID = () => {
	const date = new Date;
  	return date.getTime();
};



//Switching modes
const switchMode = (str) => {
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
 

