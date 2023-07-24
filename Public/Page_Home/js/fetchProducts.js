fetch(`${baseURL}/api/products`, {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    getData(res.products);
  })
  .catch((err) => console.log(err));

const getData = (data) => {
  const main_div1 = document.getElementById("daily_products");
  const main_div2 = document.getElementById("daily_products2");
  renderData(data, main_div1);
  renderData(data, main_div2);
};

function renderData(data, main_div) {
  data.forEach((el) => {
    const products_div = document.createElement("div");
    products_div.classList.add("pro");

    const img_div = document.createElement("div");
    img_div.classList.add("pro-img");
    const img_tag = document.createElement("img");
    img_tag.src = el.img[0];

    const details_div = document.createElement("div");
    details_div.classList.add("pro-details");
    const rate_div = document.createElement("div");
    rate_div.classList.add("pro-rate");
    const rate_tag = document.createElement("p");
    rate_tag.innerHTML = `<i class="ri-star-fill"></i> 4.9`;
    rate_div.append(rate_tag);

    const title_div = document.createElement("div");
    title_div.classList.add("pro-title");
    const title_tag = document.createElement("p");
    title_tag.innerText = el.title;
    const price_tag = document.createElement("p");
    price_tag.innerText = el.price.discountedPrice;
    const main_price = document.createElement("p");
    main_price.classList.add("main-price")
    main_price.innerText = el.price.mainPrice;
    title_div.append(title_tag, price_tag, main_price);

    const btn_div = document.createElement("div");
    btn_div.classList.add("pro-btn");
    const cart_btn = document.createElement("button");
    cart_btn.innerText = "Add To Cart";
    cart_btn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(el._id, el.price.discountedPrice);
      alert("add to cart");
    });
    btn_div.append(cart_btn);

    details_div.append(rate_div, title_div, btn_div);
    img_div.append(img_tag);
    products_div.appendChild(img_div);
    products_div.appendChild(details_div);
    main_div.appendChild(products_div);
  });
}

const addToCart = async (productID, discountedPrice) => {
  try {
    let payload = {
      userEmail: `${localStorage.getItem("user_email")}`,
      products: productID
    };
    console.log(payload);
    const res = await fetch(`${baseURL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    console.log(result);
  } catch (err) {
    return console.error(err);
  }
};

