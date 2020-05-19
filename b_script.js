function sizefl(){
	var sizewi=window.innerWidth;
	console.log(sizewi);
	if(sizewi<768){
		// document.getElementById("b_con1").style.float="none";
		// document.getElementById("b_con2").style.float="none";
		document.getElementById("b_con1").style.width="99%";
		
		document.getElementById("b_con2").style.width="99%";
	}else{
		// document.getElementById("b_con1").style.float="left";
		// document.getElementById("b_con2").style.float="left";
		document.getElementById("b_con1").style.width="72.5%";
		document.getElementById("b_con2").style.width="26.15%";
		
	}
}
window.onresize=function(){
	sizefl();
}
sizefl();