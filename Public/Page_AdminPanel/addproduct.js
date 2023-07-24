let btn = document.getElementById("addproduct");
let id = document.getElementById("productid");
let image = document.getElementById("image");
let title = document.getElementById("title");
let brand = document.getElementById("brand");
let category = document.getElementById("category");
let description = document.getElementById("description");
let mainPrice = document.getElementById("mainprice");
let discountedPrice = document.getElementById("discountedprice");

console.log("Hello");

btn.addEventListener("click",() => {
    let image1 = image.value
    let id1 = id.value
    let title1 = title.value
    let brand1 = brand.value
    let category1 = category.value
    let description1 = description.value
    let mainPrice1 = mainPrice.value
    let discountedPrice1 = discountedPrice.value

    let obj = {
        id: id1,
        image:image1,
        title:title1,
        brand:brand1,
        category:category1,
        description:description1,
        mainPrice:mainPrice1,
        discountedPrice:discountedPrice1,
    }

    fetch("https://connect-api-production.up.railway.app/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
        alert("Successfully add product")
    })