

// btn.onclick = function(){
//     const parent = btn.parentElement;
//     const child = parent.querySelector('p');
//     console.log(child.textContent);
// }

var list = document.querySelector('.container-delete'); // OK
let output = '';

const url_all = 'http://localhost:3112/product/get';
const url_delete = 'http://localhost:3112/product/delete';

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `<div class="card" style="width: 15rem;">
        <img class="card-img-top" src="${post.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${post.category}</h5>
            <p class="card-text">${post.name}</p>
            <h6>${post.id}</h6>
            <button type="button" class="btn btn-outline-danger" id="button-delete">Delete</button>
        </div>
    </div>`;
    });
    list.innerHTML = output;
}

fetch(url_all)
    .then(response => response.json())
    .then(data => renderPosts(data))


const container_delete = document.querySelector('.container-delete');
container_delete.addEventListener('click', (e) => {
    //     console.log(e.target.id)
    //     console.log(e.target.parentElement.querySelector('h6').textContent);
    e.preventDefault;
    const result = e.target.id == 'button-delete';
    const id_delete = e.target.parentElement.querySelector('h6').textContent;
    if (result) {
        fetch(`${url_delete}/${id_delete}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => location.reload())
    }
})









