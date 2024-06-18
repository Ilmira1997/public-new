let nasibajon = document.querySelector('nameBtn')[0]

nasibajon.addEventListener('click', nigoraxon)

let studentArray = []
function nigoraxon() {
    let inputName = document.getElementsByClassName('student_name')[0].value;
  let resultCont = document.getElementsByClassName('result')[0];
   let inputNameValue = inputName.value;
   studentArray.push(inputNameValue)
   console.log(studentArray);
   resultCont.innerHTML = `<div class='result'>Ваш список студентов ${studentArray} </div> `
   console.log(resultCont);
}

let masha = document.getElementsByClassName('nameBtn_2')[0];
masha.addEventListener('click', deleteMasha)

function deleteMasha() {
let inputName = document.getElementsByClassName('student_name')[0];
let resultCont = document.getElementsByClassName('result')[0];
let inputNameValue = inputName.value;
studentArray.pop(inputNameValue)
resultCont.innerHTML = `<div class='result'>Ваш список студентов ${studentArray}</div>`
console.log(studentArray);
}

