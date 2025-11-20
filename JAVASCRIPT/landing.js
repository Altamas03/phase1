function scrollToHere(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}
let Login = document.getElementById("Login");
Login.addEventListener("click", function () {
  window.location.href = "Login.html";
});
let Sign = document.getElementById("Signup");
Sign.addEventListener("click", function () {
  window.location.href = "Account.html";
});
const Theme = () => {
  alert("This feature is not available in this browser.");
}
let get = document.getElementById("get");
let already = document.getElementById("already");

get.addEventListener('click', () => {
  window.location.href = "Account.html";
});
already.addEventListener('click', () => {
  window.location.href = "Login.html";
});

const dots = document.querySelectorAll("#dots button");
const leftBtn = document.getElementById("compare");
const rightBtn = document.getElementById("compare1");

let currentIndex = 0;


function updateDots(index) {
  dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
  });
}


leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateDots(currentIndex);
});


rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateDots(currentIndex);
});


dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
      currentIndex = idx;
      updateDots(currentIndex);
  });
});


updateDots(currentIndex);