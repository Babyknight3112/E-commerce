var add = document.querySelector('#addPr');
var productName = document.getElementById('productName');
var description = document.getElementById('description');
var mainImage = document.getElementById('mainImage');
var subImage1 = document.getElementById('subImage1');
var subImage2 = document.getElementById('subImage2');
var subImage3 = document.getElementById('subImage3');
var subImage4 = document.getElementById('subImage4');
var category = document.getElementById('category');
var price = document.getElementById('price');

const url_add = 'http://localhost:3112/product/post';

console.log(add);

add.addEventListener('submit', (e) => {
    e.preventDefault;

    if (productName.value == '' || productName.value.startsWith(' ')){
        alert('Tên sản phẩm không được để trống và không bắt đầu bằng ký tự whitespace');
    } else if (description.value == '' || description.value.startsWith(' ')){
        alert('Mô tả sản phẩm không được để trống và không bắt đầu bằng ký tự whitespace');
    } else if (mainImage.value == '' || mainImage.value.startsWith(' ')){
        alert('Ảnh không hợp lệ');
    } else if (subImage1.value == '' || subImage1.value.startsWith(' ')){
        alert('Ảnh không hợp lệ');
    } else if (subImage2.value == '' || subImage2.value.startsWith(' ')){
        alert('Ảnh không hợp lệ');
    } else if (subImage3.value == '' || subImage3.value.startsWith(' ')){
        alert('Ảnh không hợp lệ');
    } else if (subImage4.value == '' || subImage4.value.startsWith(' ')){
        alert('Ảnh không hợp lệ');
    } else if (category.value == '' || category.value.startsWith(' ')){
        alert('Loại sản phẩm không được để trống và không bắt đầu bằng ký tự đặc biệt');
    } else if (price.value == ''){
        alert('Chưa điền giá trị sản phẩm');
    } else {
        console.log('add');
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
                alert('Thêm sản phẩm thành công');
                // const dataArr = [];
                // dataArr.push(data);
                // renderPosts(dataArr);
            })
    }

    

    // console.log('ok');
    // location.reload();
});

