var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    console.log("Vous avez choisie le pseudo " + pseudo + " et le mot de passe " + mdp);
    e.preventDefault();
});
