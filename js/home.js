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

const NumeroCarnet = document.getElementById("numeroCarnet");
const NumeroCheque = document.getElementById("numeroCheque");

function RIBCheque() {
    if (!loggedUser) {
        NumeroCheque.textContent = "Unknown user";
        return;
    }
    const rib = loggedUser.id_1;

    const numeroCompte = extraireNumeroCompte(rib);

    NumeroCheque.innerHTML = `<span>${numeroCompte}</span>`;
}

function RIBCarnet() {
    if (!loggedUser) {
        NumeroCarnet.textContent = "Unknown user";
        return;
    }

    const rib = loggedUser.id_2;

    const numeroCompte = extraireNumeroCompte(rib);

    NumeroCarnet.innerHTML = `<span>${numeroCompte}</span>`;
}



nomDashboard();
nomPrenomHome();
RIBCheque();
RIBCarnet();


function extraireNumeroCompte(rib) {
    if (rib.length !== 24) {
        throw new Error("Le RIB doit contenir exactement 24 caractères.");
    }
    return rib.substring(6, 22);
}