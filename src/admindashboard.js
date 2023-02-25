const url = `https://jsonservereliteleaseproject.onrender.com/admin`;
const url1 = `https://jsonservereliteleaseproject.onrender.com/Furniture`;
let totalApicountEl = document.getElementById("totalApicount");
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

window.addEventListener("load",()=>{
    fetchdata();
    fetchd();
})

async function fetchdata(){
    try {
        let res  = await fetch(url)
        let data = await res.json()
        // console.log(data)
        displaydata(data)
    } catch (error) {
        console.log(error)
    }
}

function displaydata(data){
let x =``;
 data.map((element)=>{
   x+= `
   <div class="flow">
   <div class="adminimage">
       <img src="/image/${element.id}.jpg" alt="err">
   </div>
   <div class="admin">
       <p>Name:- ${element.username}</p>
       <p>Email:-${element.email}</p>
       <p>Linkdin:- <a href="${element.linkdin}" target="_blank">${element.linkdin}</a></p>
       <p>Github:- <a href="${element.github}" target="_blank">${element.github}</a></p>
   </div>
</div>
   `
 })
 admindataEl.innerHTML = x;
}

// for total number


async function fetchd(){
    try {
        let res = await fetch(url1)
        let data = await res.json();
        let length = data.length;
        totalApicountEl.innerText = length;
    } catch (error) {
        console.log(error)
    }
 }
