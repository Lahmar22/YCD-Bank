const beneficiarySelect = document.getElementById("beneficiarySelect");
const newBenefBtn = document.getElementById("newBenefBtn");
const popupVirement = document.getElementById("popupVirement");
const exitPopupVirement = document.getElementById("exitPopupVirement");
const comptesVirement = document.getElementById("comptesVirement");
const submitBtnVirement = document.getElementById("submitBtnVirement");


newBenefBtn.addEventListener("click",()=>{
popupVirement.classList.remove("hidden");
})
exitPopupVirement.addEventListener("click",()=>{
    popupVirement.classList.add("hidden");
})
comptesVirement.addEventListener("change", (e) => {
    const selectorVirementCompte = e.target.value;
    localStorage.setItem("selectorVirementCompte", JSON.stringify(selectorVirementCompte));
});
submitBtnVirement.addEventListener("click",()=>{
    
})