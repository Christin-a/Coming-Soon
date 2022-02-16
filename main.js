var form = document.querySelector("formContainer");
var email = document.querySelector("formControl").value;

console.log(email);

form.addEventListener("submit", email) => {
    email.preventDefault();
    checkInputs();
}

if(email.value === "") {
    setErrorFor(email) "email" ("Your email is invalid")
}else if{ (!isEmail)(email.value){
    
}

}