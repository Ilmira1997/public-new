function conventorCrnc() {
    let USD = Number(document.getElementsByName("x")[0].value);
    let result = USD * 12450;
    let UZB = document.getElementsByName("result")[0]
    return UZB.value = result;
}