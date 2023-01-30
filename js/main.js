// // 6. Используя готовые данные для файла db.json, Сделайте R-отображение, U-изменение
// const PRODUCT_API = "http://localhost:8000/products";

// let block = document.querySelector("#container");
// async function render() {
//   let res = await fetch(PRODUCT_API);
//   let data = await res.json();
//   data.forEach((item) => {
//     block.innerHTML += `
//       <div class="card m-3" style="width: 18rem;">
//         <img src="${item.image}" class="card-img-top" alt="error)">
//         <div class="card-body">
//             <h5 class="card-title">${item.name}</h5>
//             <p class="card-text">${item.brand}</p>
//             <p class="card-text"> Price:${item.price}</p>
//             <a href="#" id="${item.id}" class="btn btn-dark edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">EDIT</a>
//             <a href="#" id="basket-${item.id}" class="btn btn-warning basket-btn">Add to Basket</a>
//         </div>
//       </div>
//       `;
//   });
//   addToLocal();
//   let shopCart = document.querySelector(".cart");
//   shopCart.innerHTML = "";
//   let productsCartShop = getProductsFromStorage();
//   productsCartShop.forEach((item) => {
//     shopCart.innerHTML += `<div class="card m-5 w-75 d-flex" style="width: 18rem;">

//                 <div class="card-body d-flex">
//                        <img src="${
//                          item.image
//                        }" class="img-fluid img-thumbnail" alt="error:(" height="50">
//                        <div class="container">
//                               <h5 class="card-title">${item.name}</h5><hr>
//                               <p class="card-text">${item.brand}</p>
//                               <p class="card-text">${item.color}</p>
//                               <p class="card-text">Price: ${item.price}$</p>
//                               <p class="card-text">Count: ${item.count}
//                               <p class="card-text">Subprice: ${
//                                 item.price * item.count
//                               }$</p>
//                               <a href="#" class="btn btn-outline-success btn-add-count" id="del-${
//                                 item.id
//                               }">+</a>
//                               <a href="#" class="btn btn-outline-danger btn-del-count" id="del-${
//                                 item.id
//                               }">-</a>
//                               </p>

//                        </div>

//                 </div>
//        </div>`;
//   });

//   addCountProdEvent();
//   delCountProdEvent();
//   totalPrice();
// }
// render();
// let arr = [];
// function initStorage() {
//   if (!localStorage.getItem("products-data")) {
//     localStorage.setItem("products-data", "[]");
//   }
// }
// initStorage();
// function setProductsToStorage(products) {
//   localStorage.setItem("products-data", JSON.stringify(products));
// }
// function getProductsFromStorage() {
//   let users = JSON.parse(localStorage.getItem("products-data"));
//   return users;
// }

// async function addProductToLocal(e) {
//   let productId = e.target.id.split("-")[1];
//   console.log(productId);
//   let res = await fetch(PRODUCT_API);
//   let data = await res.json();
//   let product = data.find((i) => i.id == productId);
//   arr.push(product);
//   setProductsToStorage(arr);
// }
// function addToLocal() {
//   let addBasketBtn = document.querySelectorAll(".basket-btn");
//   addBasketBtn.forEach((item) =>
//     item.addEventListener("click", addProductToLocal)
//   );
// }

// async function addProdToCart(e) {
//   let productId = e.target.id.split("-")[1];
//   // console.log(productId);
//   let res = await fetch(PRODUCT_API);
//   let products = await res.json();
//   // console.log(products);
//   let prodObj = await products.find((item) => item.id == productId);
//   // console.log(prodObj);
//   prodObj.count = 1;
//   let product = getProductsFromStorage();
//   product.push(prodObj);
//   setToLocalStorage(product);
//   render();
// }

// function addToCartShopEvent() {
//   let btnAddToLocalStorage = document.querySelectorAll(".btn-add");
//   btnAddToLocalStorage.forEach((item) =>
//     item.addEventListener("click", addProdToCart)
//   );
// }
// addToCartShopEvent();

// function addCountProd(e) {
//   let productId = e.target.id.split("-")[1];
//   // console.log(productId);
//   let products = getProductsFromStorage();
//   let productObj = products.find((item) => item.id == productId);
//   // console.log(productObj);
//   productObj.count += 1;
//   setToLocalStorage(products);
//   render();
// }

// function addCountProdEvent() {
//   let btnAddCountProd = document.querySelectorAll(".btn-add-count");
//   // console.log(btnAddCountProd);
//   btnAddCountProd.forEach((item) =>
//     item.addEventListener("click", addCountProd)
//   );
// }

// function delCountProd(e) {
//   let productId = e.target.id.split("-")[1];
//   // console.log(productId);
//   let products = getProductsFromStorage();
//   let productObj = products.find((item) => item.id == productId);
//   // console.log(productObj);

//   if (productObj.count === 1) {
//     return;
//   } else productObj.count -= 1;
//   setToLocalStorage(products);
//   render();
// }

// function delCountProdEvent() {
//   let btnAddCountProd = document.querySelectorAll(".btn-del-count");
//   // console.log(btnAddCountProd);
//   btnAddCountProd.forEach((item) =>
//     item.addEventListener("click", delCountProd)
//   );
// }

// function totalPrice() {
//   let totalPrice = document.querySelector("#total-price");
//   let products = getProductsFromStorage();
//   let total = 0;
//   products.forEach((item) => {
//     return (total += item.price * item.count);
//   });
//   totalPrice.innerHTML = `Total price: ${total}$`;
// }

// function clearLocalStorage() {
//   localStorage.clear();
//   render();
// }

// let clearBtnLS = document.querySelector("#btn-clear-local-storage");
// clearBtnLS.addEventListener("click", clearLocalStorage);
// // let nameInp = document.querySelector("name-inp");
// // let imgInp = document.querySelector("img-inp");
// // let brandInp = document.querySelector("brand-inp");
// // let priceInp = document.querySelector("price-inp");
// // let descInp = document.querySelector("desc-inp");
// // async function updateProduct(e) {
// //   let productId = e.target.id;
// //   let res = await fetch(PRODUCT_API);
// //   let data = await res.json();
// //   let product = data.find((item) => item.id == productId);
// //   await fetch(`${PRODUCT_API}/${productId}`, {
// //     method: "PUTCH",
// //     body: JSON.stringify(product),
// //   });

// //   render();
// // }

// // function editFunc() {
// //   let editBtn = document.querySelectorAll(".edit-btn");
// //   console.log(editBtn);
// //   editBtn.forEach((item) => {
// //     item.addEventListener("click", updateProduct);
// //   });
// // }
// /* <p class="card-text">${item.description}</p> */
// // 6.1. Продолжаем предыдущий таск. Реализуйте логику корзины. У вас есть карточка с товаром, нажав на кнопку «добавить в корзину» добавляйте товар в локал сторадж, с возможностью указать количество товаров. Также в карточке должна быть кнопка, УДАЛИТЬ ИЗ КОРЗИНЫ, нажав на которую, товар удаляется из корзины, также на странице должна быть кнопка ОЧИСТИТЬ КОРЗИНУ, при нажатии на эту кнопку, все товары должны быть удалены из хранилища

const PRODUCTS_API = "http://localhost:8000/products";

async function render() {
  let productsList = document.querySelector("#container");
  productsList.innerHTML = "";
  let res = await fetch(PRODUCTS_API);
  let products = await res.json();
  products.forEach((item) => {
    productsList.innerHTML += `<div class="card m-5" style="width: 18rem;">
                     <img src="${item.image}" class="card-img-top" alt="error:(" height="200">
                     <div class="card-body">
                            <h5 class="card-title">${item.name}</h5><hr>
                            <p class="card-text"><b>Brand:</b> ${item.brand}</p>
                            <p class="card-text"><b>Description:</b> ${item.description}</p>
                            <p class="card-text"><b>Color:</b> ${item.color}</p>
                            <p class="card-text"><b>Price:</b> ${item.price}$</p>
                            <div class="d-flex flex-column justify-content-end">
                            <a href="#" class="btn btn-success mb-2 btn-add" id="add-${item.id}">Add to shopping cart</a>
                            <a href="#" class="btn btn-danger btn-del" id="del-${item.id}">Delete shopping cart</a>
                            </div>
                     </div>
            </div>`;
  });

  addToCartShopEvent();
  deleteToCartShopEvent();

  // cart shop **********************************************************************************
  let shopCart = document.querySelector(".cart");
  shopCart.innerHTML = "";
  let productsCartShop = getProductsFromStorage();
  productsCartShop.forEach((item) => {
    shopCart.innerHTML += `<div class="card m-5 w-75 d-flex" style="width: 18rem;">
              
                     <div class="card-body d-flex">
                            <img src="${
                              item.image
                            }" class="img-fluid img-thumbnail" alt="error:(" height="50">
                            <div class="container">
                                   <h5 class="card-title">${item.name}</h5><hr>
                                   <p class="card-text">${item.brand}</p>
                                   <p class="card-text">${item.color}</p>
                                   <p class="card-text">Price: ${
                                     item.price
                                   }$</p>
                                   <p class="card-text">Count: ${item.count}
                                   <p class="card-text">Subprice: ${
                                     item.price * item.count
                                   }$</p>
                                   <a href="#" class="btn btn-outline-success btn-add-count" id="del-${
                                     item.id
                                   }">+</a>
                                   <a href="#" class="btn btn-outline-danger btn-del-count" id="del-${
                                     item.id
                                   }">-</a>
                                   </p>
                                   
                            </div>
                            
                     </div>
            </div>`;
  });
  addCountProdEvent();
  delCountProdEvent();
  totalPrice();
}
render();

function initStorage() {
  if (!localStorage.getItem("products-data")) {
    localStorage.setItem("products-data", "[]");
  }
}
initStorage();

async function setToLocalStorage(products) {
  localStorage.setItem("products-data", JSON.stringify(products));
}

function getProductsFromStorage() {
  let users = JSON.parse(localStorage.getItem("products-data"));
  return users;
}

async function addProdToCart(e) {
  let productId = e.target.id.split("-")[1];
  // console.log(productId);
  let res = await fetch(PRODUCTS_API);
  let products = await res.json();
  // console.log(products);
  let prodObj = await products.find((item) => item.id == productId);
  // console.log(prodObj);
  prodObj.count = 1;
  let product = getProductsFromStorage();
  product.push(prodObj);
  setToLocalStorage(product);
  render();
}

function addToCartShopEvent() {
  let btnAddToLocalStorage = document.querySelectorAll(".btn-add");
  btnAddToLocalStorage.forEach((item) =>
    item.addEventListener("click", addProdToCart)
  );
}

function deleteProdToCart(e) {
  let productId = e.target.id.split("-")[1];
  // console.log(productId);
  let products = getProductsFromStorage();
  // console.log(products);
  products = products.filter((item) => item.id != productId);
  setToLocalStorage(products);
  render();
}

function deleteToCartShopEvent() {
  let btnClearToLocalStorage = document.querySelectorAll(".btn-del");
  // console.log(btnClearToLocalStorage);
  btnClearToLocalStorage.forEach((item) =>
    item.addEventListener("click", deleteProdToCart)
  );
}

function addCountProd(e) {
  let productId = e.target.id.split("-")[1];
  // console.log(productId);
  let products = getProductsFromStorage();
  let productObj = products.find((item) => item.id == productId);
  // console.log(productObj);
  productObj.count += 1;
  setToLocalStorage(products);
  render();
}

function addCountProdEvent() {
  let btnAddCountProd = document.querySelectorAll(".btn-add-count");
  // console.log(btnAddCountProd);
  btnAddCountProd.forEach((item) =>
    item.addEventListener("click", addCountProd)
  );
}

function delCountProd(e) {
  let productId = e.target.id.split("-")[1];
  // console.log(productId);
  let products = getProductsFromStorage();
  let productObj = products.find((item) => item.id == productId);
  // console.log(productObj);

  if (productObj.count === 1) {
    return;
  } else productObj.count -= 1;
  setToLocalStorage(products);
  render();
}

function delCountProdEvent() {
  let btnAddCountProd = document.querySelectorAll(".btn-del-count");
  // console.log(btnAddCountProd);
  btnAddCountProd.forEach((item) =>
    item.addEventListener("click", delCountProd)
  );
}

function totalPrice() {
  let totalPrice = document.querySelector("#total-price");
  let products = getProductsFromStorage();
  let total = 0;
  products.forEach((item) => {
    return (total += item.price * item.count);
  });
  totalPrice.innerHTML = `Total price: ${total}$`;
}

function clearLocalStorage() {
  localStorage.clear();
  render();
}
let clearBtnLS = document.querySelector("#btn-clear-local-storage");
clearBtnLS.addEventListener("click", clearLocalStorage);
