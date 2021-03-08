let buttonLoadMore = document.getElementById('buttonLoadMore');
buttonLoadMore.addEventListener('click', loadOneProduct);

function loadOneProduct(){
    console.log(this);
    this.classList.add('loading');
    getOneProduct();
}
// setTimeout(() => {
//     const response = {
//         title: "iPhone 12 PRO MAX",
//         price: "$1500",
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
//         img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
//     }
//     console.log("Дані прийшли");

//     setTimeout(() => {
//         response.isLoaded = true;
//         console.log("Дані опрацьовані", response);
//     }, 3000)

// }, 2000)

// let templateProduct = 

function getOneProduct(){
    console.log("Запитали дані");
    const pr = new Promise(function (resolve, reject){
        setTimeout(() => {
            const response = {
                data : [{
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            },
            {
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            },
            {
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            },
            {
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            },
            {
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            },
            {
                status: "active",
                title: "iPhone 12 PRO MAX",
                price: "$1500",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus quas non voluptate corporis molestiae doloremque deserunt? Iure veritatis eveniet ratione a doloribus commodi ex, itaque ad totam, aspernatur dignissimos.",
                img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg"
            }],
            status: "active"
        }
            if(response.status === "active"){
                resolve(response); 
            }else{
                reject({status: 401});
            }
        }, 1000)
    })
    
    pr.then(response =>{
        console.log("Дані прийшли");
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
            resolve(response.data);
            }, 1000)
        })
    }).then(responseData =>{
        console.log("Дані опрацьовані", responseData);
        responseData.forEach(product =>{
            let newProduct = document.querySelector('.products__item').cloneNode(true);
            newProduct.querySelector('.products__title').innerHTML = product.title;
            newProduct.querySelector('.products__description').innerHTML = product.description;
            newProduct.querySelector('.products__price').innerHTML = "$" + product.price;
            newProduct.querySelector('.products__img').setAttribute('style',`background-image: url(${product.img});`);
            // newProduct.querySelector('.products__img').style.backgroundImage = `url:(${responseData.img})`;
            document.getElementById('products').appendChild(newProduct);
        })
    }).catch(error =>{
        console.log("Error: ", error)
        if(error.status === 401){
            alert("Спочатку треба авторизуватися");
        }
    }).finally(data =>{
        buttonLoadMore.classList.remove('loading');
    })
}

//sleep(ms)

const sleep = ms => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(function(){
    console.log("Ready after 2s");
})

sleep(5000).then(function(){
    console.log("Ready after 5s");
})

Promise.all([sleep(2000), sleep(5000)]).then(() => console.log("Succsess all"));
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log("Succsess one after 2s"));