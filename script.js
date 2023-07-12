function validatePassword() {
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    console.log("pressed")
    if(pass1 !== pass2) {
        alert("passwords do not match")
        return false
    } else {
        passwordSetOutline()
        console.log("why not submit")
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
