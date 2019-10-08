const login = document.querySelector("#loginform");
const email = document.querySelector("#email").value;
const password = document.querySelector("#password");

login.addEventListener("submit", function(e) {
  e.preventDefault();
  if (email === "" || email == null) {
    console.log("invalid email");
  }
});
