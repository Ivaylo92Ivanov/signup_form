function validatePassword() {
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    if(pass1 !== pass2) {
        alert("passwords do not match")
        return false
    } else {
        passwordSetOutline()
        return true
    }
}

function passwordSetOutline() {
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    pass1.style.outline = "3px solid green";
    pass2.style.outline = "3px solid green";
    return
}
