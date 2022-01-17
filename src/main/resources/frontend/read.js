var list = document.querySelector('#list'); // OK
let output = '';

const url_all = 'http://localhost:3112/product/get';

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

fetch(url_all)
    .then(response => response.json())
    .then(data => renderPosts(data))
