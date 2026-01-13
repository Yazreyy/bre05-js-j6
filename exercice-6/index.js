let checkbox = document.querySelector("#terms");
console.log(checkbox.checked);

let btnsubmit = document.querySelector("#btn")

checkbox.addEventListener("change" , (event) =>{
if(checkbox.checked === true){
    btnsubmit.disabled = false;
	} else {
    btnsubmit.disabled = true;
}    
});
