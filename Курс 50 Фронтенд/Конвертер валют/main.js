function convert() {
   // console.log('Я тут');
   let usd = Number(document.getElementsByName('x')[0].value);
   // console.log(usd);
   let uzs = document.getElementsByName('result')[0];
   let exchange = usd * 12500;
   return uzs.value = exchange; 
}










