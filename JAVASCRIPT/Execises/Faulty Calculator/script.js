let r =Math.random();

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
let c = prompt("Enter operation: ")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (r>0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
if (r<0.1) {
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
