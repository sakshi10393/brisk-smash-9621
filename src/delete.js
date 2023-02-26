let admindataEl = document.querySelector(".admindata");

let data = JSON.parse(localStorage.getItem("userCredentials")) || []
const adminnameElement = document.getElementById('adminname');
adminnameElement.textContent = data.username;

const logoutLinkElement = document.querySelector('.Logout a');

logoutLinkElement.addEventListener('click', () => {
    localStorage.removeItem('userCredentials'); 
    adminnameElement.textContent = '';
    alert('Logout successful.');
    setTimeout(() => {
        window.location.href = "adminlogin.html"; 
    }, 1000);
});

let url3 =`https://projecteliteleasejsonserver.onrender.com/Furniture`

let idEl = document.getElementById("addid");
// let imageEl = document.getElementById("addCategory");
// let priceEl =document.getElementById("addPrice");
// let titleEl = document.getElementById("addTitle");
let appenddata = document.querySelector(".sales-details")

window.addEventListener("load",()=>{
    fetchData()
})

let btnEL = document.getElementById("addBtn");


btnEL.addEventListener("click",(e)=>{
    e.preventDefault()
    let Id = idEl.value;
    // let Image = imageEl.value;
    // let Title = titleEl.value;
    // let Price = priceEl.value;
    addproduct(Id);
    alert("Product Deleted")
    fetchData()
})

async function fetchData(){
    try {
        let res = await fetch(url3);
        let data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

function displayData(data){
    let x = ``;
  data.map((el)=>{
    x+=`
          <div class="cardlist">
          <div class="carimage">
              <img src="${el.img}" alt="">
         </div>
          <div class="carddetails">
          <p>${el.title}</p>
          <p>Price:-₹${el.price}</p>
          <p>Id:-${el.id}</p>
         </div>
         </div>
    `
  });
  appenddata.innerHTML = x;

}


function  addproduct(Id){
    fetch(`${url3}/${Id}`,{
        method : `DELETE`,
        headers :{
            "content-type" : "application/json"
          }
    })
}



 