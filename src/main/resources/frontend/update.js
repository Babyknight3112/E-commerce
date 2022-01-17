var list = document.querySelector('.container-update'); // OK

var id = document.getElementById('idPr');
var namePr = document.getElementById('namePr');
var descriptionPr = document.getElementById('descriptionPr');
var imagePr = document.getElementById('imagePr');
var categoryPr = document.getElementById('categoryPr');
var pricePr = document.getElementById('pricePr');

var updateForm = document.getElementById('update-form');

console.log(updateForm);

let output = '';


const url_all = 'http://localhost:3112/product/get';
const url_id = 'http://localhost:3112/product/get/id';
const url_update = 'http://localhost:3112/product/put';


const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `<div class="card" style="width: 15rem;">
        <img class="card-img-top" src="${post.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${post.category}</h5>
            <p class="card-text">${post.name}</p>
            <h6>${post.id}</h6>
            <button type="button" class="btn btn-outline-danger" id="button-update">Update</button>
        </div>
    </div>`;
    });
    list.innerHTML = output;
}

fetch(url_all)
    .then(response => response.json())
    .then(data => renderPosts(data))


const container_update = document.querySelector('.container-update');
container_update.addEventListener('click', (e) => {
    // console.log(e.target.id)
    // console.log(e.target.parentElement.querySelector('h6').textContent);
    e.preventDefault;
    const result = e.target.id == 'button-update';
    const id_update = e.target.parentElement.querySelector('h6').textContent;

    if (result) {
        fetch(`${url_id}/${id_update}`)
            .then(response => response.json())
            .then(post => {
                console.log(post);
                id.value = `${post.id}`;
                namePr.value = `${post.name}`;
                descriptionPr.value = `${post.description}`;
                imagePr.value = `${post.image}`;
                categoryPr.value = `${post.category}`;
                pricePr.value = `${post.price}`;
            })
    }
})

updateForm.addEventListener('submit', (e) => {
    e.defaultPrevented;
    if (id.value == '') {
        alert('Chưa nhập ID sản phẩm')
    } else if (namePr.value == '') {
        alert('Chưa nhập tên sản phẩm')
    } else if (descriptionPr.value == '') {
        alert('Chưa nhập mô tả sản phẩm')
    } else if (imagePr.value == '') {
        alert('Chưa nhập ảnh sản phẩm')
    } else if (categoryPr.value == '') {
        alert('Chưa nhập loại sản phẩm')
    } else if (pricePr.value == '') {
        alert('Chưa nhập giá trị sản phẩm')
    } else {
        fetch(`${url_update}/${id.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: namePr.value,
                description: descriptionPr.value,
                image: imagePr.value,
                category: categoryPr.value,
                price: pricePr.value
            })
        })
            .then(response => response.json())
            .then(() => location.reload())
    }
})