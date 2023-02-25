function goToHome(){

    window.location.href="index.html";
}

var log = document.getElementById("log")
var login_btn_show = document.getElementById("login_btn")
var login_btn_hide = document.getElementById("login_hide_btn");
var otp_field = document.getElementById("otp");
var flag= false;
let mob_flag = false
// var button = document.getElementById("loginButton");
// var count=0;
//     button.addEventListener("click",function() {
//         count++;

//         if(count >1) {
//             let otp= document.getElementById("OtpNo");

//             alert("Login Successfull");
//             // window.location.href=""
//         }
//     })
// console.log(flag);
// if(flag== true){
//     otp_field.style.display = "block"
// } else {
// }
login_btn_show.addEventListener("click", btn_show)
login_btn_hide.addEventListener("click", hide)
function btn_show(e) {
    e.preventDefault()
    log.style.display = "flex"
}
function hide(e) {
    e.preventDefault()
    log.style.display = "none"
}
otp_field.style.display = "none"
function alter() {
    let mobileNo = document.getElementById("mobileNo").value
        // console.log(mobileNo.length);
        // let mob_flag= false;
        if(mobileNo.length !== 10) {
            alert("Please Enter Valid Mobile No")
        } else {
            if(mobileNo == "7209991080") {

            }
            flag = true;
            mob_flag = true
            if(flag == true) {

                otp_field.style.display = "block";
                // return;
            }
            console.log(mob_flag);

        }
        if(mob_flag == true) {

            let otp= document.getElementById("OtpNo").value; 
            console.log(otp);    
            if(otp == "8540") {
                    // hide(e)
                    alert("Login Successful");
                    // window.location.href = ""
                    let loginn = document.getElementById("loginn");
                    login_btn.style.display = "none"
                    log.style.display= "none";
                    let p = document.createElement("p");
                    p.innerHTML = "Welcome";
                    loginn.append(p)


                } else {
                    alert("Please Enter Valid OTP")
                }
        } else {

        }
}




function cart_clicked() {
    location.href = "cart.html"
    // alert("b")
}