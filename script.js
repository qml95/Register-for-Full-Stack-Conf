//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  = document.querySelector('fieldset');
const userName       = document.getElementById("name");

const emailAddress   = document.getElementById('mail');

var option           = document.getElementsByTagName('option');



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


function verifEmail() {
					var champ = document.getElementById('mail');

					if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}$/.test(champ.value)) { // si l'email n'est pas correct:
						emailAddress.style.borderColor = "red";
						return false;
					} else {//si l'email est correct:
						emailAddress.style.borderColor = "green";
						return true;
					}
				}
document.getElementById("mail").addEventListener("input", function (e) {
        verifEmail();

        });

// rubrique role travail
//ajout de l'id 'other-title'
option[5].id = "other-title";
// creation de l'élément Texte

























/**/
