const baseURLs = "https://connect-api-production.up.railway.app";

const edit_pass = document.getElementById("edit_pass");

const put_old = document.getElementById("password");
const put_new = document.getElementById("new_password");

edit_pass.addEventListener("click", async (e) => {
    e.preventDefault();
    const payload = {
      password : put_new.value,
    };
    const response = await fetch(
      `${baseURLs}/api/users/${localStorage.getItem("user_email")}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.ok) {
      window.location.href = "./account.html"
    }
    const result = await response.json();
    console.log(result);
  });