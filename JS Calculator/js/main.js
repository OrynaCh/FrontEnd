let memoryNumber = 0;
let countNumber = 0;
let inputInProgress = false;
let flag = '';
let dotBtn = document.getElementById('dot');
let display = document.getElementById('tablo');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let clearBtn = document.getElementById('del');
let resultBtn = document.getElementById('equally');
let allBtns = document.querySelectorAll('.btn');

for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    btn.addEventListener('click', function (e) {
        clickNumber(e.target.textContent);
        if (e.target.textContent == 0 && display.value === '0') {
            inputInProgress = false;
        }
        console.log(e.target.textContent);
    });

}

function clickNumber(num){
    if (inputInProgress) {
        display.value += num;
        displayCut(display.value);
    } else {
        display.value = num;
        inputInProgress = true;
    }
}

dotBtn.addEventListener('click', function (e) {
    for (let i = 0; i < display.value.length; i++) {
        if (display.value[i] === '.') {
            return;
        }
    }
    display.value += '.';
    displayCut(display.value);
    inputInProgress = true;
});
plusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '+';
    inputInProgress = false;
    console.log("+");
});
minusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '-';
    inputInProgress = false;
    console.log("-");
});
divideBtn.addEventListener('click', function () {
    lastOperation();
    if (memoryNumber === 0 && display.value === '0') {

        display.value = '0';
    }
    if (isNaN(display.value) || isNaN(memoryNumber)) {

        display.value = '0';
    }
    memoryNumber = +display.value;
    flag = '/';
    inputInProgress = false;
    console.log("/");
});
multiplyBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '*';
    inputInProgress = false;
    console.log("*");
});
clearBtn.addEventListener('click', function () {
    display.value = 0;
    memoryNumber = 0;
    flag = '';
    inputInProgress = false;
    console.log("Clear");
})
function CheckLength (d)
{
    let idx = d.indexOf(".");
    if (idx >= 9 || (d.length  > 9 && idx == -1))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function Summ(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else{
        a += b;
        let d = String(a);
        let check = CheckLength(d);
        if (!check)
        {
            return display.value = "error";
        }
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }

}

function minus(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else{
        a -= b;
        let d = String(a);
        let check = CheckLength(d);
        if (!check)
        {
            return display.value = "error";
        }
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
}

function divide(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a /= b;
        let d = String(a);
        let check = CheckLength(d);
        if (!check)
        {
            return display.value = "error";
        }
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }

}

function multiply(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a *= b;
        let d = String(a);
        let check = CheckLength(d);
        if (!check)
        {
            return display.value = "error";
        }
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
}

resultBtn.addEventListener('click', function () {
    let countNumber = +display.value;
    if (flag != '') {
        switch (flag) {
            case '+':
                memoryNumber = Summ(memoryNumber, countNumber);

                inputInProgress = false;
                break;
            case '-':
                memoryNumber = minus(memoryNumber, countNumber);
                inputInProgress = false;
                break;
            case '/':
                if (countNumber === 0) {
                    memoryNumber = 0;
                    display.value = countNumber;
                } else if (countNumber === '0') {
                    memoryNumber = 0;
                    display.value = countNumber;
                } else {
                    memoryNumber = divide(memoryNumber, countNumber);
                }

                inputInProgress = false;
                break;
            case '*':
                memoryNumber = multiply(memoryNumber, countNumber);
                inputInProgress = false;
                break;
        }

        display.value = memoryNumber;
        displayCut(display.value);
        flag = '';
    }


    memoryNumber = 0;
    countNumber = 0;
});

function cutDisplay(a) {
    if (a == null) {
        return false;
    }
    if (a.length > 9) {
        a = a.slice(0, 9);
    }
    return a;
}
function displayCut(a){
    display.value = cutDisplay(a)
}

function lastOperation() {

    switch (flag) {
        case '+' :
            if (inputInProgress) {
                memoryNumber = Summ(memoryNumber, Number(display.value));

            } else {
                memoryNumber = display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '-' :
            if (inputInProgress) {
                memoryNumber = minus(memoryNumber, Number(display.value));
            } else {
                memoryNumber = display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '/' :
            if (inputInProgress) {
                memoryNumber = divide(memoryNumber, Number(display.value));
            } else {
                memoryNumber = display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '*' :
            if (inputInProgress) {
                memoryNumber = multiply(memoryNumber, Number(display.value));
            } else {
                memoryNumber = display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
    }

}

