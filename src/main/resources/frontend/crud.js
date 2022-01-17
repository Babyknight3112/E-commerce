
var add = document.querySelector('#addPr');
var deletePr = document.querySelector('.deletePr');
var updatePr = document.querySelector('.updatePr');
var id = document.getElementById('id');
var idDelete = document.getElementById('idDelete');


let output = '';



const url_update = 'http://localhost:3112/product/put';

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td>${post.category}</td>
        <td>${post.price}</td>
        <td><img src="${post.image}" alt="" width="50px"></td>
        </tr>`;
    });
    list.innerHTML = output;
}


add.addEventListener('submit', (e) => {
    console.log('add');
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
            // const dataArr = [];
            // dataArr.push(data);
            // renderPosts(dataArr);
        })

    console.log('ok');
    location.reload();
});




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




