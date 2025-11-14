const beneficiarySelect = document.getElementById("beneficiarySelect");
const newBenefBtn = document.getElementById("newBenefBtn");
const popupVirement = document.getElementById("popupVirement");
const exitPopupVirement = document.getElementById("exitPopupVirement");
const comptesVirement = document.getElementById("comptesVirement");
const submitBtnVirement = document.getElementById("submitBtnVirement");

const montantVirement = document.getElementById("montantVirement");
const currency = document.querySelector('select');
const dateVirement = document.getElementById("dateVirement");
const montifReferenceVirement = document.getElementById("montifReferenceVirement");
const validerBtnVerment = document.getElementById("validerBtnVerment");

let userEnterRibVirement = 0;



window.addEventListener("load", () => {

    const today = new Date().toISOString().split("T")[0];
    dateVirement.value = today;
});

newBenefBtn.addEventListener("click", () => {
    popupVirement.classList.remove("hidden");
});


exitPopupVirement.addEventListener("click", () => {
    popupVirement.classList.add("hidden");
});




submitBtnVirement.addEventListener("click", () => {
    const fullNameVirementSecond = document.getElementById("fullNameVirement").value.trim();
    const userEnterRibVirementSecond = document.getElementById("userEnterRibVirement").value.trim();
    if (!fullNameVirementSecond) {
        alert("Please enter the user name");
        return;
    }

    if (!userEnterRibVirementSecond) {
        alert("Please enter their RIB");
        return;
    }
    if (userEnterRibVirementSecond.length !== 6 && userEnterRibVirementSecond.length !== 24) {
        alert("This RIB is invalid");
        return;
    }


    let userEnterRibVirement = { fullNameVirementSecond, userEnterRibVirementSecond };
    const saved = JSON.parse(localStorage.getItem("RIBSVirement")) || [];
    saved.push(userEnterRibVirement);
    localStorage.setItem("RIBSVirement", JSON.stringify(saved));



    const option = document.createElement("option");
    option.textContent = `${fullNameVirementSecond} - ${userEnterRibVirementSecond}`;
    beneficiarySelect.appendChild(option);

    localStorage.setItem("userVirement", beneficiarySelect.innerHTML);
    alert("Added successfully");
});


comptesVirement.addEventListener("change", () => {
    const selected = comptesVirement.value;
    beneficiarySelect.innerHTML = "";

    if (selected === "Compte 2") {

        const option = document.createElement("option");
        option.value = "Compte 1";
        option.textContent = "Compte 1";
        beneficiarySelect.appendChild(option);
    }
    else if (selected === "Compte 1") {
        const saved = localStorage.getItem("userVirement");

        if (saved) {
            beneficiarySelect.innerHTML = saved;
        }
    }
    else {
        beneficiarySelect.innerHTML = `<option value="">Sélectionner un bénéficiaire</option>`;
    }


});



validerBtnVerment.addEventListener("click", (e) => {
    e.preventDefault();

    if (!montifReferenceVirement.value.trim()) {
        alert("Please enter the motif / reference");
        return;
    }

    if (parseFloat(montantVirement.value) > 10000) {
        alert("You can't do more than 10000dh");
        return;
    }


    const selectedText = beneficiarySelect.value || beneficiarySelect.options[beneficiarySelect.selectedIndex].text;
    if (!selectedText || selectedText === "Sélectionner un bénéficiaire") {
        alert("Please select a beneficiary");
        return;
    }


    const UserRibs = JSON.parse(localStorage.getItem("RIBSVirement")) || [];
    const selectedUser = UserRibs.find(user => selectedText.includes(user.fullNameVirementSecond));
    if (!selectedUser) {
        alert("Beneficiary not found");
        return;
    }


    const ribLength = selectedUser.userEnterRibVirementSecond.length;
    if (ribLength !== 6 && ribLength !== 24) {
        alert("This RIB is invalid");
        return;
    }

    let montantFinal = parseFloat(montantVirement.value) || 0;
    if (ribLength === 24) {
        montantFinal += 20;
    }


    const transaction = {
        utilisateur: selectedUser.fullNameVirementSecond,
        rib: selectedUser.userEnterRibVirementSecond,
        montant: montantFinal,
        compte: currency.value,
        date: dateVirement.value,
        description: montifReferenceVirement.value
    };


    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    savedTransactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(savedTransactions));

    alert("Transaction saved!");


    montantVirement.value = "";
    montifReferenceVirement.value = "";
});



