
let mainSection = document.getElementById("data-list-wrapper")
let productArray =JSON.parse(localStorage.getItem("View Details")) || [];;
let wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || []
let paginationCard = document.getElementById("pagination-card")

let bedroom = document.getElementById("bedroom")
let checkBoxs = document.querySelectorAll("#rooms-filter input");
let searchEl = document.getElementById("search");
// let searchInp = document.getElementById("nav_search")

checkBoxs.forEach((inputTag)=>{
    inputTag.addEventListener('change',filterData)
})

let sortEl = document.getElementById("sort")

let url = "https://projecteliteleasejsonserver.onrender.com/Furniture";
let sortDesc = "https://projecteliteleasejsonserver.onrender.com/Furniture?_sort=price&_order=desc";
let sortAsc = "https://projecteliteleasejsonserver.onrender.com/Furniture?_sort=price&_order=asc";


  let productData=[];
  async function fetchAndRenderProducts(pageNumber){
    let res = await fetch(`${url}?_page=${pageNumber}&_limit=13`)
    let totalUsers = res.headers.get("X-Total-Count");
    console.log(totalUsers)
    showPagination(totalUsers,10)
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
  
  searchEl.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(element.type)
    let searchInp = document.getElementById("nav_search").value;
    let filtered = productData.filter(element=>{
            if(element.type.toUpperCase().includes(searchInp.toUpperCase())==true){
                return true;
            }else{
                return false;
            }
        
    })
    console.log(filtered)
    display(filtered)

})

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
        card.classList.add("card")
        let button = document.createElement("button")
        let image = document.createElement("img")
        let title = document.createElement("h3")
        let price = document.createElement("p")
        let addToCartBtn = document.createElement("button")
        let wishlishBtn = document.createElement("button")
        wishlishBtn.classList.add("wishlistBtn")
        
        image.setAttribute("src",element.img)
        title.innerText = element.title;
       
        price.innerText = `₹${element.price}/mo`;
        addToCartBtn.innerText = "Add To Cart"
        
        
        let quickViewBtn = document.createElement("button")
        quickViewBtn.classList.add("quick-view")
        quickViewBtn.innerText = "View Details"
        wishlishBtn.innerText = "Wishlist"
        button.innerText = "1"

        wishlishBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            wishlishBtn.innerText = "Wishlisted"
            wishlistArray.push(element)
            localStorage.setItem("wishlist",JSON.stringify(wishlistArray))
        })
       
        quickViewBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            productArray.push(element)
            localStorage.setItem("view-details",JSON.stringify(productArray))
            window.location.href = "productDetails.html"
        })
        card.append(image,title,wishlishBtn,price,quickViewBtn);
        mainSection.append(card);
    });

    
    
}

// pagination

function showPagination(totalItems,limit){
    let numberOfBtns = Math.ceil(totalItems/limit)
    paginationCard.innerHTML=null;
    for(let i=1;i<=numberOfBtns;i++){
        paginationCard.append(getButton(i,i))
    }
}

function getButton(text,pageNumber){
    let button = document.createElement("button")
    button.classList.add("pagination-button")
    button.setAttribute("data-page-number",pageNumber)
    button.innerText=text;

    button.addEventListener("click",function(e){
        let pageNumber = e.target.dataset["pageNumber"];
        fetchAndRenderProducts(pageNumber)

    })
    return button;
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
    fetchAndRenderProducts(1);
  });




