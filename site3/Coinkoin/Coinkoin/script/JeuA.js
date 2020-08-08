function verifier(form){
if (form.b.checked)
form.t.value="Bravo!";
else  
form.t.value="Ce n'est pas la bonne réponse!";
}

function quitter(){
self.close();}