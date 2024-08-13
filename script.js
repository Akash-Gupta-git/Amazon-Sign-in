let valid = document.getElementById("form").value;
let input = document.getElementById("email").value
let submit = document.querySelector("submit")
let createBtn = document.querySelector("create").value

function validation() {
    let flag = 0;
    if(email == "") {
        alert("Pleace fill the email number!")
        flag =1;
    } 
    if(email != "@mail.com" ) {
        alert()
        flag =1;
    }
    flag = 0;

}


    function myfunction() {
        alert("You are not able to Create Account !")
    }
