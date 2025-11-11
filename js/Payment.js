const exitPopup = document.getElementById("exitPopup");
const submitbtn_edit = document.getElementById("submitbtn_edit");
const openPopup = document.getElementById("openPopup");
const popupEdit = document.getElementById("popup_edit");
const user_inside = document.getElementById("user_inside");

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("userPayment");
    if (saved) {
        user_inside.innerHTML = saved;
    }
});
openPopup.addEventListener("click", () => {
    popupEdit.classList.remove("hidden");
})
exitPopup.addEventListener("click", () => {
    popupEdit.classList.add("hidden");
})
submitbtn_edit.addEventListener("click", () => {
    const newName = document.getElementById("newName").value;
    const newNumber = document.getElementById("newNumber").value;

    let numbers = JSON.parse(localStorage.getItem("numbers")) || [];

    for (let i = 0; i < numbers.length; i++) {
        if (newNumber == numbers[i]) {
            alert("this number already exist");
            return;
        }
    }


    numbers.push(newNumber);
    localStorage.setItem("numbers", JSON.stringify(numbers));



    if (newName == "" || newNumber == "") {
        alert("invalid please fill the instructure or exit");
    }
    if (newNumber.length !== 10) {
        alert("cant find this number");
        return;
    }
    user_inside.innerHTML += `<option>${newName} - ${newNumber}</option>`;
    localStorage.setItem("userPayment", user_inside.innerHTML);
    popupEdit.classList.add("hidden");

})
