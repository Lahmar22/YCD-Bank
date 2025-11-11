
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
