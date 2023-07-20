const before_login_click = document.getElementById("before_login_click");
// ? this is about before login...
const before_login_popup = document.getElementById("before_login_popup");
const close_popup = document.getElementById("close_popup");

before_login_click.addEventListener("click", (e) => {
    e.preventDefault();
    before_login_popup.style.display = "block";
})
close_popup.addEventListener("click", (e) => {
    e.preventDefault();
    before_login_popup.style.display = "none";
})

// ? this is about after login...
const after_login_popup = document.getElementById("after_login_popup");
const close_popup2 = document.getElementById("close_popup2");

before_login_click.addEventListener("click", (e) => {
    e.preventDefault();
    after_login_popup.style.display = "block";
})
close_popup2.addEventListener("click", (e) => {
    e.preventDefault();
    after_login_popup.style.display = "none";
})

// ? this is about Category Dropdown...
const category_dropdown_click = document.getElementById("category_dropdown_a");
const category_dropdown_div = document.getElementById("category_dropdown");
const list_category_click = document.getElementById("list_category_click");

list_category_click.addEventListener("mouseover", (e) => {
    category_dropdown_div.style.display = "grid";
})
category_dropdown_click.addEventListener("mouseover", (e) => {
    category_dropdown_div.style.display = "grid";
})
category_dropdown_div.addEventListener("mouseover", (e) => {
    category_dropdown_div.style.display = "grid";
})
category_dropdown_div.addEventListener("mouseout", (e) => {
    category_dropdown_div.style.display = "none";
})
list_category_click.addEventListener("mouseout", (e) => {
    category_dropdown_div.style.display = "none";
})