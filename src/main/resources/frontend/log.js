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

console.log(fullnameRegis);
console.log(emailRegis);
console.log(usernameRegis);
console.log(passwordRegis);
console.log(passwordRepeatRegis);

const url_login = "http://localhost:3112/log/jwt"
const url_regis = "http://localhost:3112/log/register"

function register(){
    registerForm.style.transform = "translateX(-283px)";
    loginForm.style.transform = "translateX(-283px)";
}

function login(){
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
}


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(usernameLogin.value);
    console.log(passwordLogin.value);
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
        console.log(data);
        document.cookie = 'Authorization=Bearer '+`${data.jwtToken}`;
        alert("Successfully Logined");
    })
    // .then(data => {
    //     const dataArr = [];
    //     dataArr.push(data);
    //     renderPosts(dataArr);
    // })
}

    // nameValue.value = '';
    // usernameValue.value = '';
    // location.reload();   
)

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
            console.log(data);
            fullnameRegis.value='';
            emailRegis.value='';
            usernameRegis.value='';
            passwordRegis.value='';
            passwordRepeatRegis.value='';
            alert(`${data.notify}`);
        })
        
    } catch (error) {
        console.log(error);
    }
   
})
