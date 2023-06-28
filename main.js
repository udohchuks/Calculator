const prev_div = document.querySelector(".prev");
const current_div = document.querySelector(".current");
const nums_div = document.querySelectorAll(".num")
const operand_div = document.querySelectorAll(".operand")
const equal_div = document.querySelector(".equal");
const clear = document.querySelector(".clear")
const del = document.querySelector(".del")
let currentValue = "";
let prevValue = ""
let operand_s = ""
let result  = 0;
Number(nums_div);
Equal(equal_div)
Operand(operand_div)
function Operand(operand_div) {
    operand_div.forEach( operand => {
        operand.addEventListener("click", () => {
            operand_s = operand.innerHTML
            prev_div.innerHTML = `${currentValue} ${operand_s}`;
            prevValue = currentValue;
            currentValue =""
            current_div.innerHTML = ""
        })
     });
}
function Number(nums_div) {
    nums_div.forEach( num => {
        num.addEventListener("click", () => {
            currentValue += num.innerHTML
            current_div.innerHTML = currentValue;  
        })
    });
}

function Equal(equal_div) {
equal_div.addEventListener("click", equal_op)
}

function equal_op() {
    let num1 = parseInt(prevValue);
    let num2 = parseInt(currentValue)
    switch (operand_s) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }
    currentValue = result;
    prev_div.innerHTML = result;
    current_div.innerHTML = result;
}
clear.addEventListener("click", () => {
    currentValue = 0;
    prevValue = 0;
    current_div.innerHTML = ""
    prev_div.innerHTML = ""
})
del.addEventListener("click", () => {
    currentValue = currentValue.slice(0, -1);
    current_div.innerHTML = currentValue
})