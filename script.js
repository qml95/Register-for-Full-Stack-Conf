//declaration des varialbles globales

var form           = document.querySelector("form");

var firstFieldset  =
document.querySelector('fieldset');

var userName       = document.getElementById("name");

var emailAddress   = document.getElementById('mail');

var option           = document.getElementsByTagName('option');

var select					 = document.querySelector("#title")

var jobAutre         = document.querySelector("#other-title")

var selectColor		 = document.querySelector('#colors-js-puns')

var activitesField        = document.querySelector('.activities');

var incrireTitre             = activitesField.firstElementChild;

var activitesCheckboxes      = activitesField.querySelectorAll("input[type=checkbox]");

var totalAct = 0;

var paymentField           = document.querySelector('.paymentContainer');
var paymentSelect             = document.querySelector('#payment');
var creditPayment         = document.querySelector('#credit-card');
var paypalPayment             = document.querySelector(".paypal");
var bitcoinPayment            = document.querySelector(".bitcoin");
var credit = paymentSelect.children;


var cardNumber                = document.querySelector('#cc-num');
var zipNumber                 = document.querySelector('#zip');
var cvvNumber                 = document.querySelector("#cvv");



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
var totalPrix = document.createElement('h4');
totalPrix.id = 'total-price';
totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
activitesField.appendChild(totalPrix);

/***********modification du dom par defaut*********/
option[5].id = "other-title";


creditPayment.style.display     = "block";
paypalPayment.style.display         = "none";
bitcoinPayment.style.display        = "none";
credit[1].setAttribute('selected', true);
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
	    var jobAutre = select.value;
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
	var jsFrameworks =
	document.querySelector ('input[name=js-frameworks]');
	var express = document.querySelector('input[name=express]');
	//2ème couple
	var jsLibs = document.querySelector('input[name=js-libs]');
	var node = document.querySelector('input[name=node]');

	if (inputChecked.checked) {
			activitePrix = parseInt(inputChecked.className);
			totalAct = totalAct + activitePrix;
			totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
			checkActivite(jsFrameworks, express);
			checkActivite(express, jsFrameworks);
			checkActivite(jsLibs, node);
			checkActivite(node, jsLibs);

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
var checkValidation = (inputTargerted) => {
    var status;
    var myArray = [];
    for (var i = 0; i < inputTargerted.length; i++) {
        if (!inputTargerted[i].checked) {
            myArray.push(myArray);
        }
    }
    if (myArray.length === inputTargerted.length) {
        inscrireTitre.textContent = "Register for Activities: (please chooese at least one activity)";
        inscrireTitre.style.color = "#3D0B1A";
        inscrireTitre.style.textDecoration = "underline";
        return false;
    }
    inscrireTitre.textContent = "Register for Activities: ";
    inscrireTitre.style.color = "#000";
    inscrireTitre.style.textDecoration = "none";
    return true;
}



//rubrique paiement

function switchChoixPaiement() {
	switch (form.elements.payment.value) {
		case "credit card":
		creditPayment.style.display     = "block";
		paypalPayment.style.display     = "none";
		bitcoinPayment.style.display    = "none";
			break;
		case "paypal":
		creditPayment.style.display     = "none";
		paypalPayment.style.display     = "block";
		bitcoinPayment.style.display    = "none";
			break;
		case "bitcoin":
		creditPayment.style.display     = "none";
		paypalPayment.style.display     = "none";
		bitcoinPayment.style.display    = "block";
			break;
		default:
		creditPayment.style.display     = "none";
		paypalPayment.style.display     = "none";
		bitcoinPayment.style.display    = "none";

	}
}




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
    var target = e.target
    inscrireAuActivites(target);
});

//rubrique paiement
form.addEventListener("change", function (e) {
	switchChoixPaiement();
e.preventDefault();
});

cardNumber.addEventListener("input", function (e) {
    var number = e.target.value;
    var couleurBlock = "red";
    if (number.length === 12 && (/[0-9]/.test(cardNumber.value) )) {
        couleurBlock = "green";
    }
    cardNumber.style.borderColor = couleurBlock;
});
zipNumber.addEventListener("input", function (e) {
    var name = e.target.value;
    var couleurBlock = "red";
    if (name.length === 3 && (/[0-9]/.test(zipNumber.value) )) {
        couleurBlock = "green";
    }
    zipNumber.style.borderColor = couleurBlock;
});
cvvNumber.addEventListener("input", function(e) {
  var name = e.target.value;
  var couleurBlock = 'red';
  if (name.length === 5 && (/[0-9]/.test(cvvNumber.value) )) {
    couleurBlock = 'green';
  }
  cvvNumber.style.borderColor = couleurBlock;
})
