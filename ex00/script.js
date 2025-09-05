let dollar = document.getElementById('dollar');
let dirham = document.getElementById('dirham');

dollar.style.display = "block";

dollar.onkeyup = function (){
	dirham.value = dollar.value * 10;
}

dirham.onkeyup = _ =>(dollar.value = dirham.value / 10);