const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Virement validé avec succès !");
});

const newBenefBtn = document.getElementById("newBenefBtn");
const benefModal = document.getElementById("benefModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalAddBtn = document.getElementById("modalAddBtn");
const modalBenefInput = document.getElementById("modalBenefInput");
const beneficiarySelect = document.getElementById("beneficiarySelect");

newBenefBtn.addEventListener("click", () => {
  benefModal.classList.remove("hidden");
  modalBenefInput.value = "";
  modalBenefInput.focus();
});

modalCloseBtn.addEventListener("click", () => benefModal.classList.add("hidden"));
modalCancelBtn.addEventListener("click", () => benefModal.classList.add("hidden"));

modalAddBtn.addEventListener("click", () => {
  const name = modalBenefInput.value.trim();
  if (!name) {
    alert("entrez le nom du bénéficiaire!");
    return;
  }

  const exists = Array.from(beneficiarySelect.options).some(opt => opt.value === name);
  if (exists) {
    alert("ce bénéficiaire existe déjà!");
    return;
  }

  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  beneficiarySelect.appendChild(option);
  beneficiarySelect.value = name;

  benefModal.classList.add("hidden");
});

modalBenefInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    modalAddBtn.click();
  }
});
