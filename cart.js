
let dataArr = JSON.parse(localStorage.getItem("cart"))||[];
console.log(dataArr)
let mainSection =document.getElementById("cart")
let emptycard=document.getElementById("emptyCart")
if(dataArr.length>0){
 emptycard.style.display="none"
} display(dataArr)

function display(data){
  
    data.forEach(element => {
        let card = document.createElement("div")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let Buy = document.createElement("button")
        image.src=element.img;
        title.textContent=element.title;
       
        price.innerText = `₹${element.price}`;
         Buy.innerText = "Buy Now"
        
        
        Buy.addEventListener("click",()=>{
           
            window.location.href = "payment.html";
        })

        card.append(image,title,price,Buy);
        mainSection.append(card);
    });
}
