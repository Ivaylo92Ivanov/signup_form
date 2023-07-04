const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => validatePassword());

function validatePassword() {
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    if(pass1 !== pass2) {
        alert("passwords do not match")
    }
    console.log(pass1);
    console.log(pass2);
}