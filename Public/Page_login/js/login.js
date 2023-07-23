const baseURLed = "https://connect-api-production.up.railway.app";
const login_popup = document.getElementById("before_login_popup");
const section_login = document.getElementById("login_header");
const greets = document.getElementById("show_congrats");
const change_page = document.getElementById("redirecting");
const user_name_login = document.getElementById("user_login_popup");

const after_popup = document.getElementById("after_login_popup");
window.addEventListener("DOMContentLoaded", () => {
  after_popup.style.display = "none";
});

const login = document.getElementById("loginBtn");
login.addEventListener("click", async (event) => {
  event.preventDefault();
  const payload = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  try {
    const response = await fetch(`${baseURLed}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      localStorage.setItem("user_email", payload.email);
      section_login.style.display = "none";
      greets.style.display = "grid";
      let count = 5;
      function updateCountdown() {
        change_page.textContent = count;
        count--;
        if (count < 1) {
          // Redirect to home page after countdown
          window.location.replace("../../index.html");
        } else {
          setTimeout(updateCountdown, 1000);
        }
      }

      updateCountdown();
    }

    const data = await response.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("status", data.status);
    } else {
      window.alert("Authentication fails...");
      console.log("Authentication failed");
    }
  } catch (error) {
    window.alert(error);
    console.log(error);
  }
});
