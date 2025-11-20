let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");


let demo = document.getElementById("demo");
    demo.addEventListener("click",function(){
        email.value="demo@webtech.practice";
        password.value="webtech";

    });

    let create=document.getElementById("create");
    create.addEventListener('click', function (){
        window.location.href="Account.html";
    })

    let tips = document.getElementById("tips");
    tips.addEventListener("click",()=>{
       
        window.location.href = "tips.html"; 
    })

    submit.addEventListener("click",(e)=>{

        e.preventDefault();

        let emailVal=email.value;
        let passwordVal=password.value;
        let storedEmail = localStorage.getItem("useremail");
        let storedpswd = localStorage.getItem("userpwd");

        if(emailVal==storedEmail && passwordVal==storedpswd){
            alert("Login Successfull!");
            window.location.href="Overview.html"
        }
        else{
            alert("Invalid username and password")
        }

    })

function Signin(){
    let pass= true;

    const emailInput = document.getElementById("email").value.trim();
    const atIndex = emailInput.indexOf('@');

    if(password.value.length < 6){
        document.getElementById("pass-show-error").innerHTML="Password must contain at least 6 character";
        pass=false;
    }else{
        document.getElementById("pass-show-error").innerHTML=""; 
    }
    if(atIndex <=3){
        document.getElementById("email-show-error").innerHTML="Email must be greater than 3 digit"
        pass = false;
    }
    else{
        document.getElementById("email-show-error").innerHTML="";
    }
    if (pass) {
        window.location.href = "Overview.html"; 
        return false;
    } else {
        return false;
    }
}