const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_check = document.getElementById('password_check');
const btn = document.querySelector('button');


btn.addEventListener("click", (e) => {
    e.preventDefault;
    console.log('JS');
    // checkInputs();
});

username.addEventListener('blur', (e) => {
    e.preventDefault;
    checkInput(username);
})


function checkInput(option){
    const valueCheck = option.value;
    if(valueCheck == '') {
        setErrorFor(option, 'Username can not be blank');
    }
    else {
        setSuccessFor(option);
    }
}

function setSuccessFor(option){
    const successForm = option.parentElement;
    successForm.className = 'form-control success';
}

function setErrorFor(option, message){
    const errorForm = option.parentElement;
    const small = errorForm.querySelector('small');
    small.innerText = message;
    errorForm.className = 'form-control error';
    
}









// function checkInputs() {
//     // get the values from the inputs
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const passwordCheckValue = password_check.value.trim();
    
//     if(usernameValue == ''){
//         // show error
//         // add error class
//         setErrorFor(username, 'Username cannot be blank')
//     } else {
//         // add success class
//         setSuccessFor(username)
//     }

//     if(emailValue == ''){
//         // show error
//         // add error class
//         setErrorFor(email, 'Email cannot be blank')
//     } else if(!isEmail(emailValue)) {
//         setErrorFor(email, 'Email is not vailid')
//     }
//     else {
//         setSuccessFor(email);
//     }

//     if(passwordValue == ''){
//         // show error
//         // add error class
//         setErrorFor(password, 'Username cannot be blank')
//     } else {
//         // add success class
//         setSuccessFor(password);
//     }

//     if(passwordCheckValue == ''){
//         // show error
//         // add error class
//         setErrorFor(password_check, 'Password check cannot be blank')
//     } else if(passwordCheckValue != passwordValue) {
//         setErrorFor(password_check, 'Password does not match');
//     } else {
//         // add success class
//         setSuccessFor(password);
//     }

// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement; //.form-control
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-control error'
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement; //.form-control
//     formControl.className = 'form-control success'
// }

// function isEmail(email) {
//     return /^.{2,3}$/.test(email);
// }


