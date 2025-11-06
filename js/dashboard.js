document.getElementById("userBtn").addEventListener("click", () => {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

// Fermer si on clique ailleurs
document.addEventListener("click", function(e) {
    if (!document.getElementById("userMenu").contains(e.target)) {
        document.getElementById("dropdownMenu").classList.add("hidden");
    }
});