
let productList = document.querySelector('.row-pr');
let containerSingle = document.querySelector('.container-single');
let containerDetails = document.querySelector('.container-details');
let header = document.querySelector('.header-pr');
let page_btn = document.querySelector('.page-btn');
const urlAll = "http://localhost:3112/product/get";
const urlGetOrderByPrice = "http://localhost:3112/product/get/price"
let output1 = '';
let output2 = '';

const initial = `<h2>All Products</h2>
<select name="" id="" size="1px" class="optionProduct">
    <option value="1">Default Sorting</option>
    <option value="2">Sort By Price</option>
    <option value="3">Sort by Popularity</option>
    <option value="4">Sort by Rating</option>
    <option value="5">Sort by Sale</option>
</select>
<br>`;

const headerSingleProduct = ` <h2>Product Detail</h2>`;

const page_btn_config = `
<span>1</span>
<span>2</span>
<span>3</span>
<span>&#8594</span>`;


function start() {
    header.innerHTML = initial;
    getProduct(urlAll);
    page_btn.innerHTML = page_btn_config;
}

start();

function getProduct(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => renderPosts(data))
}


const renderPosts = (posts) => {
    posts.forEach(post => {
        output1 += `<div class="col-4-pr" id="">
        <a href="" id="${post.id}" onclick="myFunction(this.id)"><img src="${post.image}" alt=""></a>
        <h4>${post.name}</h4>
        <p>${post.price}$</p>
    </div>`;
    })
    productList.innerHTML = output1;
}

var optionProduct = document.querySelector('.optionProduct');

optionProduct.addEventListener('change', (e) => {
    e.preventDefault;
    if (e.target.value == "1") {
        output1 = '';
        getProduct(urlAll);
    }
    if (e.target.value == "2") {
        output1 = '';
        getProduct(urlGetOrderByPrice);
    }
    if (e.target.value == "3") {
        output1 = '';
        getProduct(urlAll);
    }
    if (e.target.value == "4") {
        output1 = '';
        getProduct(urlAll);
    }
    if (e.target.value == "5") {
        output1 = '';
        getProduct(urlAll);
    }
})

function myFunction(id){
    getDetailProduct(id);
}

console.log(containerDetails);

// col4pr.addEventListener('click', (e) => {
    
//     console.log(e.target.value);
// })






