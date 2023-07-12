function validatePassword() {
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    let error = document.querySelector(".error");
    if(pass1 !== pass2) {
        // alert("passwords do not match")
        passwordSetOutline("red")
        error.style.display = "block";
        return false
    } else {
        passwordSetOutline("green")
        error.style.display = "none";
        return true
    }
}

function passwordSetOutline(color) {
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    pass1.style.outline = `3px solid ${color}`;
    pass2.style.outline = `3px solid ${color}`;
    return
}
