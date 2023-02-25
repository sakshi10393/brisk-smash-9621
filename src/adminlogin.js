
const apiUrl = "https://projecteliteleasejsonserver.onrender.com/admin";

const loginForm = document.querySelector("form");
const loginButton = document.querySelector("#button");

const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#Username");
const passwordInput = document.querySelector("#Password");

loginForm.addEventListener("submit", (event) => {
event.preventDefault();

const email = emailInput ? emailInput.value : "";
const username = usernameInput ? usernameInput.value : "";
const password = passwordInput ? passwordInput.value : "";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const user = data.find((user) => {
        const userData = { email, username, password };
        localStorage.setItem("userCredentials", JSON.stringify(userData));
        return user.email === email && user.username === username && user.password === password;
      });

      if (user) {
        // Successful login
        window.location.href = "admindashboard.html";
      } else {
        // Failed login
        alert("Invalid email, username, or password.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred. Please try again later.");
    });
});
