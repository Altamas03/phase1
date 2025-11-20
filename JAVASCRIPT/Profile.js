window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.querySelectorAll("input");
    const saved = document.getElementById("saved");
    const cancel = document.getElementById("cancel");
    const save = document.getElementById("save");
    const full = document.getElementById("full");

    saved.style.display = "none";

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let allFilled = true;

        input.forEach(inp => {
            if (inp.hasAttribute("required") && inp.value.trim() === "") {
                allFilled = false;
            }
        });
          if(allFilled){
            saved.style.display = "block";
            saved.style.color = "green";
            saved.textContent = "✔️ Your changes are successfully saved.";
          }
          else{
            saved.style.display = "block";
            saved.style.color = "red";
            saved.textContent = "❌ Fill all the fields correctly (no spaces only).!";
    

          }
        
        setTimeout(()=>{
            saved.style.display= "none"
        },2000);

       
    });

    cancel.addEventListener("click",()=>{
        
        let allEmpty = true;

       input.forEach(inp=>{
         if(inp.value.trim()!==""){
         allEmpty = false
      }
      })
         if(!allEmpty){

        input.forEach(inp=>{
             inp.value = "";
        })
        saved.style.display = "block";
        saved.style.color = "red";
        saved.textContent = "❌ Cancel Changes Successfully.!";

      

     }
     else{
        saved.style.display = "block";
        saved.style.color = "orange";
        saved.textContent = "ℹ️ Form is already empty.";
        
     }
        

       

        setTimeout(()=>{
            saved.style.display= "none"
        },2000);

    })

    let email = localStorage.getItem("useremail");
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    if(email){

      save.value = email;

    }
    if(fname && lname){
      full.value = fname + " " + lname;
    }
    
});