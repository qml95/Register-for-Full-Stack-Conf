//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  = document.querySelector('fieldset');
const userName       = document.getElementById("name");

const emailAddress     = document.getElementById('mail');
const regexEmail       = new RegExp(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}$/);
 var option          = document.getElementsByTagName('option');



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
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var couleurBlock = "red";
    if (!regexCourriel.test(e.target.value)) {
        couleurBlock = "green";
    }
    emailAddress.style.borderColor = couleurBlock;
}); // a retravailler!!!


// rubrique role travail
//ajout de l'id 'other-title'
option[5].id = "other-title";
// creation de l'élément Texte
var inputText = document.createElement("input");
inputText.setAttribute("id", "nom",);
inputText.setAttribute("type", "text");
inputText.style.height = "10px";

document.getElementById("title").appendChild(inputText);






















/**/
