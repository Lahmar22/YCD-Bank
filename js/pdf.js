const NomPrenom = document.getElementById("NomPrenom");
const IbanBankID = document.getElementById("IbanBankID");
const CodeBank = document.getElementById("CodeBank");
const SubmitBtnPDF = document.getElementById("SubmitBtnPDF");
const UserPDF = JSON.parse(localStorage.getItem("users")) || [];

NomPrenom.placeholder = UserPDF[0].nom +" " + UserPDF[0].prenom;
IbanBankID.placeholder = UserPDF[0].id;
CodeBank.placeholder = UserPDF[0].transfer;