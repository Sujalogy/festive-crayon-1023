const baseURL = "https://connect-api-production.up.railway.app";
const login_popup = document.getElementById("before_login_popup");
const account_popup = document.getElementById("after_login_popup");
const section_login = document.getElementById("login_header");
const greets = document.getElementById("show_congrats");
const change_page = document.getElementById("redirecting");
const user_name = document.getElementById("user_name_popup");

const register = document.getElementById("registrationBtn");
register.addEventListener("click", async (event) => {
  event.preventDefault();
  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  localStorage.setItem("name" , payload.name);
  console.log(payload);

  try {
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      user_name.innerText = localStorage.getItem("name");
      if(user_name.innerText !== "") {
        login_popup.style.display = "none";
        section_login.style.display = "none";
        greets.style.display = "grid";
      }
        let count = 5;
        function updateCountdown() {
          change_page.textContent = count;
          count--;
          if (count < 0) {
            // Redirect to another page after countdown
            window.location.replace("../../index.html");
          } else {
            setTimeout(updateCountdown, 1000);
          }
        }
      
        updateCountdown();

    }
    const data = await response.json();
  } catch (err) {
    console.error(err);
    window.alert("Error occurred during registration.");
  }

});
