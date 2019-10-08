const login = document.querySelector("#loginform");
const password = document.querySelector("#password").value;
// const passwordMessage = document.querySelector("#pmessage");

login.addEventListener("submit", function(e) {
  e.preventDefault();
  passReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;
  const passwordMessage = document.querySelector("#pmessage");

  if (password != passReg) {
    passwordMessage.textContent = null;
    let p = document.createElement(`p`);
    p.classList.add("alert", "alert-warning");
    p.textContent = "Please enter password. Letters or digits Only";
    passwordMessage.appendChild(p);
    console.log(p);

    setTimeout(function() {
      passwordMessage.innerHTML = "";
    }, 4000);
  }
});
