const login = document.querySelector("#loginform");
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

login.addEventListener("submit", function(e) {
  e.preventDefault();
  passReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;

  if (email === "" || email == null) {
    alert("Please enter valid Email");
  }

  if (password != passReg) {
    alert(
      "Password must have more than six characters, digits 0-9, No spaces or special character"
    );
  }
});
