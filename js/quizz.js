function validation1() {
	let reponse1 = document.getElementById('quizz').value;

	if (reponse1 == "beaufort") {
		alert("You are win !");
	}

	else {
		alert("Vous avez mis la mauvaise réponse :/");
	}


}


function validation2() {

	if (document.getElementById('agur').checked) {
		alert("Win Win Win AGAIIIIN !")
	}

	else {
		bootbox.alert("Vous etes sacrément nul XwX");
	}
}

