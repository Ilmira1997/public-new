// let typeofCoffee = document.querySelectorAll('#type_of_coffee')[0].value;
// console.log(typeofCoffee);
let btn = document.getElementsByClassName('Btn')[0];
btn.addEventListener("click", updateCode);
let array = [];
function updateCode() {
    let typeofCoffee = document.getElementById('type_of_coffee').value;
    let sizeofCoffee = document.getElementById('size_of_coffee').value;
    let quantityofCoffee = document.getElementById('quantity_of_coffee').value;
    let result = document.getElementsByClassName("result")[0];
    
    let coffee = {
        type: typeofCoffeValue,
        size: sizeofCoffeValue,
        quantity: quantityofCoffeValue
    }
    
    let newCoffee = Object.values(coffee);
    console.log(newCoffee);
    console.log(array);
    // console.log(typeofCoffee);
    // console.log(sizeofCoffee);
    // console.log(quantityofCoffee);
    array.push(coffee)
    result.innerHTML = `${array}`





}
