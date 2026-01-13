let nom = document.querySelector("#nom");
nom.addEventListener("change" , (event) =>{
    console.log(event.target.value);
})

let pays = document.querySelector("#pays");
pays.addEventListener("change" , (event) =>{
    console.log(event.target.value);
})
let message = document.querySelector("#message");
message.addEventListener("change" , (event) =>{
    console.log(event.target.value);
})