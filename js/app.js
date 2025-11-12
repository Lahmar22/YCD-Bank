function calculateAge(dateString) {
    const birth = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthdiff = today.getMonth() - birth.getMonth();

    if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
function generateBankID() {
    let id = "YCD ";
    for (let i = 0; i < 20; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}


document.getElementById("confirm-btn").addEventListener("click", function () {
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const naissanceVal = document.getElementById("naissance").value;
    const adress = document.getElementById("adress").value.trim();
    const motdepasse = document.getElementById("motdepasse").value;
    const confirm_motdepasse = document.getElementById("confirm-motdepasse").value;

    if (!prenom.trim() || !nom.trim() || !email.trim() || !number.trim() || !naissanceVal || !adress.trim() || !motdepasse.trim()) {
        alert("Please fill all required fields.");
        return;
    }

    if (motdepasse !== confirm_motdepasse) {
        alert("Passwords do not match.");
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];


    const emailExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
        alert("This email is already registered!");
        return;
    }

    const user = {
        id: generateBankID(),
        prenom,
        nom,
        email,
        number,
        naissance: naissanceVal,
        age: calculateAge(naissanceVal),
        adress,
        motdepasse
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription saved!");
});

