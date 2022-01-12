
let containerSingle = document.querySelector('.container-single');

const url = "http://localhost:3112/product/get/id/12";

function getProduct(id) {
    fetch(`http://localhost:3112/product/get/id/${id}`)
        .then(response => response.json())
        .then(data => renderPosts(data))
        
}


const renderPosts = (post) => {
        var output = `<div class="row-single">
        <div class="col-2-single">
            <img src="${post.image}" id="ProductImg" alt="" width="50%">
            <div class="row-small-img">
                <div class="col-4-small-img">
                    <img src="${post.sub1}" class="SmallImg" onclick="changeImg()" width="100%" alt="">
                </div>
                <div class="col-4-small-img">
                    <img src="${post.sub2}" class="SmallImg" onclick="changeImg()" width="100%" alt="">
                </div>
                <div class="col-4-small-img">
                    <img src="${post.sub3}" class="SmallImg" onclick="changeImg()" width="100%" alt="">
                </div>
                <div class="col-4-small-img">
                    <img src="${post.sub4}" class="SmallImg" onclick="changeImg()" width="100%" alt="">
                </div>
            </div>
        </div>
        <div class="col-2-single">
            <p>Home / ${post.category}</p>
            <h1>${post.name}</h1>
        
            <div class="size">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
            </div>
            <h4>${post.price}$</h4>
            <br>
            <div class="buy">
                <a href="">BUY NOW</a>
            </div>
            <br>
            <div class="jQ">
                <div class="m-khoi">
                    <h5 class="mtsp">Mô tả sản phẩm</h5>
                    <hr>
                    <div class="ndm-khoi">${post.description}</div>
                </div>
                    <hr>
                <div class="m-khoi">
                    <h5 class="hdcz">Hướng dẫn chọn size</h5>
                    <hr>
                    <div class="ndm-khoi">Hôm nay, là một ngày đẹp trời</div>
                </div>
                <hr>
                <div class="m-khoi">
                    <h5 class="hdtt">Hướng dẫn thanh toán</h5>
                    <hr>
                    <div class="ndm-khoi">Yêu em vì em là em thôi, được không?</div>
                </div>
                <hr>
                <div class="m-khoi">
                    <h5 class="csdt">Chính sách đổi trả</h5>
                    <hr>
                    <div class="ndm-khoi" id="csdt">Mãi mãi là bao xa?</div>
                </div>
            </div>
        
        
        </div>
        
        </div>`;
        containerSingle.innerHTML = output;
    }

    getProduct(1);

    var optionProduct = document.querySelector('.option');
    console.log(optionProduct);

    optionProduct.addEventListener('change', (e) => {
         e.preventDefault;
         console.log(e.target.value);
         getProduct(e.target.value);

    })


   
    function changeImg() {
        var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("SmallImg");

    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }

    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }

    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
    }

    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
    }

    SmallImg[4].onclick = function(){
        ProductImg.src = SmallImg[4].src;
    }
    }
    


