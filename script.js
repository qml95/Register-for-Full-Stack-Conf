//declaration des varialbles globales

const form           = document.querySelector("form");

const firstFieldset  = document.querySelector('fieldset');
const userName       = document.getElementById("name");

const emailAddress   = document.getElementById('mail');

var option           = document.getElementsByTagName('option');

var TitleSelect  = document.querySelector("#title")

var jobAutre         = document.querySelector("#other-title")


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

// creation de l'élément Texte
document.getElementById('title').insertAdjacentHTML("afterend",
    '<input type="text" name="" value="" id="input">');

var inputElt = document.getElementById('input')
inputElt.style.width = '150px';
inputElt.style.height = '10px';
inputElt.style.backgroundColor = '#c1deeb';
inputElt.style.borderRadius = '10px';
inputElt.style.display = "none";
inputElt.style.marginLeft = '50px';

var autreJob = (jobAutre) => {
  if (jobAutre.toLowerCase()=== "other") {
    inputElt.style.display = "";
  }
}
TitleSelect.addEventListener('change', () => {
    let jobAutre = TitleSelect.value;
    autreJob(jobAutre);
});
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
//appelle de la fonction afficherInput pour jobrole
afficherInput();



//rubrique t-shirt
