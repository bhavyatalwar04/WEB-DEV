// let heading= document.querySelector("h2");
// console.dir(heading);
// heading.innerText=heading.innerText + " from Apna College Students"

let divs= document.querySelectorAll(".box");
console.log(divs)
divs[0].innerText='HI';
divs[1].innerText='HI3';
divs[2].innerText='HI2';

let num = prompt("Enter a number: ")
if(num%5==0){
    console.log("It is divisible by 5");
}else{
    console.log("It is not divisible by 5");
}
