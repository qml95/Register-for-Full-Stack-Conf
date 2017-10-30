//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  = document.querySelector('fieldset');
const userName       = document.getElementById("name");

const emailAddress   = document.getElementById('mail');

var option           = document.getElementsByTagName('option');


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
// creation de l'élément Texte
var inputOther = option[5];
console.log(inputOther);

function input() {
  if (this.option[this.selectedIndex].value === 'other') {
    document.getElementById("title").innerHTML += '<input type="text" name="autre" value="">';
  }
}
