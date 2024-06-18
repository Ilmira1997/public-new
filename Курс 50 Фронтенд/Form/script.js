sendBtn.addEventListener('click', sendInfo);
function sendInfo() {
    let userName = document.getElementsByClassName('input_name')[0].value;
    let userSurName = document.getElementsByClassName('input_surname')[0].value;
    let userAge = document.getElementsByClassName('input_age')[0].value;
    if (userAge == 10 || userAge == 12) {
        return console.log(`Добро пожаловать мой юный друг ${userName}`);  
    } 
    else  {
        return console.log(`Добро пожаловать мистер ${userName}`);
    }
}
sendBtn.addEventListener('click', sendInfo);
function sendInfo() {
    let userName = document.getElementsByClassName('input_name')[0].value;
    let userSurName = document.getElementsByClassName('input_surname')[0].value;
    let userAge = document.getElementsByClassName('input_age')[0].value;
    if (userName == 'Yunus') {
        return console.log(`your name is ${userName}`);
    } else  {
        return console.log(`your name is not Yunus`);
    }
}