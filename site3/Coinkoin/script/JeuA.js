function verifier(form){
if (form.b.checked)
form.t.value="Bravo!";
else  
form.t.value="Ce n'est pas la bonne r�ponse!";
}

function quitter(){
self.close();}