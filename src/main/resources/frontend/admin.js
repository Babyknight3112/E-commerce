
var list = document.querySelector('.list');
var add = document.querySelector('.add');
var deletePr = document.querySelector('.deletePr');
var updatePr = document.querySelector('.updatePr');
var id = document.getElementById('id');
var idDelete = document.getElementById('idDelete');
var productName = document.getElementById('productName');
var description = document.getElementById('description');
var mainImage = document.getElementById('mainImage');
var subImage1 = document.getElementById('subImage1');
var subImage2 = document.getElementById('subImage2');
var subImage3 = document.getElementById('subImage3');
var subImage4 = document.getElementById('subImage4');
var category = document.getElementById('category');
var price = document.getElementById('price');

let output = '';

const url_all = 'http://localhost:3112/product/get';
const url_add = 'http://localhost:3112/product/post';
const url_delete = 'http://localhost:3112/product/delete';
const url_update = 'http://localhost:3112/product/put';

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td>${post.category}</td>
        <td>${post.description}</td>
        <td>${post.price}</td>
        </tr>`;
    });
    list.innerHTML = output;
}


fetch(url_all)
    .then(response => response.json())
    .then(data => renderPosts(data))


add.addEventListener('submit', (e) => {
    e.preventDefault;
    fetch(url_add, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            name: productName.value,
            description: description.value,
            image: mainImage.value,
            sub1: subImage1.value,
            sub2: subImage2.value,
            sub3: subImage3.value,
            sub4: subImage4.value,
            category: category.value,
            price: price.value
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr);
        })

    console.log('ok');
    location.reload();
});

deletePr.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log('ok');
    fetch(`${url_delete}/${idDelete.value}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => location.reload())
})


updatePr.addEventListener('submit', (e) => {
    e.preventDefault;
    fetch(`${url_update}/${idDelete.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            name: productName.value,
            description: description.value,
            image: mainImage.value,
            sub1: subImage1.value,
            sub2: subImage2.value,
            sub3: subImage3.value,
            sub4: subImage4.value,
            category: category.value,
            price: price.value
        })
    })
    .then(response => response.json())
    .then(() => location.reload())
})




