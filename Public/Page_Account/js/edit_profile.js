const baseURLs = "https://connect-api-production.up.railway.app";
const edit_btn = document.getElementById("edit_btn");

const edit_name = document.getElementById("name");
const edit_email = document.getElementById("email");

edit_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const payload = {
    name: edit_name.value,
    email: edit_email.value,
  };
  const response = await fetch(
    `${baseURLs}/api/users/${localStorage.getItem("user_email")}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payload),
    }
  );
  if (response.ok) {
    localStorage.setItem("user_email", payload.email);
    window.location.href = "./account.html"
  }
  const result = await response.json();
  console.log(result);
});

// const fetchUserDataEdit = async () => {
//     try {

//       getUserName(data.user.name);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   document.addEventListener("DOMContentLoaded", function () {

//   });
