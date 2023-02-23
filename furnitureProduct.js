
let mainSection = document.getElementById("data-list-wrapper")

let cartArray =JSON.parse(localStorage.getItem("cart")) || [];
let bedroom = document.getElementById("bedroom")
let checkBoxs = document.querySelectorAll("#rooms-filter input")

checkBoxs.forEach((inputTag)=>{
    inputTag.addEventListener('change',filterData)
})

// checkBoxs.addEventListener("")
let sortEl = document.getElementById("sort")


let url = "https://jsonservereliteleaseproject.onrender.com/Furniture";
let sortDesc = "https://jsonservereliteleaseproject.onrender.com/Furniture?_sort=price&_order=desc"
let sortAsc = "https://jsonservereliteleaseproject.onrender.com/Furniture?_sort=price&_order=asc"


  let productData=[];
  async function fetchAndRenderProducts(){
    let res = await fetch(url)
    let data = await res.json()  

    productData = data.map(function(element){
        return {
            img : element.img,
            id : element.id,
            title : element.title,
            price : element.price,
            room : element.room,
            type : element.type,
            desc : element.desc,
            features : element.features,
            size : element.size
        }
    })
  console.log(productData)
    display(productData)
  }
  

async function fetchSortDesc(){
    try {
        let res = await fetch(sortDesc);
        res = await res.json();
        display(res);
    } catch (error) {
        console.log(error)
    }
}
async function fetchSortAsc(){
    try {
        let res = await fetch(sortAsc);
        res = await res.json();
        display(res);
    } catch (error) {
        console.log(error)
    }
}
sortEl.addEventListener("change",(e)=>{
    e.preventDefault();
    if(sortEl.value==""){
        display(productData)
    }else if(sortEl.value=="highLow"){
            fetchSortDesc()
    }else{
        if(sortEl.value=="lowHigh"){
            fetchSortAsc()
    }
    }
})
  
function display(data){
    mainSection.innerHTML="";
    data.forEach(element => {
        let card = document.createElement("div")

        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let addToCartBtn = document.createElement("button")
        

        
        image.setAttribute("src",element.img)
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

// checkBox filter
function filterData(){
        let arr=[]
        checkBoxs.forEach((input)=>{
            if(input.checked){
                arr.push(input.name)
            }
        })
        console.log(arr)
        let filteredArray = productData.filter((item)=>{
            let room = item.room;
            let flag=false;
            for(let el of arr){
                if(el === room){
                    flag = true;
                    break;
                }
            }
            if(flag){
                return true;
            }
            return false;
            
        })
        if(filteredArray.length==0){
            display(productData)
        }else{
            display(filteredArray)
        }          
}

window.addEventListener("load", () => {
    fetchAndRenderProducts();
  });




