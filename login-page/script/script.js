// get all elemment need
// 1) get all span
var spans=document.querySelectorAll("span");
// console.log(spans);
// get values from inputs
const login=document.querySelector("#login");
const password=document.querySelector("#password");
const passwordConfirme=document.querySelector("#password-confirmer");


// using the function to hide all spansns
spans.forEach(span=>hideElement(span));

//


//function to make element hideen=> invisible
function hideElement(element) {
    element.style.display='None'
}

// functio for validate the login
function validateLogin(login) {
    let loginValue=login.value;
    loginValue.trim();
    return loginValue.length >0 && loginValue.indexOf(" ")==-1;
}

// function the password for the user

function validatePassword(password) {
    let passwordValue=password.value;
    passwordValue.trim();
    // console.log(passwordValue)
    let hasNumber=false
    let hasUpperCaseChar=false
    for (let index = 0; index <passwordValue.length; index++) {
        if(passwordValue.charCodeAt(index)>47 && passwordValue.charCodeAt(index)<58)
            hasNumber=true
        if(passwordValue.charCodeAt(index)>64 && passwordValue.charCodeAt(index)<91)
            hasUpperCaseChar=true
        

    }
    return hasNumber && hasUpperCaseChar
}

// function 2 check password
function ConfirmPassword(password,passwordAconfirmer) {
    let passwordValue=password.value.trim();
    let passwordAconfirmerValue=passwordAconfirmer.value.trim();
    // console.log(passwordAconfirmerValue,passwordValue)
    return passwordValue===passwordAconfirmerValue
}



//verifie the login
login.addEventListener('focus',function(){
    spans[1].style.display='none'
    spans[0].style.display='none'
});
login.addEventListener('blur',function(){
    // console.log(validateLogin(login));     
    if(validateLogin(login)){
        if(spans[1].classList.contains('valide'))
            spans[1].style.display='block'
    }
    else {
        if(spans[0].classList.contains('ereur'))
        spans[0].style.display='block'

    }
    
    
});

// verfie the password
password.addEventListener('focus',function(){
    spans[2].style.display='none'
    spans[3].style.display='none'
});
password.addEventListener('blur',function(){
    // console.log(validateLogin(login));     
    if(validatePassword(password)){
        if(spans[3].classList.contains('valide'))
            spans[3].style.display='block'
    }
    else {
    if(spans[2].classList.contains('ereur'))
        spans[2].style.display='block'
    }
});

// confir the password
passwordConfirme.addEventListener('focus',function(){
    spans[4].style.display='none'
    spans[5].style.display='none'
});
passwordConfirme.addEventListener('blur',function(){
    // console.log(validateLogin(login));     
    if(ConfirmPassword(password,passwordConfirme)){
        if(spans[5].classList.contains('valide'))
            spans[5].style.display='block'
    }
    else {
    if(spans[4].classList.contains('ereur'))
        spans[4].style.display='block'
    }
});