let form = document.querySelector("#signup-form");
form.addEventListener("submit" , (event) =>{
    event.preventDefault();

    let passwordInput = document.querySelector("#password");
    let passwordInput2 = document.querySelector("#confirm_password");
    
    let password1 = passwordInput.value;
    let password2 = passwordInput2.value;
    
    if(password1 === password2){
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");

        passwordInput2.classList.add("valid");
        passwordInput2.classList.remove("invalid");
    	} else {
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        
        passwordInput2.classList.add("invalid");
        passwordInput2.classList.remove("valid");
    }
    
    
})