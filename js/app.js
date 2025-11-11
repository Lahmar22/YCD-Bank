const select = document.getElementById("select_which");
const users_payment = document.getElementById("users_payment");
const Reference = document.getElementById("Reference");
const validatePayment = document.getElementById("validatePayment");
const user_inside = document.getElementById("user_inside");


select.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "inwi" || selectedValue === "maroc-telecom" || selectedValue === "orange") {
        users_payment.classList.remove("hidden");
    }
    else {
        users_payment.classList.add("hidden")
    }
});

validatePayment.addEventListener("click", () => {
    if (!select.value) {
        alert("Please select a compte");
        return;
    }

    if (!user_inside.value) {
        alert("Please select a user");
        return;
    }

    const Reference_value = Number(Reference.value);
    if (!Reference_value) {
        alert("Please enter a valid amount");
        return;
    }

    if (Reference_value > 10000) {
        alert("You can't do more than 10,000 dhs");
        return;
    }

    const select_value = select.value;


    const paymentInfo = {
        Reference_value,
        select_value,
    };


    let Infos = JSON.parse(localStorage.getItem("Infos")) || [];
    Infos.push(paymentInfo);
    localStorage.setItem("Infos", JSON.stringify(Infos));



    alert("Payment accepted");
    select.value = "";
    user_inside.value = "";
    Reference.value = "";
    users_payment.classList.add("hidden");

});
