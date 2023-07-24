const baseURL = "https://connect-api-production.up.railway.app";

const before_login_click = document.getElementById("before_login_click");

const before_login_popup = document.getElementById("before_login_popup");
const after_login_popup = document.getElementById("after_login_popup");

const close_popup = document.getElementById("close_popup");
const close_popup2 = document.getElementById("close_popup2");

const category_dropdown_click = document.getElementById("category_dropdown_a");
const category_dropdown_div = document.getElementById("category_dropdown");
const list_category_click = document.getElementById("list_category_click");

const list_more_click = document.getElementById("list_more_click");
const more_dropdown_a = document.getElementById("more_dropdown_a");
const more_dropdown_div = document.getElementById("more_dropdown_div");

const cartSliderPopup = document.getElementById("cart_slider_popup");
const cartLogo = document.getElementById("cart_icon");
const closeCartPopup = document.getElementById("closeCartPopup");
const mainCartContainer = document.querySelector(".main-cart-container");

const logout_btn = document.getElementById("logout_user");

const user_name = document.getElementById("greet_to_name");

// this is about Category Dropdown...
list_category_click.addEventListener("mouseover", (e) => {
  category_dropdown_div.style.display = "grid";
});
category_dropdown_click.addEventListener("mouseover", (e) => {
  category_dropdown_div.style.display = "grid";
});
category_dropdown_div.addEventListener("mouseover", (e) => {
  category_dropdown_div.style.display = "grid";
});
category_dropdown_div.addEventListener("mouseout", (e) => {
  category_dropdown_div.style.display = "none";
});
list_category_click.addEventListener("mouseout", (e) => {
  category_dropdown_div.style.display = "none";
});
// this is about More Dropdown...

list_more_click.addEventListener("mouseover", (e) => {
  more_dropdown_div.style.display = "block";
});
more_dropdown_a.addEventListener("mouseover", (e) => {
  more_dropdown_div.style.display = "block";
});
more_dropdown_div.addEventListener("mouseover", (e) => {
  more_dropdown_div.style.display = "block";
});
more_dropdown_div.addEventListener("mouseout", (e) => {
  more_dropdown_div.style.display = "none";
});
list_more_click.addEventListener("mouseout", (e) => {
  more_dropdown_div.style.display = "none";
});

// this is about Cart Slider:
cartLogo.addEventListener("click", () => {
  cartSliderPopup.classList.add("show");
  mainCartContainer.style.left = "441.5px";
  document.body.style.overflow = "hidden";
});

closeCartPopup.addEventListener("click", () => {
  cartSliderPopup.classList.remove("show");
  document.body.style.overflow = "visible";
});

// change user name after login
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    if (localStorage.getItem("name") !== null) {
      user_name.textContent = "Hi " + localStorage.getItem("name");
      before_login_click.addEventListener("click", (e) => {
        after_login_popup.style.display = "block";
        before_login_popup.style.display = "none";
      });
      close_popup2.addEventListener("click", (e) => {
        after_login_popup.style.display = "none";
      });
    } else {
      after_login_popup.style.display = "none";
    }

    if (localStorage.getItem("name") === null) {
      before_login_click.addEventListener("click", (e) => {
        before_login_popup.style.display = "block";
      });
      close_popup.addEventListener("click", (e) => {
        before_login_popup.style.display = "none";
      });
    }
  }, 0);
});
// here is the logout functionality
logout_btn.addEventListener("click", async () => {
  localStorage.removeItem("name");
  const res = await fetch(`${baseURL}/api/auth/logout`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await res.json();
  console.log(result);
  window.alert(result.message);
  after_login_popup.style.display = "none";
  window.location.reload();
});

// /////////////getting user name////////////////////////////////////////////////////////////////////////
const fetchUserData = async () => {
  try {
    const userEmail = localStorage.getItem("user_email");
    const accessToken = localStorage.getItem("accessToken");

    if (!userEmail || !accessToken) {
      console.log("User email or access token not available.");
      return;
    }

    const response = await fetch(`${baseURL}/api/users/${userEmail}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data: " + response.status);
    }

    const data = await response.json();
    if (!data || !data.user || !data.user.name) {
      throw new Error("Invalid response data.");
    }
    console.log(data);

    getUserName(data.user.name);
    return data;
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});

const getUserName = (name) => {
  localStorage.setItem("name", name);
};
// /////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".videos video");

  videos.forEach((video) => {
    video.addEventListener("mouseover", function () {
      playVideo(this);
    });

    video.addEventListener("mouseout", function () {
      pauseVideo(this);
    });
  });

  function playVideo(videoElement) {
    videoElement.play();
  }

  function pauseVideo(videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0;
  }
});


