let textInput = document.querySelector("#textInput");
let preview = document.querySelector("#preview");

textInput.addEventListener("input" , (event) =>{
    preview.textContent = event.target.value
})

let colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener("input" , (event) =>{
    preview.style.backgroundColor = event.target.value;
})