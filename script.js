//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  =
document.querySelector('fieldset');

const userName       = document.getElementById("name");

const emailAddress   = document.getElementById('mail');

var option           = document.getElementsByTagName('option');

var select					 = document.querySelector("#title")

var jobAutre         = document.querySelector("#other-title")


 var selectColor		 = document.querySelector('#colors-js-puns')



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
	option[13].setAttribute("selected","selected");
	for (var i = 13; i < 16; i++) {
		option[i].style.display = '';
	}
	for (var i = 16; i < 19; i++) {
		option[i].style.display = 'none';
	}
}
function partie2Tshirt() {
	option[16].setAttribute("selected","selected");
	for (var i = 13; i < 16; i++) {
		option[i].style.display = 'none';
	}
	for (var i = 16; i < 19; i++) {
		option[i].style.display = '';
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


/**************modification en direct******************/

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

document.getElementById("mail").addEventListener("input", function (e) {
        verifEmail();
});

// rubrique role travail
//ajout de l'id 'other-title'
option[5].id = "other-title";
//appelle de la fonction afficherInput pour jobrole
afficherInput();


//rubrique t-shirt

//ajout class sur les choix de coloris
selectColor.style.display = "none";
ajoutId();

form.addEventListener("change", function (e) {
	switchChoixTshirt();
e.preventDefault();
});
