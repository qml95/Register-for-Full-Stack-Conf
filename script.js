//declaration des varialbles globales

//variable sur le formulaire entier
var form           = document.querySelector("form");
var firstFieldset  = document.querySelector('fieldset');

//varialbles pour le name et l'email
var userName       = document.getElementById("name");
var emailAddress   = document.getElementById('mail');

// variable pour la partie jobrole
var option         = document.getElementsByTagName('option');
var select				 = document.querySelector("#title")
var jobAutre       = document.querySelector("#other-title")
var inputElt       = document.getElementById('other-job');

//variable pour la partie t-shirt
var selectColor    = document.querySelector('#colors-js-puns')

// varialbles pour la partie activitees
var activitesField = document.querySelector('.activities');
var inscrireTitre  = activitesField.firstElementChild;
var activitesCheckboxes   = activitesField.querySelectorAll("input[type=checkbox]");
var totalAct       = 0;

//varialbles pour la partie paiement
var paymentField   = document.querySelector('.paymentContainer');
var paymentSelect  = document.querySelector('#payment');
var creditPayment  = document.querySelector('#credit-card');
var paypalPayment  = document.querySelector(".paypal");
var bitcoinPayment = document.querySelector(".bitcoin");
var credit         = paymentSelect.children;

var cardNumber     = document.querySelector('#cc-num');
var zipNumber      = document.querySelector('#zip');
var cvvNumber      = document.querySelector("#cvv");



/*********************création d'éléments**************/

// élément jobrole
// document.getElementById('title').insertAdjacentHTML("afterend",
//     '<input type="text" name="" value="" id="input">');
//
// // REVIEW: Review Pourquoi pas directement dans le CSS ?
// var inputElt = document.getElementById('input');
// inputElt.style.width = '50%';
// inputElt.style.height = '10px';
// inputElt.style.backgroundColor = '#c1deeb';
// inputElt.style.display = "none";
// inputElt.style.marginLeft = '20px';
// // fin REVIEW

//élément activite prix total
var totalPrix = document.createElement('h4');
totalPrix.id = 'total-price';
totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
activitesField.appendChild(totalPrix);

/*******modification du dom par defaut*********/





//paiement
creditPayment.style.display         = "block";
paypalPayment.style.display         = "none";
bitcoinPayment.style.display        = "none";
credit[1].setAttribute('selected', true);


/******************fonctions*******************/

//declarations de mes fonctions

function verifName() {
  if (userName.value.length >= 2) {
      userName.style.borderColor = 'green';
      return true;
  } else {
    userName.style.borderColor = 'red';
    return false;
  }


}
//email
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
function afficherInput() {
  inputElt.style.display = "none";
	var autreJob = (jobAutre) => {
	  if (jobAutre.toLowerCase()=== "other") {
	    inputElt.style.display = "";
	  } else {
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
	for (var i = 14; i < 17; i++) {
		option[i].style.display = '';
	}
	for (var i = 17; i < 20; i++) {
		option[i].style.display = 'none';
	}
}
function partie2Tshirt() {
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
			selectColor.style.display = "initial";
			partie1Tshirt();
			break;
		case "heart js":
			selectColor.style.display = "initial";
			partie2Tshirt();
			break;
		default:
				selectColor.style.display = "none";
	}
  option[13].selected = true;
}

//rubrique activite
// REVIEW: Tu peux remplacer les arrow functions par des functions simples :) tel que :
    // function functionName() {
    //
    // }
function checkActivite(activite1, activite2) {
  if (activite1.checked) {
    activite2.setAttribute("disabled", true);
  }
}
function uncheckActivite(activite1, activite2) {
  if (!activite1.checked) {
    activite2.removeAttribute("disabled");
  }
}

// desactivation des choix et prix
function inscrireAuActivites(inputChecked) {
	//1er couple
	var jsFrameworks = document.querySelector ('input[name=js-frameworks]');
	var express      = document.querySelector('input[name=express]');
	//2ème couple
	var jsLibs       = document.querySelector('input[name=js-libs]');
	var node         = document.querySelector('input[name=node]');

	if (inputChecked.checked) {
			activitePrix          = parseInt(inputChecked.className);
			totalAct              = totalAct + activitePrix;
			totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
			checkActivite(jsFrameworks, express);
			checkActivite(express, jsFrameworks);
			checkActivite(jsLibs, node);
			checkActivite(node, jsLibs);

	} else {
			activitePrix          = parseInt(inputChecked.className);
			totalAct              = totalAct - activitePrix;
			totalPrix.textContent = "The total price of your order is: " + totalAct + "$";
			uncheckActivite(jsFrameworks, express);
			uncheckActivite(express, jsFrameworks);
			uncheckActivite(jsLibs, node);
			uncheckActivite(node, jsLibs);
	}
};

function checkValidation() {

    var myArray = [];
    for (var i = 0; i < activitesCheckboxes.length; i++) {
        if (!activitesCheckboxes[i].checked) {
            myArray.push(myArray);
        }
    }
    if (myArray.length === activitesCheckboxes.length) {
        inscrireTitre.textContent = "Register for Activities: (please chooese at least one activity)";
        inscrireTitre.style.color = "red";
        inscrireTitre.style.textDecoration = "underline";
        return false;
    } else{
    inscrireTitre.textContent = "Register for Activities: ";
    inscrireTitre.style.color = "#000";
    inscrireTitre.style.textDecoration = "none";
    return true;
  }


}

//rubrique paiement
function verifCardNumber() {
      if (cardNumber.value.length === 13 &&  (/[0-9]/.test(cardNumber.value) )) {
          cardNumber.style.borderColor = "green";
          return true;
      } else {
        cardNumber.style.borderColor = "red";
        return false;
      }
}

function verifZip() {
    if (zipNumber.value.length === 5 && (/[0-9]/.test(zipNumber.value) )) {
      zipNumber.style.borderColor = "green";
      return true;
    } else {
      zipNumber.style.borderColor = "red";
      return false;
    }
  }

function verifCvv() {
    if (cvvNumber.value.length === 3 && (/[0-9]/.test(cvvNumber.value) )) {
      cvvNumber.style.borderColor = 'green';
      return true;
    } else {
      cvvNumber.style.borderColor = 'red';
      return false;
    }
}
//}

function switchChoixPaiement() {
	switch (form.elements.payment.value) {
		case "credit card":
		creditPayment.style.display     = "block";
		paypalPayment.style.display     = "none";
		bitcoinPayment.style.display    = "none";
			break;
		case "paypal":
    paypalPayment.style.display     = "block";
		creditPayment.style.display     = "none";
		bitcoinPayment.style.display    = "none";
			break;
		case "bitcoin":
    bitcoinPayment.style.display       = "block";
		creditPayment.style.display     = "none";
		paypalPayment.style.display     = "none";
			break;
		default:
		creditPayment.style.display     = "none";
		paypalPayment.style.display     = "none";
		bitcoinPayment.style.display    = "none";

	}
}
var paymentOption = paymentSelect.value;
function verifPaiment() {
  if (paymentOption === 'credit card') {
        if (!verifCvv()||!verifZip()||!verifCardNumber()) {
         return false;
       } else {
         return true;
       }

    } else if (payementOption = 'paypal') {
      return true;
    } else if (payementOption = 'bitcoin') {
      return true;
    } else {
      return false;
    }
}




/*****************verification*****************/

//verification du name
userName.focus();
userName.addEventListener("input", function (e) {
verifName();
});
// verification de l'email
emailAddress.addEventListener("input", function (e) {
        verifEmail();
});
// rubrique role travail
//appelle de la fonction afficherInput pour jobrole
afficherInput();
//rubrique t-shirt
selectColor.style.display = "none";
ajoutId();
document.getElementById('design').addEventListener("change", function (e) {
	switchChoixTshirt();
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
  verifCardNumber();
});
zipNumber.addEventListener("input", function (e) {
verifZip();
});
cvvNumber.addEventListener("input", function(e) {
  verifCvv();
});

//submit

form.addEventListener('submit', (e) => {

  if (!verifName() || !verifEmail()||!checkValidation() || !verifPaiment()) {
    alert("verifiez vos saisies!!");
  } else {
    alert("vous etes bien inscrit!!!");
  }
  e.preventDefault();
});
