let first = document.getElementById('first');
const hourArrow = document.getElementById('hourArrow');
const secondArrow = document.getElementById('secondArrow');
const minuteArrow = document.getElementById('minuteArrow');
let argNumb = 0;
let argstroke = 0;
let steparrowInRadian = (((2 * Math.PI) / 360) * 6);
let steparrowInRadianForNumb = (((2 * Math.PI) / 360) * 30);

const drawStroke =()=> {
    for (let i = 0; i < 60; i = i+5) {
        argstroke = steparrowInRadian * i;
        let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', 230 * Math.cos(argstroke) + 250);
        newLine.setAttribute('y1', 230 * Math.sin(argstroke) + 250);
        newLine.setAttribute('x2', 245 * Math.cos(argstroke) + 250);
        newLine.setAttribute('y2', 245 * Math.sin(argstroke) + 250);
        newLine.setAttribute('stroke', 'black');
        newLine.setAttribute('stroke-width', '2');
        first.appendChild(newLine);
    }

};

const drawNumber =()=> {
    for (let i = 1; i <= 12; i++) {
        argNumb = steparrowInRadianForNumb * i - steparrowInRadianForNumb * 15;
        let newText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newText.setAttribute('x', 200 * Math.cos(argNumb) + 235);
        newText.setAttribute('y', 200 * Math.sin(argNumb) + 270);
        newText.style.fill = 'black';
        newText.style.font = '40px sans-serif';
        newText.innerHTML = i.toString();
        first.appendChild(newText);
    }

};

const second =()=> {
    let time = new Date();
    let secondHour = time.getSeconds();
    let argSecond = steparrowInRadian * secondHour - steparrowInRadian * 15;
    secondArrow.setAttribute('x2', 200 * Math.cos(argSecond) + 250);
    secondArrow.setAttribute('y2', 200 * Math.sin(argSecond) + 250);

};

const minute =()=> {
    let time = new Date();
    let minuteHour = time.getMinutes();
    let argSecond = steparrowInRadian * minuteHour - steparrowInRadian * 15;
    minuteArrow.setAttribute('x2', 180 * Math.cos(argSecond) + 250);
    minuteArrow.setAttribute('y2', 180 * Math.sin(argSecond) + 250);

};

const hour =()=> {
    let time = new Date();
    let hourHour = time.getHours();
    let argHour = steparrowInRadianForNumb * hourHour - steparrowInRadianForNumb * 15;
    hourArrow.setAttribute('x2', 150 * Math.cos(argHour) + 250);
    hourArrow.setAttribute('y2', 150 * Math.sin(argHour) + 250);

};

drawNumber();
drawStroke();
setInterval(second, 1000);
setInterval(minute, 1000);
setInterval(hour, 1000);