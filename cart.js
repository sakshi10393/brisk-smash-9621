





let dataArr = JSON.parse(localStorage.getItem("cart"))||[];
display(dataArr)
function display(data){
    mainSection =document.getElementById("emptyCart")
    data.forEach(element => {
        let card = document.createElement("div")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let addToCartBtn = document.createElement("button")
        

        
        image.setAttribute("src",element.image)
        title.innerText = element.title;
       
        price.innerText = `₹${element.price}`;
        addToCartBtn.innerText = "Add To Cart"
        
        
        addToCartBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            cartArray.push(element)
            localStorage.setItem("cart",JSON.stringify(cartArray))
        })

        card.append(image,title,price,addToCartBtn);
        mainSection.append(card);
    });
}
