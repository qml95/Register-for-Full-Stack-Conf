//declaration des varialbles globales

var form             = document.querySelector("form");

var firstFieldset    = document.querySelector('fieldset');
var userName    = document.getElementById("name");

var emailAddress     = document.getElementById('mail');
var regexEmail       = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


//modification et verification du name
userName.addEventListener("focus", function () {
    document.getElementById("name").setAttribute("placeholder", "Entrez votre pseudo");
});

userName.addEventListener("blur", function () {
    document.getElementById("name").setAttribute("placeholder", "");
});

userName.addEventListener("input", function (e) {
    var name = e.target.value;
    var couleurBlock = "red";
    if (name.length >= 2) {
        couleurBlock = "green";
    }
    userName.style.color = couleurBlock;
});


// modification et verification de l'email
emailAddress.addEventListener("focus", function () {
    document.getElementById("mail").setAttribute("placeholder", "Entrez votre email");
});

emailAddress.addEventListener("blur", function () {
    document.getElementById("mail").setAttribute("placeholder", "");
});

emailAddress.addEventListener("blur", function (e) {
    var validiteCourriel = "";
    if (!regexEmail.test(e.target.value)) {
        validiteCourriel = "red";
    }else {
        validiteCourriel = "green";
    }
    emailAddress.style.color = validiteCourriel
});
