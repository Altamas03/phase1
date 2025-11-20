let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email=document.getElementById("email");
let password=document.getElementById("pswrd");
let confirm=document.getElementById("cnfpwd");
let checkbox = document.getElementById("check");
let save = document.getElementById("save");

let demo = document.getElementById("demo");
    demo.addEventListener("click",function(){
        document.getElementById("fname").value="Demo";
        document.getElementById("lname").value="User";
        email.value="demo@webtech.practice";
        password.value="webtech";
        confirm.value="webtech"

    });

    let Sign = document.getElementById("Sign");
    Sign.addEventListener('click',()=>{
        window.location.href="Login.html";
    }) 
    
 save.addEventListener("click",(event)=>{

    event.preventDefault();

    if (!document.querySelector("form").checkValidity()) {
        document.querySelector("form").reportValidity();
        return;
    }


    if(Account()){
        let emailVal=email.value.trim();
        let passwordVal=password.value;
        let fnameVal = fname.value.trim();
        let lnameVal = lname.value.trim();
        
            localStorage.setItem("useremail",emailVal);
            localStorage.setItem("userpwd",passwordVal);
            localStorage.setItem("fname",fnameVal);
            localStorage.setItem("lname",lnameVal);

            alert("Account Created");
            window.location.href = "Overview.html"
    }
       
    })   
function Account (){
    let pass = true;

    const emailInput = document.getElementById("email").value.trim();
    const atIndex = emailInput.indexOf('@');

    if(atIndex <= 3){
        document.getElementById("email-show-error").innerHTML="Email must be greater than 3 digit";
        pass=false;
    }
    else{
        document.getElementById("email-show-error").innerHTML=""; 
    }
    if(password.value.length < 6){
        document.getElementById("pass-show-error").innerHTML="Min 6 characters";
        pass=false;
    }
    else{
        document.getElementById("pass-show-error").innerHTML="";

    }
    if(password.value != confirm.value){
        document.getElementById("conf-show-error").innerHTML=`Password doesn't match`;
        pass=false;
    }
    else{
        document.getElementById("conf-show-error").innerHTML="";
    }
     return pass;

}