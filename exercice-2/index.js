let form = document.querySelector("#monFormulaire");
form.addEventListener("submit" , (event) =>{
    event.preventDefault();
    
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);

    event.target.submit();
})