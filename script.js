//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  =
document.querySelector('fieldset');

const userName       = document.getElementById("name");

const emailAddress   = document.getElementById('mail');

const option           = document.getElementsByTagName('option');

const select					 = document.querySelector("#title")

const jobAutre         = document.querySelector("#other-title")

const selectColor		 = document.querySelector('#colors-js-puns')

const activitesField        = document.querySelector('.activities');

const incrireTitre             = activitesField.firstElementChild;

const activitesCheckboxes      = activitesField.querySelectorAll("input[type=checkbox]");

let totalAct = 0;




/*********************création d'éléments**************/

// élément jobrole
document.getElementById('title').insertAdjacentHTML("afterend",
    '<input type="text" name="" value="" id="input">');

var inputElt = document.getElementById('input');
inputElt.style.width = '50%';
inputElt.style.height = '10px';
inputElt.style.backgroundColor = '#c1deeb';
inputElt.style.display = "none";
inputElt.style.marginLeft = '20px';

//élément activite prix total
const totalPrix = document.createElement('h4');
totalPrix.id = 'total-price';
totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
activitesField.appendChild(totalPrix);
/**************************fonctions*******************/


//declarations de mes fonctions
function verifEmail() {
	if
    (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}$/.test(emailAddress.value)) { // si l'email n'est pas correct:
	    emailAddress.style.borderColor = "red";
	    return false;
  } else {//si l'email est correct:
	  emailAddress.style.borderColor = "green";
	  return true;
	}
}
//role travail
option[5].id = "other-title";
// function pout l'input de jobrole
function afficherInput() {
	var autreJob = (jobAutre) => {
	  if (jobAutre.toLowerCase()=== "other") {
	    inputElt.style.display = "";
	  }else {
	  	inputElt.style.display = "none";
	  }
	}

	inputElt.addEventListener("focus", function () {
	    inputElt.style.backgroundColor = 'white';
	});

	select.addEventListener('change', () => {
	    let jobAutre = select.value;
	    autreJob(jobAutre);
});
}

//fonction choix des t-shirt
function ajoutId() {
	option[10].setAttribute("value", "theme");
	option[11].id = "jspuns";
	option[12].id = "heartjs";
}
function partie1Tshirt() {
	option[13].setAttribute("selected", true);
	for (var i = 14; i < 17; i++) {
		option[i].style.display = '';
	}
	for (var i = 17; i < 20; i++) {
		option[i].style.display = 'none';
	}
}
function partie2Tshirt() {
	option[13].setAttribute("selected", true);
	for (var i = 17; i < 20; i++) {
		option[i].style.display = '';
	}
	for (var i = 14; i < 17; i++) {
		option[i].style.display = 'none';
	}
}
function switchChoixTshirt() {
	switch (form.elements.design.value) {
		case "theme":
			selectColor.style.display = "none";
			break;
		case "js puns":
			selectColor.style.display = "";
			partie1Tshirt();
			break;
		case "heart js":
			selectColor.style.display = "";
			partie2Tshirt();
			break;
		default:
				selectColor.style.display = "none";
	}
}

//rubrique activite
var checkActivite = (activite1, activite2) => {
	if (activite1.checked) {
		activite2.setAttribute("disabled", true);
	}
}
var uncheckActivite = (activite1, activite2) => {
	if (!activite1.checked) {
		activite2.removeAttribute("disabled");
	}
}
// desactivation des choix et prix
var inscrireAuActivites = (inputChecked) => {
	//1er couple
	let jsFrameworks =
	document.querySelector ('input[name=js-frameworks]');
	let express = document.querySelector('input[name=express]');
	//2ème couple
	let jsLibs = document.querySelector('input[name=js-libs]');
	let node = document.querySelector('input[name=node]');

	if (inputChecked.checked) {
			activitePrix = parseInt(inputChecked.className);
			totalAct = totalAct + activitePrix;
			totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
			checkActivite(jsFrameworks, express);
			checkActivite(express, jsFrameworks);
			checkActivite(jsLibs, node);
			checkActivite(node, jsLibs);
			console.log(activitePrix);
	} else {
			activitePrix = parseInt(inputChecked.className);
			totalAct = totalAct - activitePrix;
			totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
			uncheckActivite(jsFrameworks, express);
			uncheckActivite(express, jsFrameworks);
			uncheckActivite(jsLibs, node);
			uncheckActivite(node, jsLibs);
	}
};



/*********************eventlistener*********************/

//modification et verification du name

userName.focus();
userName.setAttribute("placeholder", "Entrez votre nom");

userName.addEventListener("blur", function () {
    document.getElementById("name").setAttribute("placeholder", "");
});

userName.addEventListener("input", function (e) {
    var name = e.target.value;
    var couleurBlock = "red";
    if (name.length >= 2) {
        couleurBlock = "green";
    }
    userName.style.borderColor = couleurBlock;
});


// modification et verification de l'email
emailAddress.addEventListener("focus", function () {
    document.getElementById("mail").setAttribute("placeholder", "Entrez votre email");
});

emailAddress.addEventListener("blur", function () {
    document.getElementById("mail").setAttribute("placeholder", "");
});

emailAddress.addEventListener("input", function (e) {
        verifEmail();
});

// rubrique role travail
//appelle de la fonction afficherInput pour jobrole
afficherInput();


//rubrique t-shirt
selectColor.style.display = "none";
ajoutId();
form.addEventListener("change", function (e) {
	switchChoixTshirt();
e.preventDefault();
});

//rubrique activité
activitesField.addEventListener('change', (e) => {
    let target = e.target
    inscrireAuActivites(target);
});
