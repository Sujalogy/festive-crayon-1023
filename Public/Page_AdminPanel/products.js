const url = "https://connect-api-production.up.railway.app/api/products/";

console.log(url);

// fetch(baseURL).then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     displayData(data);
// })
// .catch((err) => console.log(err));



// function displayData(data) {
//     let main_Container = document.getElementById("box-container");
//     main_Container.textContent = null;

//     data[products].forEach((el,i) => {
//         let div = document.createElement("div");
//         div.setAttribute("class","card");

//         let div_img = document.createElement("div");
//         div_img.setAttribute("class","image");

//         let img = document.createElement("img");
//         img.setAttribute("src",el[0].img);

//         let title = document.createElement("h2");
//         title.textContent = el.title;

//         let description = document.createElement("h5");
//         description.textContent = el.description;

//         let price = document.createElement("h3");
//         price.textContent = el.price;

        // let category = document.createElement("p");
        // category.textContent = 'Category' + el.category; 

        // let brand = document.createElement("p");
        // brand.textContent = "Brand" + el.brand;

//         div_img.append(img,title,description,price,category,brand);
//         div.append(div_img);
//         main_Container.append(div);

//     });
// }


let parentDiv = document.getElementById("box-container");



async function fetchData(url) {
    try {
      let res = await fetch(url);
      res = await res.json();
      console.log(res);
    //   localStorage.setItem("product", JSON.stringify(allProductData));
      displayProducts(res.products);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("url");
  
  window.addEventListener("load", () => {
    fetchData(url);
  });
  
  function displayProducts(data) {
    console.log(data);
    // parentDiv.innerHTML = "";
    // data.forEach((ele, index) => {
    //   let card = document.createElement("div");
    //   card.setAttribute("class", "card");
    //   const img = document.createElement("img");
    //   img.setAttribute("src", ele.img);
    //   const title = document.createElement("h2");
    //   title.textContent = ele.title;
    //   const description = document.createElement("p");
    //   description.innerText = ele.description;
    //   const price = document.createElement("p");
    //   price.innerText = ele.price;

    //    let category = document.createElement("p");
    //    category.textContent = 'Category' + ele.category; 

    //     let brand = document.createElement("p");
    //     brand.textContent = "Brand" + ele.brand;

    //   card.append(img, title, price, rating, buttonEl);
    //   parentDiv.append(card);
    // });
  }