document.getElementById("quizz1").style.visibility = "hidden";
document.getElementById("quizz2").style.visibility = "hidden";
document.getElementById("quizz3").style.visibility = "hidden";

document.getElementById("quizz4").style.visibility = "hidden";
document.getElementById("quizz5").style.visibility = "hidden";
document.getElementById("quizz6").style.visibility = "hidden";

document.getElementById("quizz7").style.visibility = "hidden";
document.getElementById("quizz8").style.visibility = "hidden";
document.getElementById("quizz9").style.visibility = "hidden";

function hide()
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

function view()
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

function send()
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
  }

  else {
    alert("Vert pas bon :/")
  }

  if (r4 == 4 & r5 == 5 & r6 == 6) {
    alert("Bravo ! Les couleurs rouge sont correct !");
  }

  else {
    alert("Rouge pas bon :/")
  }

  if (r7 == 7 & r8 == 8 & r9 == 9) {
    alert("Bravo ! Les couleurs bleu sont correct !");
  }

  else {
    alert("Bleu pas bon :/")
  }

}

function reset() 
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