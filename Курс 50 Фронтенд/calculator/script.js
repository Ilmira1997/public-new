function plus () {
    let a = document.getElementsByName('x')[0].value;
    let b = document.getElementsByName('y')[0].value;
    let result = document.getElementsByName('result')[0];
    let c = Number(a) + Number(b);
    return result.value = c;
}

function minus () {
    let a = document.getElementsByName('x')[0].value;
    let b = document.getElementsByName('y')[0].value;
    let result = document.getElementsByName('result')[0];
    let c = Number(a) - Number(b);
    return result.value = c;
}

function deleniye () {
    let a = document.getElementsByName('x')[0].value;
    let b = document.getElementsByName('y')[0].value;
    let result = document.getElementsByName('result')[0];
    let c = Number(a) / Number(b);
    return result.value = c;
}

function umnojeniye () {
    let a = document.getElementsByName('x')[0].value;
    let b = document.getElementsByName('y')[0].value;
    let result = document.getElementsByName('result')[0];
    let c = Number(a) * Number(b);
    return result.value = c;
}

function stepen () {
    let a = document.getElementsByName('x')[0].value;
    let b = document.getElementsByName('y')[0].value;
    let result = document.getElementsByName('result')[0];
    let c = Math.pow(a, b)
    return result.value = c;
}