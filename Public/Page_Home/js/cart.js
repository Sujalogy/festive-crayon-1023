const product_cart_div = document.getElementById("product_cart_div");
const final_price = document.getElementById("finalPrice");
let totalPrice = 0;
const click_cart = document.getElementById("cart_icon");
click_cart.addEventListener("click", async () => {
  const res = await fetch(
    `${baseURL}/api/cart/${localStorage.getItem("user_email")}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const result = await res.json();
  let arr = result.cart;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].products;
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  document.getElementById("product_cart_div").innerHTML = null;
  await displayCartPage(obj);
  final_price.innerText = "₹ "+ totalPrice;
});
const displayCartPage = async (obj) => {
  for (let key in obj) {
    let qty = obj[key];
    await displayCart(key, qty);
  }
};

async function displayCart(proID, qty) {
  const response = await fetch(`${baseURL}/api/products/${proID}`);
  const product = await response.json();
  getCart(product, qty);
}

//
const getCart = (e, qty) => {
  
  const cart_pro_div = document.createElement("div");
  cart_pro_div.classList.add("a-product");

  const cart_pro_img = document.createElement("img");
  cart_pro_img.classList.add("pro-img");
  cart_pro_img.src = e.product.img[0];

  const cart_pro_details = document.createElement("div");
  cart_pro_details.classList.add("product-details");

  const cart_pro_title = document.createElement("p");
  cart_pro_title.innerText = e.product.title;

  const cart_pro_price = document.createElement("h3");
  cart_pro_price.innerText = `Rs.${e.product.price.discountedPrice}`;

  totalPrice += e.product.price.discountedPrice * qty;

  const cart_color = document.createElement("div");
  cart_color.classList.add("color-quantity");

  const color_tag = document.createElement("span");
  color_tag.innerText = e.product.color;

  const cart_quantity = document.createElement("div");
  cart_quantity.classList.add("quantity");

  const showQuant = document.createElement("span");
  showQuant.innerText = qty;

  const minus_btn = document.createElement("button");
  minus_btn.innerText = "-";

  const plus_btn = document.createElement("button");
  plus_btn.innerText = "+";
  plus_btn.addEventListener("click", () => {
    addToCarts(e.product._id);
  });

  cart_quantity.append(minus_btn, showQuant, plus_btn);

  cart_color.append(color_tag, cart_quantity);

  cart_pro_details.append(cart_pro_title, cart_pro_price, cart_color);

  cart_pro_div.append(cart_pro_img, cart_pro_details);
  product_cart_div.append(cart_pro_div);
};

const addToCarts = async (productID) => {
  try {
    let payload = {
      userEmail: `${localStorage.getItem("user_email")}`,
      products: productID,
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
    alert("test");
  } catch (err) {
    return console.error(err);
  }
};
