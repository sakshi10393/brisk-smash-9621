let productArr = JSON.parse(localStorage.getItem("view-details")) || [];
let cartArray =JSON.parse(localStorage.getItem("cart")) || [];
let leftCard = document.getElementById("left-card")
let rightCard = document.getElementById("right-card")
display(productArr)

function display(data){
    leftCard.innerHTML="";
    data.forEach(element => {
        let card1 = document.createElement("div")
        let card2 = document.createElement("div")
        card2.classList.add("card-2")
        let card3 = document.createElement("div")
        card3.classList.add("card-3")
        let div11 = document.createElement("div")
        div11.classList.add("div11")
        let div22 = document.createElement("div")
        div22.classList.add("div22")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let title2 = document.createElement("h4")
        let price = document.createElement("p")
        let desc = document.createElement("p")
        let whyRentFromUsText = document.createElement("h2")
        whyRentFromUsText.classList.add("whyRentFromUsText")
        let productDetailsText = document.createElement("h2")
        productDetailsText.classList.add("productDetailsText")
        let addToCartBtn = document.createElement("button")
        addToCartBtn.classList.add("addToCartBtn")
        let div11Text1 = document.createElement("li")
        let div11Text2 = document.createElement("li")
        let div11Text3 = document.createElement("li")
        let div11Text4 = document.createElement("li")
        let div11Text5 = document.createElement("li")
        let price2 = document.createElement("p")
        let size = document.createElement("p")
        

        


        

        
        image.setAttribute("src",element.img)
        title.innerText = element.title;
        price.innerText = `₹${element.price}/mo`;
        desc.innerText = element.desc
        whyRentFromUsText.innerText = "Why rent from us?"
        productDetailsText.innerText = "Product Details";
        addToCartBtn.innerText = "Add To Cart"
        div11Text1.innerText = "Relocate for free when you move";
        div11Text2.innerText = "Furniture as good as new";
        div11Text3.innerText = "Easy returns, no questions asked";
        div11Text4.innerText = "Free maintenance and annual cleaning";
        div11Text5.innerText = "Keep upgrading to newer designs";
        title2.innerText = element.title;
        price2.innerText = `Price :₹${element.price}/mo`;
        size.innerText = `Size : ${element.size}`


        
        addToCartBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            cartArray.push(element)
            localStorage.setItem("cart",JSON.stringify(cartArray))
            alert("Item Added To Cart")
        })

        div22.append(title2,desc,price,size)
        productDetailsText.append(div22)
        div11.append(div11Text1,div11Text2,div11Text3,div11Text4,div11Text5)
        whyRentFromUsText.append(div11)
        card3.append(whyRentFromUsText,productDetailsText)
        card2.append(title,price,addToCartBtn)
        rightCard.append(card2)
        card1.append(image,card3);
        leftCard.append(card1);
    });  
    
}