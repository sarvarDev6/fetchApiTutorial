try {
  // Async function for Electronic Products
  async function ElectronicsGeneralProduct() {
    // You can change this url to another API domain,
    await fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => createHomeProduct(data));

    function createHomeProduct(product) {
      let electronics = product.filter((item) => item.type == "electronics");

      let productsDiv = document.querySelector("[data-products]");

      // You also can change forEach to map or any cycle operators
      electronics.forEach((item) => {
        // this math used for calculating discount of products
        let discountAmount = (item.price * item.discount) / 100;
        let finalPrice = item.price - discountAmount;

        // Html Div for products, you can change values following your API data's info :)
        productsDiv.innerHTML += `
                   <div class="product">
                       <img src="${item.img}" title="${item.name}" alt="${item.name}">
                       <h3 id="productName">${item.name}</h3>
                       <h4 id="productAbout">${item.about}</h4>
                       <div class="priceRow">
                       <h3 id="productOldPrice">$${item.price}</h3>
                       <h3 id="productNewPrice">$${finalPrice}</h3>
                    </div>
                   </div>
                   `;
      });
    }
  }

  //   calling the general function
  ElectronicsGeneralProduct();
} catch (e) {
  console.log(e.message);
}
