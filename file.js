 
 
 
 let dropDowns = document.querySelectorAll('.drop-menu');
dropDowns.forEach(a => {
	a.addEventListener('click', function(){
		if(this.classList.contains('visible')){
		a.classList.remove('visible')
	}else{
		dropDowns.forEach(e =>{
			e.classList.remove('visible')
		})
		this.classList.add('visible')
	}
	})
	
})