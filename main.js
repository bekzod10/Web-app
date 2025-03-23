let signupbtn = document.querySelector(".signup_btn_click");
let registeremail = document.querySelector(".email-registr");
let registerpassword = document.querySelector(".password-registr");

signupbtn.addEventListener("click", function () {
    
    if (registeremail.value === "" || registerpassword.value === "") {
        alert("❌ email va parolni kiriting");
    } else if( registerpassword.value.length < 6) {
        alert("Parol 6 ta belgidan kam bo'lmasin")
    }else{
        alert("Web-Saytga Xush Kelibsiz✅ ");
        window.location.href = "index.html";
    }
});



















