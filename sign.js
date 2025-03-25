let supbtn = document.querySelector("#signupbtn");

supbtn.addEventListener("click", function () {
    let email = document.getElementById("registeremail").value;
    let password = document.getElementById("registerpassword").value;
    let repeatPassword = document.getElementById("repeatpassword").value;

    if (email === "" || password === "" || repeatPassword === "") {
        alert("❌ Email va parol kiriting");
    } else if (password.length < 6) {
        alert("❌ Parol 6 ta belgidan kam bo‘lmasin");
    } else if (password !== repeatPassword) {
        alert("❌ Parollar bir xil emas!");
    } else {
        alert("✅ Ro‘yxatdan o‘tdingiz");
        window.location.href = "index.html";
    }
});

