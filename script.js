//ajout placeholder onfocus
//name
var nameElt = document.getElementById("name");
nameElt.addEventListener("focus", function () {
    document.getElementById("name").setAttribute("placeholder", "Entrez votre pseudo");

});
nameElt.addEventListener("blur", function (e) {
    document.getElementById("name").setAttribute("placeholder", "");
});
//mail
var mailElt = document.getElementById("mail");
mailElt.addEventListener("focus", function () {
    document.getElementById("mail").setAttribute("placeholder", "Entrez votre email");

});
mailElt.addEventListener("blur", function (e) {
    document.getElementById("mail").setAttribute("placeholder", "");
});


// //verification des champs mail et name
// document.querySelector("legend").setAttribute("id", "legend");
// var spanNameElt = document.createElement("li");
// spanNameElt.id = "aideName";
// spanNameElt.textContent = "";
// document.getElementById("legend").beforebegin(spanNameElt, document.getElementById("name"));

document.getElementById("name").addEventListener("input", function (e) {
    var name = e.target.value; // Valeur saisie dans le champ mdp
    var longueurName = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (name.length >= 8) {
        longueurName = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (name.length >= 4) {
        longueurName = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideNameElt = document.getElementById("aideName");
    aideNameElt.textContent = "Longueur : " + longueurName; // Texte de l'aide
    aideNameElt.style.color = couleurMsg; // Couleur du texte de l'aide
});
