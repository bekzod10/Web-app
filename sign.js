let supbtn = document.querySelector(".signup_btn_click");
let regiignsteremail = document.querySelector(".email-registr");
let registerpassword = document.querySelector(".password-registr");
let repeatpassword = document.querySelector(".repeat-password-registr");

signupbtn.addEventListener("click", function () {
    let email = registeremail.value.trim();
    let password = registerpassword.value.trim();
    let repeatPassword = repeatpassword.value.trim();

    if (email === "" || password === "" || repeatPassword === "") {
        alert("❌ email va parol kiriting");
    } else if (password.length < 6) {
        alert("❌ Parol 6 ta belgidan kam bo'lmasin");
    } else if (password !== repeatPassword) {
        alert("❌ Parollar bir xil emas!");
    } else {
        alert("Ro‘yxatdan o‘tish Yaxshi kechdi ✅");
        window.location.href = "index.html";
    }
});
