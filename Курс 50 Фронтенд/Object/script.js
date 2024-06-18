// let NewObj = {
// color: "red", 
// fruit: "apple", 
// vegetable: "potato", 
// car: "cobalt"
// }

// let NewObj2 = NewObj
// console.log(NewObj2);

let btn = document.getElementsByClassName("btn1")[0];
let btn2 = document.getElementsByClassName("btn2")[0];
btn.addEventListener("click", addPrice);
btn2.addEventListener("click", clearPrice);
let carProduct = [];


function addPrice() {
    let inputModel = document.getElementsByClassName("carModel")[0];
    let inputColor = document.getElementsByClassName("carColor")[0];
    let inputPrice = document.getElementsByClassName("carPrice")[0];
    let inputPosition = document.getElementsByClassName("carPosition")[0];

    let inputResult = document.getElementsByClassName("result")[0];
    
    let inputModelValue = inputModel.value;
    let inputColorValue = inputColor.value;
    let inputPriceValue = inputPrice.value;
    let inputPositionValue = inputPosition.value;

    let carObject={
        model:inputModelValue,
        color:inputColorValue,
        price:inputPriceValue,
        position:inputPositionValue
    }

    
     let carObject2 = Object.values(carObject);
     carProduct.push(carObject2)
    inputResult.innerHTML += `<div class="result"><h1>${carProduct}</h1> <h1></h1> <h1></h1> <h1></h1></div>`
    
    
 console.log(carProduct);
 
}

function clearPrice(){
    let inputModel = document.getElementsByClassName("carModel")[0];
    let inputColor = document.getElementsByClassName("carColor")[0];
    let inputPrice = document.getElementsByClassName("carPrice")[0];
    let inputPosition = document.getElementsByClassName("carPosition")[0];

    let inputResult = document.getElementsByClassName("result")[0];
    
    let inputModelValue = inputModel.value;
    let inputColorValue = inputColor.value;
    let inputPriceValue = inputPrice.value;
    let inputPositionValue = inputPosition.value;

    let carObject={
        model:inputModelValue,
        color:inputColorValue,
        price:inputPriceValue,
        position:inputPositionValue
    }

    
     let carObject2 = Object.values(carObject);
     carProduct.pop(carObject2)
    inputResult.innerHTML = `<div class="result"><h1>${carProduct}</h1> <h1></h1> <h1></h1> <h1></h1></div>`
    
    
 console.log(carProduct);
}

