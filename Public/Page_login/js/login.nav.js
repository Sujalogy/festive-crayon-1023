const before_login_click = document.getElementById("before_login_click");
// ? this is about before login...
const before_login_popup = document.getElementById("before_login_popup");
const close_popup = document.getElementById("close_popup");

before_login_click.addEventListener("click", (e) => {
  e.preventDefault();
  before_login_popup.style.display = "block";
});
close_popup.addEventListener("click", (e) => {
  e.preventDefault();
  before_login_popup.style.display = "none";
});

// ? this is about after login...
// const after_login_popup = document.getElementById("after_login_popup");
// const close_popup2 = document.getElementById("close_popup2");

// before_login_click.addEventListener("click", (e) => {
//   e.preventDefault();
//   after_login_popup.style.display = "block";
// });
// close_popup2.addEventListener("click", (e) => {
//   e.preventDefault();
//   after_login_popup.style.display = "none";
// });

// ? this is about Category Dropdown...
const category_dropdown_click = document.getElementById("category_dropdown_a");
const category_dropdown_div = document.getElementById("category_dropdown");
const list_category_click = document.getElementById("list_category_click");

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
// ? this is about More Dropdown...
const list_more_click = document.getElementById("list_more_click");
const more_dropdown_a = document.getElementById("more_dropdown_a");
const more_dropdown_div = document.getElementById("more_dropdown_div");
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

// ? this is about Cart Slider:
const cartSliderPopup = document.getElementById("cart_slider_popup");
const cartLogo = document.getElementById("cart_icon");
const closeCartPopup = document.getElementById("closeCartPopup");
const mainCartContainer = document.querySelector(".main-cart-container");

cartLogo.addEventListener("click", () => {
    cartSliderPopup.classList.add("show");
    mainCartContainer.style.left = "441.5px";
    document.body.style.overflow = "hidden";
});

closeCartPopup.addEventListener("click", () => {
    cartSliderPopup.classList.remove("show");
    document.body.style.overflow = "visible";
});
