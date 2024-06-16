

function logIn() {
  let username = document.getElementById("usernameInput").value;
  let password = document.getElementById("passwordInput").value;

  console.log("Username:", username);
  console.log("Password:", password);

  if (username === "Sky&Snow" && password === "cedielovesnicole") {
    window.location.href = "landingpage.html";
  } else {
    alert("Incorrect username or password");
  }
}

document.getElementById("togglePassword").addEventListener("click", function() {
  var passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    this.textContent = "Show Password";
  }
  document.getElementById("passwordInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      logIn();
    }
  });
});