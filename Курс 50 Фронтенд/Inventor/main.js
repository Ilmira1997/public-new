let inputType = document.querySelector("#type-select");
let inputProduct = document.querySelector("#product-name");
let inputCount = document.querySelector("#product-count");

let addProduct = document.querySelector(".add-product");
let clearProduct = document.querySelector(".clear-list");

let productList = document.querySelector(".products-list");

let productArray = []

addProduct.addEventListener("click",addProducts)
clearProduct.addEventListener("click", handleClearProducts)
function addProducts(){
    let inputTypeValue= inputType.value
    let inputProductValue = inputProduct.value
    let inputCountValue = inputCount.value
    let productObj = {
        typeValue:inputTypeValue,
        product
    }
console.log(productArray)
let productItem = `<div class="product-items">${inputTypeValue} ${inputProductValue} ${inputCountValue}</div>`
productArray.push(productItem)
productList.innerHTML = '';
productArray.forEach((elem)=> productList.innerHTML += elem )

inputType.value= ""
inputProduct.value= ""
inputCount.value= ""
}

function handleClearProducts(){
    productList.innerHTML=""
    productArray= []
}