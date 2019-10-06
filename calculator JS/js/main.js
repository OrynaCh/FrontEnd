
let nums            = document.querySelectorAll('.nums'); 
let calcOperations  = document.querySelectorAll('.calc__operations');
let clear           = document.getElementById('calc__clear');
let count           = document.getElementById('calc__count');
let output          = document.getElementById('output__input');
let currentNumber   = 0; 

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener('click' , clickNumber);
}

function clickNumber(e) {
    let button = e.target;
    let num = button.textContent;
    if(output.value === "0"){ 
        output.value = num;
    }else{
        output.value += num;
    }
}

for(let i = 0; i < calcOperations.length; i++){
    calcOperations[i].addEventListener('click', clickOperation);
}

function clickOperation(e) {
    let op = e.target.textContent;
    currentNumber = output.value;
    if (op === "+") {
        output.value = currentNumber + op;
    } else if (op === "/") {
        output.value = currentNumber + op;
    } else if (op === "*") {
        output.value = currentNumber + op;
    } else if (op === "-") {
        output.value = currentNumber + op;
    }
}

count.addEventListener('click' , function (e) {
   output.value = eval(output.value);
});

clear.addEventListener('click' , function (e) {
    output.value = 0;
});

