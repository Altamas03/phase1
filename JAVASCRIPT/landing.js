// Smooth scroll function
function scrollToHere(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Redirect to login page
let Login = document.getElementById("Login");
Login.addEventListener("click", function () {
  window.location.href = "Login.html";
});

// Redirect to signup page
let Sign = document.getElementById("Signup");
Sign.addEventListener("click", function () {
  window.location.href = "Account.html";
});

// Theme toggle (currently placeholder)
const Theme = () => {
  alert("This feature is not available in this browser.");
}

// Buttons below the main hero section
let get = document.getElementById("get");
let already = document.getElementById("already");

get.addEventListener('click', () => {
  window.location.href = "Account.html";
});
already.addEventListener('click', () => {
  window.location.href = "Login.html";
});

// =============================
// Only Update Dot Buttons Below
// =============================

// Select relevant elements
const dots = document.querySelectorAll("#dots button");
const leftBtn = document.getElementById("compare");
const rightBtn = document.getElementById("compare1");

let currentIndex = 0;

// Function to update only active dot
function updateDots(index) {
  dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
  });
}

// Left arrow button
leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateDots(currentIndex);
});

// Right arrow button
rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateDots(currentIndex);
});

// When dot is clicked directly
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
      currentIndex = idx;
      updateDots(currentIndex);
  });
});

// Initial state
updateDots(currentIndex);