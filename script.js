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
var inscrireTitre             = activitesField.firstElementChild;
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
//name
userName.focus();
userName.setAttribute("placeholder", "Entrez votre nom");

userName.addEventListener("focus", function () {
    document.getElementById("name").setAttribute("placeholder", "Entrez votre nom");
});
userName.addEventListener("blur", function () {
    document.getElementById("name").setAttribute("placeholder", "");
});

//email
emailAddress.addEventListener("focus", function () {
    document.getElementById("mail").setAttribute("placeholder", "Entrez votre email");
});

emailAddress.addEventListener("blur", function () {
    document.getElementById("mail").setAttribute("placeholder", "");
});
//autre job
option[5].id = "other-title";

//paiement
creditPayment.style.display     = "block";
paypalPayment.style.display         = "none";
bitcoinPayment.style.display        = "none";
credit[1].setAttribute('selected', true);
/**************************fonctions*******************/


//declarations de mes fonctions
//name
function verifName() {

  if (userName.value.length >= 2) {
      userName.style.borderColor = 'green';
      return true;
  }else {
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
// function verifCardCredit() {
function verifCardNumber() {
      if (cardNumber.value.length === 13 &&  (/[0-9]/.test(cardNumber.value) )) {
          cardNumber.style.borderColor = "green";
          return true;
      }else {
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




/*****************verification*****************/

//verification du name
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
    var paymentOption = paymentSelect.value;
function verifPaiment() {
    if (paymentOption === 'credit card') {
    		if (!verifCvv()||!verifZip()||!verifCardNumber()) {
    		 return false;
       }else {
         return true;
       }

      }else if (payementOption = 'paypal') {
        return true;
      }else if (payementOption = 'bitcoin') {
        return true;
      } else {
        return false;
      }
}
  if (!verifName() || !verifEmail()||!checkValidation() || !verifPaiment()) {
    alert("verifiez vos saisies!!");
  }else {
    alert("vous etes bien inscrit!!!");
  }
  e.preventDefault();
});
