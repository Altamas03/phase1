let Profile=document.getElementById("Profile");
Profile.addEventListener('click', function (){
    window.location.href="profile.html";
})
let Security=document.getElementById("Security");
Security.addEventListener('click', function (){
    window.location.href="Security.html";
})
let Notification=document.getElementById("Notification");
Notification.addEventListener('click', function (){
    window.location.href="Notification.html";
})
let Overview=document.getElementById("Overview");
Overview.addEventListener('click', function (){
    window.location.href="Overview.html";
})
let Help=document.getElementById("Help");
Help.addEventListener('click', function (){
    window.location.href="HelpandSupport.html";
});


let Signout=document.getElementById("SignOut");
Signout.addEventListener('click',()=>{
    window.location.href="Login.html";
});


const Theme = () => {
    alert("This feature is not available in this browser.")
}

// let email=document.getElementById("email");
// let inner=document.getElementById("inner-email");
// email.textContent=inner.textContent;

const nameDisplay = document.getElementById("name");
const nameEmail = document.getElementById("name-email");

let nameStore = localStorage.getItem("fname");
let nameStore1 = localStorage.getItem("lname");
let email1 = localStorage.getItem("useremail");

if(nameStore && nameStore1){
    nameDisplay.textContent = nameStore + " "+ nameStore1;
}
if(email1){
    nameEmail.textContent = email1;
}