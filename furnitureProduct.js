
let mainSection = document.getElementById("data-list-wrapper")

let cartArray =JSON.parse(localStorage.getItem("cart")) || [];

let url = "https://jsonserverproject.onrender.com/Furniture";

window.addEventListener("load", () => {
    fetchAndRenderProducts();
    
  });



  let productData=[]
  async function fetchAndRenderProducts(){
    let res = await fetch(url)
    let data = await res.json()
   
    productData = data.map(function (element){
        return {
            image : element.image,
            title : element.title,
            price : element.price,
        }
    })
    
    display(productData)
    
  }
  

function display(data){
    mainSection.innerHTML="";
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