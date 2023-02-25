
let mainSection = document.getElementById("data-list-wrapper")
let productArray =JSON.parse(localStorage.getItem("View Details")) || [];;
// let cartArray =JSON.parse(localStorage.getItem("cart")) || [];
let bedroom = document.getElementById("bedroom")
let checkBoxs = document.querySelectorAll("#rooms-filter input")

checkBoxs.forEach((inputTag)=>{
    inputTag.addEventListener('change',filterData)
})

let sortEl = document.getElementById("sort")

let url = "https://jsonservereliteleaseproject.onrender.com/Furniture";
let sortDesc = "https://jsonservereliteleaseproject.onrender.com/Furniture?_sort=price&_order=desc";
let sortAsc = "https://jsonservereliteleaseproject.onrender.com/Furniture?_sort=price&_order=asc";



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
        
        
        let quickViewBtn = document.createElement("button")
        quickViewBtn.classList.add("quick-view")
        quickViewBtn.innerText = "View Details"
        // addToCartBtn.addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     cartArray.push(element)
        //     localStorage.setItem("cart",JSON.stringify(cartArray))
        // })
       
        quickViewBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            productArray.push(element)
            localStorage.setItem("view-details",JSON.stringify(productArray))
            window.location.href = "productDetails.html"
        })

        card.append(image,title,price,quickViewBtn);

       
        mainSection.append(card);
    });
}