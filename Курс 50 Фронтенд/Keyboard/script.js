document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.value;
        let resultCont = document.getElementsByClassName('result')[0]
        resultCont.innerHTML += `${keyValue}`
      });
    });
let keySpace = document.getElementsByClassName('keyspace')[0]
keySpace.addEventListener('click', () => {
    let spaceValue = ' '
    let resultCont = document.getElementsByClassName('result')[0]
    resultCont.innerHTML += `${spaceValue}`
})

let keyDelete = document.getElementsByClassName('keydelete')[0]
keyDelete.addEventListener('click', () => {
    let resultCont = document.getElementsByClassName('result')[0]
    resultCont.innerHTML = ``
})

let delLetter = document.getElementsByClassName('delletter')[0]
delLetter.addEventListener('click', () => {
    let resultCont = document.getElementsByClassName('result')[0]
    let delLet = resultCont.textContent;
    
  var newText = delLet.substring(0, delLet.length -1);
  resultCont.textContent = newText;
})

// Первом обзаце мы подключили все кнопки через Кюэри селектор и повесили Эдвэнт Лисенер чтоб при нажатии буквы отображались на экран   //
//Во втором обзаце работали с кнопкой Space тоже повешали эдвэнт лисенер при клике чтоб было пустое место //
// В третьем с кнопкой delete что при нажатии удалил всю строку с описанием inner HTML с пустыми косыми ковычками //
// последнем мы создали кнопкуу чтоб по одному удалила буквы с конца с помощью функции substring //