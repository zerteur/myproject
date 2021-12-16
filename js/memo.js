var note = 0; var pts = 0;
function hide() // Cache les images affiche le questionnaire
{

  document.getElementById("1").src = "../assets/img/memo_images/white.png";
  document.getElementById("2").src = "../assets/img/memo_images/white.png";
  document.getElementById("3").src = "../assets/img/memo_images/white.png";

  document.getElementById("4").src = "../assets/img/memo_images/white.png";
  document.getElementById("5").src = "../assets/img/memo_images/white.png";
  document.getElementById("6").src = "../assets/img/memo_images/white.png";

  document.getElementById("7").src = "../assets/img/memo_images/white.png";
  document.getElementById("8").src = "../assets/img/memo_images/white.png";
  document.getElementById("9").src = "../assets/img/memo_images/white.png";

  document.getElementById("quizz1").style.visibility = "visible";
  document.getElementById("quizz2").style.visibility = "visible";
  document.getElementById("quizz3").style.visibility = "visible";

  document.getElementById("quizz4").style.visibility = "visible";
  document.getElementById("quizz5").style.visibility = "visible";
  document.getElementById("quizz6").style.visibility = "visible";

  document.getElementById("quizz7").style.visibility = "visible";
  document.getElementById("quizz8").style.visibility = "visible";
  document.getElementById("quizz9").style.visibility = "visible";
}

function view() // Affiche les images et cache le questionnaire
{

  document.getElementById("1").src = "../assets/img/memo_images/GREEN1.jpeg";
  document.getElementById("2").src = "../assets/img/memo_images/GREEN2.jpeg";
  document.getElementById("3").src = "../assets/img/memo_images/GREEN3.jpeg";

  document.getElementById("4").src = "../assets/img/memo_images/RED1.jpeg";
  document.getElementById("5").src = "../assets/img/memo_images/RED2.jpeg";
  document.getElementById("6").src = "../assets/img/memo_images/RED3.jpeg";

  document.getElementById("7").src = "../assets/img/memo_images/BLUE1.jpeg";
  document.getElementById("8").src = "../assets/img/memo_images/BLUE2.jpeg";
  document.getElementById("9").src = "../assets/img/memo_images/BLUE3.jpeg";

  document.getElementById("quizz1").style.visibility = "hidden";
  document.getElementById("quizz2").style.visibility = "hidden";
  document.getElementById("quizz3").style.visibility = "hidden";

  document.getElementById("quizz4").style.visibility = "hidden";
  document.getElementById("quizz5").style.visibility = "hidden";
  document.getElementById("quizz6").style.visibility = "hidden";

  document.getElementById("quizz7").style.visibility = "hidden";
  document.getElementById("quizz8").style.visibility = "hidden";
  document.getElementById("quizz9").style.visibility = "hidden";


  
}

function send() // Recolte les reponses des cases et utilise des IF pour voir si il a répondu juste ainsi fait une note basé sur les 3 parti (0/6.6/13.4/20) pas dautre notes possible.
{

  r1  =  document.getElementById('quizz1').value;
  r2  =  document.getElementById('quizz2').value;
  r3  =  document.getElementById('quizz3').value;

  r4  =  document.getElementById('quizz4').value;
  r5  =  document.getElementById('quizz5').value;
  r6  =  document.getElementById('quizz6').value;

  r7  =  document.getElementById('quizz7').value;
  r8  =  document.getElementById('quizz8').value;
  r9  =  document.getElementById('quizz9').value;
  alert(r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9);
  
  if (r1 == 1 & r2 == 2 & r3 == 3) {
    alert("Bravo ! Les couleurs verte sont correct !");
    pts+=1;
  }

  else {
    alert("Vert pas bon :/")
  }

  if (r4 == 4 & r5 == 5 & r6 == 6) {
    alert("Bravo ! Les couleurs rouge sont correct !");
    pts+=1;
  }

  else {
    alert("Rouge pas bon :/")
  }

  if (r7 == 7 & r8 == 8 & r9 == 9) {
    alert("Bravo ! Les couleurs bleu sont correct !");
    pts+=1;
  }

  else {
    alert("Bleu pas bon :/")
  }
  note= Math.round((pts / 3) * 100) / 100;  //ARONDIS LA NOTE POUR EVITER DE LIRE AU DELA DU CENTIEME
  note= Math.round((note*20) * 100) / 100;
  alert("Votre note pour l'instant est de : " + note + " sur 20");
  pts=0;
  note=0;

}

function reset()  // Renitialise le quiz du début.
{
                                                                                                    
document.getElementById('quizz1').value =  0;
document.getElementById('quizz2').value =  0;
document.getElementById('quizz3').value =  0;

document.getElementById('quizz4').value =  0;
document.getElementById('quizz5').value =  0;
document.getElementById('quizz6').value =  0;

document.getElementById('quizz7').value =  0;
document.getElementById('quizz8').value =  0;
document.getElementById('quizz9').value =  0;    
window.location.reload();                                                          

}