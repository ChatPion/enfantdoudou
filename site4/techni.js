function enter(){
if ((log.logine.value=="") || (log.password.value=="")){
        alert('Entre ton pseudo et ton mot de passe!');}
else if(log.logine.value==""){
	    alert('Entre ton pseudo!');}
else if(log.password.value==""){
        alert('Entre ton mot de passe!');
		}	
else{
	var pass = new Array(); 
	pass = log.password.value.split('/');
	name = log.logine.value;
	thefric = pass[0];
	thefric = thefric*1;
	thefric = thefric-1234;
	populari = pass[1];
	populari = populari*1;
	populari = populari/7;
document.getElementById('fric').value=thefric;
document.getElementById('popularity').value=populari;
document.getElementById('namme').value=name;
document.getElementById('login').style.display='none';
document.getElementById('a1000').style.display='inline';
document.getElementById('select_lieu').style.display='inline';
document.getElementById('descri').style.display='inline';
document.getElementById('table').style.display='inline';
}
}