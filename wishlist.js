let wishlistLS = JSON.parse(localStorage.getItem("wishlist")) || []
let mainSection = document.getElementById("container")
 display(wishlistLS) 
function display(data){
    console.log(data)
    mainSection.innerHTML="";
    data.forEach((element,index) => {
        let card = document.createElement("div")
        card.classList.add("card")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let removebtn = document.createElement("button")
        
        
        image.setAttribute("src",element.img)
        title.innerText = element.title;
        price.innerText = `₹${element.price}`;
        removebtn.innerText = "X";

        removebtn.addEventListener("click",(e)=>{
            e.preventDefault();
            data=data.filter((el,i)=>{
               
                if(index==i){
                    return false;
                }else{
                    return true;
                }
                
            })
            localStorage.setItem("wishlist",JSON.stringify(data));
            display(data)
        })
        
        
        card.append(image,removebtn,title,price);
        mainSection.append(card);
    });   
}
