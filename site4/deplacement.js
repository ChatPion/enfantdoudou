     var a = 1001;
	 var b = 1001;
function move(pEvent)
{
	//deplacement
if(pEvent.keyCode==38 && a>1010)
  {
	
	 if(a==1075)
	  {a=1075;	  
	  }
	 else if(a==1056)
	  {a=1056;
	  }  
	 else if(a==1018)
	  {a=1018;
	  }
	   else if(a==1019)
	  {a=1019;
	  }
	  else if(a==1030)
	  {a=1030;
	  }
	  else if(a==1077)
	  {a=1077;
	  }
	 else{
		  a=a-10;
	 document.getElementById("a"+a).innerHTML="<img src=man.PNG>";
	  document.getElementById("a"+b).innerHTML="<img src=invisible.PNG>";
	  b = a;}
	  	  
 }
  
  if(pEvent.keyCode==40 && a<1091)
  {
	  if(a==1008)
	  {a=1008;	  
	  }
	 else if(a==1009)
	  {a=1009;
	  }  
	   else if(a==1010)
	  {a=1010;
	  }
	   else if(a==1016)
	  {a=1016;
	  }
	  else if(a==1045)
	  {a=1045;
	  }
	  else if(a==1047)
	  {a=1047;
	  }
	  else if(a==1077)
	  {a=1077;
	  }
	  else if(a==1084)
	  {a=1084;
	  }
	 
	 else{
		 a=a+10;
	  document.getElementById("a"+a).innerHTML="<img src=man.PNG>";
	  document.getElementById("a"+b).innerHTML="<img src=invisible.PNG>";
	  b=a;}}
	  
	  

if(pEvent.keyCode==39)
  {
	   if(a==1010||a==1020||a==1030||a==1040||a==1050||a==1060||a==1070||a==1080||a==1090||a==1100)
	   {
	      a == a;
	   }
	   else
	   { 
		 if(a==1025)
	  {a=1025;	  
	  }
	 else if(a==1035)
	  {a=1035;
	  }  
	   else if(a==1045)
	  {a=1045;
	  }
	   else if(a==1054)
	  {a=1054;
	  }
	  else if(a==1056)
	  {a=1056;
	  }
	   else if(a==1066)
	  {a=1066;
	  }
	   else if(a==1064)
	  {a=1064;
	  }
	  else if(a==1083)
	  {a=1083;
	  }
	   else if(a==1093)
	  {a=1093;
	  }
	   else if(a==1096)
	  {a=1096;
	  }
	   else if(a==1086)
	  {a=1086;
	  } 
	  else if(a==1019)
	  {a=1019;
	  }
	 else{
		a=a+1;
	  document.getElementById("a"+a).innerHTML="<img src=man.PNG>";
	  document.getElementById("a"+b).innerHTML="<img src=invisible.PNG>";
	  b=a;
	   }}
}
 if(pEvent.keyCode==37)
  {
	   if(a==1001||a==1011||a==1021||a==1031||a==1041||a==1051||a==1061||a==1071||a==1081||a==1091)
	   {
	      a == a;
	   }
	   else
	   {
		   if(a==1084)
	  {a=1084;	  
	  }
	 else if(a==1068)
	  {a=1068;
	  }  
	   else if(a==1088)
	  {a=1088;
	  }
	   else if(a==1098)
	  {a=1098;
	  }
	  else if(a==1056)
	  {a=1056;
	  }
	   else if(a==1066)
	  {a=1066;
	  }
	   else if(a==1095)
	  {a=1095;
	  }
	  else if(a==1027)
	  {a=1027;
	  }
	   else if(a==1037)
	  {a=1037;
	  }
	   else if(a==1047)
	  {a=1047;
	  }
	   else if(a==1058)
	  {a=1058;
	  }
	 else{
		a=a-1;
	  document.getElementById("a"+a).innerHTML="<img src=man.PNG>";
	  document.getElementById("a"+b).innerHTML="<img src=invisible.PNG>";
	  b=a;
	   }}
}
  
  }
  //changer l'image et le texte
  function specialieu(){
  if(a==1005){
        direction.text_lieu.value="La gare";
		direction.show_lieu.src="tite_image/gare.PNG";}
 else if(a==1042){
        direction.text_lieu.value="Chez Coinkoin";
		direction.show_lieu.src="tite_image/coinkoin.PNG";}
		else if(a==1023){
        direction.text_lieu.value="Chez Toi";
		direction.show_lieu.src="tite_image/maison.PNG";}
		else if(a==1028){
        direction.text_lieu.value="Chez Pigly";
		direction.show_lieu.src="tite_image/pigly.PNG";}
        else if(a==1069){
        direction.text_lieu.value="Chez Chétamège";
		direction.show_lieu.src="tite_image/chetamege.PNG";}
		else if(a==1089){
        direction.text_lieu.value="Chez Draco";
		direction.show_lieu.src="tite_image/draco.PNG";}	
  else{direction.text_lieu.value="";
  direction.show_lieu.src="invisible.PNG";}
  }
  function changelieu(){
	  if(a==1042){
	  document.getElementById("a1000").style.display='none';
	  document.getElementById("Coinkoin").style.display='inline';
	  document.getElementById("select_lieu").style.display='none';
	  document.getElementById("select_lieu_out").style.display='inline';
	  }
 }
 function changeimg(masc,affich){
	  document.getElementById(masc).style.display='none';
	  document.getElementById(affich).style.display='inline';
 }