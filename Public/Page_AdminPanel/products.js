const url = "https://connect-api-production.up.railway.app/api/products/";


console.log(url);


let parentDiv = document.getElementById("box-container");
let editarr=JSON.parse(localStorage.getItem("editproduct"))||[];

fetchData();

  console.log("url");
  
  window.addEventListener("load", () => {
    fetchData(url);
  });
  
  function displayProducts(data) {
    console.log(data);
    parentDiv.innerHTML = "";
    data.forEach((ele, index) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      const img = document.createElement("img");
      img.setAttribute("src", ele.img);
      const title = document.createElement("h2");
      title.textContent = ele.title;
      const specifications = document.createElement("p");
      specifications.innerText = "Battery " + ele.specifications.Battery;
      const description = document.createElement("p");
      description.innerText = ele.description;
      const mainPrice = document.createElement("p");
      mainPrice.innerText = "Main Price " + ele.price.mainPrice;
      const discountedPrice = document.createElement("p");
      discountedPrice.innerText = "Discounted Price " + ele.price.discountedPrice;

       const category = document.createElement("p");
       category.textContent = 'Category ' + ele.category; 

        const brand = document.createElement("h2");
        brand.textContent = "Brand " + ele.brand;

        let edit=document.createElement("button")

        edit.innerText="EDIT"
        edit.addEventListener("click",()=>{
            editarr.push(element)
            localStorage.setItem("editproduct",JSON.stringify(editarr))
            // window.location.replace("editproduct.html")
        })

      card.append(img, title, specifications, description, mainPrice,discountedPrice, category, brand, edit);
      parentDiv.append(card);
    });
  }