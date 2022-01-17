var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("regisBtn");

var usernameLogin = document.getElementById("usernameLogin");
var passwordLogin = document.getElementById("passwordLogin");

var fullnameRegis = document.getElementById("fullnameRegis");
var emailRegis = document.getElementById("emailRegis");
var usernameRegis = document.getElementById("usernameRegis");
var passwordRegis = document.getElementById("passwordRegis");
var passwordRepeatRegis = document.getElementById("passwordRepeatRegis");

const url_login = "http://localhost:3112/log/jwt"
const url_regis = "http://localhost:3112/log/register"

function register(){
    registerForm.style.transform = "translateX(-283px)";
    loginForm.style.transform = "translateX(-283px)";
    const smalls = document.querySelectorAll('.control-form small');
    smalls.forEach(small => {
        small.innerText = '';
    })
}

function login(){
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    const smalls = document.querySelectorAll('.control-form small');
    smalls.forEach(small => {
        small.innerText = '';
        small.parentElement.className = 'control-form';
    })
}


loginBtn.addEventListener('click', (e) => {

  try {

    e.preventDefault();
    fetch(url_login, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            username: usernameLogin.value,
            password: passwordLogin.value
        })
    })
    .then(response => response.json())
    .then(data =>{
        document.cookie = 'Authorization=Bearer '+`${data.jwtToken}`;
        if(`${data.status}` == 400){
           
        
            if (usernameLogin.value == '' && passwordLogin.value == ''){
                addErrorForm(usernameLogin, "Username can't be blank");
                addErrorForm(passwordLogin, "Password can't be blank")
            } else if (usernameLogin.value == ''){
                addErrorForm(usernameLogin, "Username can't be blank")
            } else if (passwordLogin.value == ''){
                addErrorForm(passwordLogin, "Password cant' be blank")
            }

        }
        else {
            alert(`${data.notify}`);
        }
    })
      
  } catch (error) {
      console.log(error);
  }

})

registerBtn.addEventListener('click', (e) => {

    try {

        e.preventDefault();
        fetch(url_regis, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: fullnameRegis.value,
                email: emailRegis.value,
                username: usernameRegis.value,
                password: passwordRegis.value,
                passwordRepeat: passwordRepeatRegis.value
            })
        })
        .then(response => response.json())
        .then(data => {
            
            if(`${data.status}` == 400){
                // alert("Register Failed");
                if(fullnameRegis.value == ''){
                    alert('Không được để trống username');
                }
                else if(emailRegis.value == ''){
                    alert('Không được để trống email');
                }
                else if(usernameRegis.value == ''){
                    alert('Không được để trống username');
                }
                else if(passwordRegis.value == ''){
                    alert('Không được để trống password');
                }
                else if(passwordRepeatRegis.value == ''){
                    alert('Không được để trống repeat password');
                }
            }
            else {
                alert(`${data.notify}`);
                if(`${data.notify}` == "Successfully Register"){
                    fullnameRegis.value = '';
                    emailRegis.value = '';
                    usernameRegis.value = '';
                    const smalls = document.querySelectorAll('.control-form.success small');
                    smalls.forEach(small => {
                    small.parentElement.className = 'control-form';
                })
                }
            }

            passwordRegis.value='';
            passwordRepeatRegis.value='';
            
        })
        
    } catch (error) {
        console.log(error);
    }
   
})


usernameLogin.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(usernameLogin.value == ''){
        addErrorForm(usernameLogin, "Username can't be blank")
    } else {
        addSuccessForm(usernameLogin);
    }
})

passwordLogin.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(passwordLogin.value == ''){
        addErrorForm(passwordLogin, "Password can't be blank")
    } else {
        addSuccessForm(passwordLogin);
    }
})

fullnameRegis.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(fullnameRegis.value == ''){
        addErrorForm(fullnameRegis, "Full name can't be blank")
    } else if(fullnameRegis.value.startsWith(' ')){
        addErrorForm(fullnameRegis, "Full name is invalid")
    }
     else if (!(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]{1,30}$/.test(fullnameRegis.value))){
        addErrorForm(fullnameRegis, "Full name can't be contain numbers and special characters");
    }
    else {
        addSuccessForm(fullnameRegis);
    }
})

emailRegis.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(emailRegis.value == ''){
        addErrorForm(emailRegis, "Email can't be blank");
    } else if(!(/^[a-zA-Z0-9-_.]+[@][a-zA-Z0-9.]+$/.test(emailRegis.value))){
        addErrorForm(emailRegis, "This email is invalid");
    }
    else {
        addSuccessForm(emailRegis);
    }
})

usernameRegis.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(usernameRegis.value == ''){
        addErrorForm(usernameRegis, "Username can't be blank")
    } else if (!(/^[a-zA-Z0-9-_.]{8,30}$/.test(usernameRegis.value))){
        addErrorForm(usernameRegis, "Username can only contain letters, numbers, characters '-', '.', '_', at least 8 characters and up to 30 characters")
    }
    else {
        addSuccessForm(usernameRegis);
    }
})

passwordRegis.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(passwordRegis.value == ''){
        addErrorForm(passwordRegis, "Password can't be blank")
    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(passwordRegis.value))){
        addErrorForm(passwordRegis, 'Password must contain at least one lowercase letter, one uppercase letter, one number and at least 8 characters')
    }
    else {
        addSuccessForm(passwordRegis);
    }
})

passwordRepeatRegis.addEventListener('blur', (e) => {
    e.defaultPrevented;
    if(passwordRepeatRegis.value == ''){
        addErrorForm(passwordRepeatRegis, "Retype password can't be blank")
    } else if(passwordRepeatRegis.value != passwordRegis.value){
        addErrorForm(passwordRepeatRegis, "Retype password don't match")
    }
    else {
        addSuccessForm(passwordRepeatRegis);
    }
})

function addSuccessForm(option){
    const controlForm = option.parentElement;
    controlForm.className = 'control-form success';
    const small = controlForm.querySelector('small');
    small.innerText = '';
}

function addErrorForm(option, message){
    const controlForm = option.parentElement;
    controlForm.className = 'control-form error';
    const small = controlForm.querySelector('small');
    small.innerText = message;
}