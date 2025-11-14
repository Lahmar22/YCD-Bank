const nomDash = document.getElementById("nomDash"); 
const nomPrenom = document.getElementById("nomPrenom");

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

function nomDashboard() {
    if (!loggedUser) {
        nomDash.textContent = "Unknown user";
        return;
    }

    nomDash.innerHTML = `<span>${loggedUser.nom} ${loggedUser.prenom}</span>`;
}

function nomPrenomHome() {
    if (!loggedUser) {
        nomPrenom.textContent = "Unknown user";
        return;
    }

    nomPrenom.innerHTML = `<span>Bonjour Mr : ${loggedUser.nom} ${loggedUser.prenom}</span>`;
}



nomDashboard();
nomPrenomHome()
