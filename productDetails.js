let productArr = JSON.parse(localStorage.getItem("view-details")) || [];
let cartArray =JSON.parse(localStorage.getItem("cart")) || [];
let leftCard = document.getElementById("left-card")
let rightCard = document.getElementById("right-card")

display(productArr)

function display(data){
    leftCard.innerHTML="";
    console.log(data)
    data.forEach(element => {
        let card1 = document.createElement("div")
        let card2 = document.createElement("div")
        let card3 = document.createElement("div")
        card3.classList.add("card-3")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let whyRentFromUsText = document.createElement("h2")
        whyRentFromUsText.classList.add("whyRentFromUsText")
        let productDetailsText = document.createElement("h2")
        productDetailsText.classList.add("productDetailsText")
        let addToCartBtn = document.createElement("button")
        

        
        image.setAttribute("src",element.img)
        title.innerText = element.title;
        price.innerText = `₹${element.price}`;
        whyRentFromUsText.innerText = "Why rent from us?"
        productDetailsText.innerText = "Product Details";
        addToCartBtn.innerText = "Add To Cart"
        
        addToCartBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            cartArray.push(element)
            localStorage.setItem("cart",JSON.stringify(cartArray))
        })

        card3.append(whyRentFromUsText,productDetailsText)
        card2.append(title,price,addToCartBtn)
        rightCard.append(card2)
        card1.append(image,card3);
        leftCard.append(card1);
    });  
    
}