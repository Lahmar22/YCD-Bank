const NameProfile = document.getElementById("NameProfile");
const NumberProfile = document.getElementById("NumberProfile");
const EmailProfile = document.getElementById("EmailProfile");
const AdressProfile = document.getElementById("AdressProfile");
const UserP = JSON.parse(localStorage.getItem("users")) || [];


NameProfile.value = UserP[0].nom + " " + UserP[0].prenom;
NumberProfile.value = UserP[0].number;
EmailProfile.value = UserP[0].email;
AdressProfile.value = UserP[0].adress