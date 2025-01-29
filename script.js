let btnblack = document.querySelector(".black");
let btnyellow = document.querySelector(".yellow");
let btnred = document.querySelector(".red");
let btnblue = document.querySelector(".blue");
let btngreen = document.querySelector(".green");
let body = document.querySelector("body");

btnblack.addEventListener("click",() =>{
    body.style.backgroundColor = "black";
})
btnyellow.addEventListener("click",() =>{
    body.style.backgroundColor = "yellow";
})
btnred.addEventListener("click",() =>{
    body.style.backgroundColor = "red";
})
btnblue.addEventListener("click",() =>{
    body.style.backgroundColor = "blue";
})
btngreen.addEventListener("click",() =>{
    body.style.backgroundColor = "green";
})
