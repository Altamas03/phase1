window.addEventListener("DOMContentLoaded", () => {

const update = document.getElementById("update");
const clear = document.getElementById("clear");
const popup = document.getElementById("popup");
const input = document.querySelectorAll("input");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");

update.addEventListener("click",()=>{

    let allFilled = true;

    input.forEach(inp => {
        if (inp.value.trim() === "") {
            allFilled = false;
        }
    });

    if(!allFilled){
        popup.style.display = "block";
        popup.style.color = "red";
        popup.textContent = "❌ Please fill in all fields.";
    }
    else if(password2.value!==password3.value){
        popup.style.display = "block";
        popup.style.color = "red";
        popup.textContent = "❌ Paaswords do not match.";

    }
    else{
        popup.textContent="✔️ Password updated successfully!";
        popup.style.color = "green";
        popup.style.display="block";
    }
    setTimeout(()=>{
        popup.style.display= "none"
    },2000);
 
})
clear.addEventListener("click",()=>{
 

  let allEmpty = true;
  input.forEach(inp=>{
      if(inp.value.trim() !==""){
        allEmpty = false
      }
  })
  if(!allEmpty){

    input.forEach(inp=>{
        inp.value="";
      })
      popup.textContent="✔️ Form cleared successfully!";
      popup.style.color = "green";
      popup.style.display="block";

  }

   else{
    popup.style.display = "block";
    popup.style.color = "orange";
    popup.textContent = "ℹ️ Form is already empty.";
   

   } 
    setTimeout(()=>{
        popup.style.display= "none"
    },2000);
    
})

})