function updatePhoneCode(){
   let country = document.getElementsByName("country")[0].value
   let phone = document.getElementsByName("phone")[0]


    if(country=="uzb") {
      phone.value = "+998"
    } 

    if(country=="usa") {
        phone.value = "+1"   
      } 


      if(country=="ru") {
        phone.value = "+7"
      } 
    }
function checkconfirm() {
  
  let confirm = document.getElementsByName("confirm")[0].checked
  let sendBtn = document.getElementsByName("sendBtn")[0]

   if(confirm==true) {
   // убрать атрбут disabled
    sendBtn.removeAttribute("disabled")
   } else {
    sendBtn.setAttribute("disabled", "disabled")
   }   
  
}
