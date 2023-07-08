function validatePassword() {
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    console.log("pressed")
    if(pass1 !== pass2) {
        alert("passwords do not match")
        return false
    } else {
        alert("password is matching")
        return true
    }
}