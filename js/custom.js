let fullname = document.getElementById("fname");
let mnumber = document.getElementById("m-number");
let mail = document.getElementById("email");
let psw = document.getElementById("password");
let cpsw = document.getElementById("cpassword");
let ferror = document.getElementById("name-f");
let merror = document.getElementById("mnumber-f");
let eerror = document.getElementById("email-f");
let perror = document.getElementById("psw-f");
let cperror = document.getElementById("cpsw-f");
let Submit = document.getElementById("submit");

Submit.addEventListener("click", function () {
    const obj = {
        Name: fullname.value,
        Mumber: mnumber.value,
        Mail: mail.value,
        Password: psw.value,
        Cpassword: cpsw.value
    }
    // Validate name
    ferror.innerHTML = (!/^[A-Za-z ]{2,}$/.test(fullname.value) || fullname.value === "")? "Enter your correct name": " ";
    ferror.style.color = (!/^[A-Za-z ]{2,}$/.test(fullname.value) || fullname.value === "")? "red": "black";
    // Validate phone number
    merror.innerHTML = (!/^[0-9]{0,10}$/.test(mnumber.value) || mnumber.value === "")? "Enter your correct Number": " ";
    merror.style.color = (!/^[0-9]{0,10}$/.test(mnumber.value) || mnumber.value === "")? "red": "black";
    // Validate email
    eerror.innerHTML = (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(mail.value) || mail.value === "")? "Enter your correct Email": " ";
    eerror.style.color = (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(mail.value) || mail.value === "")? "red": "black";
    // Validate password
    perror.innerHTML = (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/.test(psw.value))? "Enter your correct Password": " ";
    perror.style.color = (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/.test(psw.value))? "red": "black";
    // Validate password confirmation
    cperror.innerHTML = (psw.value === cpsw.value || cpsw.value === "")? " ": "Enter your confirm Password";
    cperror.style.color = (psw.value === cpsw.value || cpsw.value === "")? "black": "red";
    fullname.value = ""; mnumber.value = ""; mail.value = ""; psw.value = ""; cpsw.value = "";
})
function ferror1() { //name validation
    if (fullname.value < 2) {
        ferror.innerHTML = "Enter your corect name"; ferror.style.color = "red";
    } else {
        (/^[A-Za-z ]{2,}$/.test(fullname.value)) ? ferror.innerHTML = "valid name" : ferror.innerHTML = "invalid name";
        ferror.style.color = /^[A-Za-z ]{2,}$/.test(fullname.value) ? "green" : "red";
    }
}
function merror1() { //mobile number validation
    if (mnumber.value < 2) {
        merror.innerHTML = "Enter your corect Number"; merror.style.color = "red";
    } else {
        (/^[0-9]{10}$/.test(mnumber.value)) ? merror.innerHTML = "valid name" : merror.innerHTML = "invalid name";
        merror.style.color = /^[0-9]{10}$/.test(mnumber.value) ? "green" : "red";
    }
}
function eerror1() { //mail validation 
    if (mail.value < 1) {
        eerror.innerHTML = "Enter your corect Email"; eerror.style.color = "red";
    } else {
        (/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(mail.value)) ? eerror.innerHTML = "valid name" : eerror.innerHTML = "invalid name";
        eerror.style.color = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(mail.value) ? "green" : "red";
    }
}
function perror1() { //Password validation
    if (psw.value < 1) {zz
        perror.innerHTML = "Enter your corect Password"; perror.style.color = "red";
    } else {
        (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{6,}$/.test(psw.value)) ? perror.innerHTML = "valid Password" : perror.innerHTML = "invalid Password";
        perror.style.color = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{6,}$/.test(psw.value) ? "green" : "red";
    }
}
function cperror1() { //Conform Password
    if (cpsw.value < 1) {
        cperror.innerHTML = "Enter your corect Password"; cperror.style.color = "red";
    } else {
        (psw.value == cpsw.value) ? cperror.innerHTML = "valid Conform Password" : cperror.innerHTML = "invalid Conform Password";
        cperror.style.color = psw.value == cpsw.value ? "green" : "red";
    }
}