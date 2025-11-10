const LoginSubmit = document.getElementById("LoginSubmit");

LoginSubmit.addEventListener("click", function () {

    const UserId = document.getElementById("UserId").value.trim();
    const passwordLogin = document.getElementById("passwordLogin").value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].transfer == UserId) {
            if (users[i].motdepasse !== passwordLogin) {
                alert("Password invalid");
                return;
            }
            alert(`Welcome Mr. ${users[i].nom} ${users[i].prenom}`);
            return;
        }
    }

    alert("User not found");
});
