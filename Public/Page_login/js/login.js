const baseURL = "https://connect-api-production.up.railway.app";

const login = document.getElementById("loginBtn");
login.addEventListener("click", async (event) => {
  event.preventDefault();
  const payload = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  try {
    const response = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
    if (data.token && data.userID) {
      localStorage.setItem("userID", data.userID);
      localStorage.setItem("token", data.token);
    } else {
      window.alert("Authentication fails...")
      console.log("Authentication failed");
    }
  } catch (error) {
    window.alert(error)
    console.log(error);
  }
});