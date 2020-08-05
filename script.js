let submitBtn = document.querySelector("#submit");
let alertInputs = document.querySelectorAll(".alert");
let hintInputs = document.querySelectorAll(".hint");

submitBtn.onclick = function (e) {
    e.preventDefault();

    for (let i = 0; i < alertInputs.length; i++) {
        alertInput = alertInputs[i];
        hintInput = hintInputs[i];

        if (alertInput.value == "") {
            alertInput.style.border = "none";
            alertInput.style.boxShadow = "1px 1px 2px red, -1px -1px 2px red";
            hintInput.style.visibility = "visible";
        }
    }
}
