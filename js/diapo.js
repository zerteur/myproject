var i = 0; var path0 = new Array(); var path1 = new Array(); const timer = 3500;

// LISTE DES IMAGES 
path0[0] = "./../assets/img/c1.jpg"; 
path0[1] = "./../assets/img/c2.jpg"; 
path0[2] = "./../assets/img/c3.jpg"; 

path1[0] = "./../assets/img/1.jpg"; 
path1[1] = "./../assets/img/2.jpg"; 
path1[2] = "./../assets/img/3.jpg"; 

path2[0] = "./../assets/img/p1.jpg"; 
path2[1] = "./../assets/img/p2.jpg"; 
path2[2] = "./../assets/img/p3.jpg"; 

// FONCTION QUI CHANGE LA SOURCE DES IMAGES

function cheese1() 
{ 
document.getElementById('cheese1').src = path0[i]; 
if(i < path0.length - 1) i++; 
else i = 0; 
setTimeout("cheese1()",timer); 
} 

function cheese2() 
{ 
document.getElementById('cheese2').src = path1[i]; 
if(i < path1.length - 1) i++; 
else i = 0; 
setTimeout("cheese2()",timer); 
} 



window.onload=cheese1; 
window.onload=cheese2; 


