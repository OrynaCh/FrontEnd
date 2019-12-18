const FPS = 30;
const bs = 30;
let bx, by;
let xv, yv;
let canvas;
let ctx;

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    setInterval(drawAll, 1000 / FPS);

    canvas.addEventListener("click", function(event){
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        let clickedBall = null;
        for (let j = 0; j < ballArray.length; j++)
        {
            if ((ballArray[j].bx - x) * (ballArray[j].bx - x) + (ballArray[j].by - y) * (ballArray[j].by - y) < bs * bs)
            {
                clickedBall = ballArray[j];
                break;
            }
        }
        if (clickedBall!=null)
        {
            AddNewBall(clickedBall);
            AddNewBall(clickedBall);
            AddNewBall(clickedBall);
        }
    });
}

class Ball {
    constructor(bx, by, xv, yv) {
        this.bx = Math.floor(Math.random() * 101 + 100);
        this.by = Math.floor(Math.random() * 101 + 100);

        this.xv = Math.random();
        this.yv = Math.random();

        var l = Math.sqrt(this.xv*this.xv + this.yv*this.yv);

        l = l / 5* (1 + Math.random());

        this.xv/=l;
        this.yv/=l;

    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.bx, this.by, bs / 2, 0, Math.PI * 2, false);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    wallCollision() {
        if (this.bx - bs / 2 < 0 && this.xv < 0) {
            this.xv = -this.xv;
        }
        if (this.bx + bs / 2 > canvas.width && this.xv > 0) {
            this.xv = -this.xv;
        }
        if (this.by - bs / 2 < 0 && this.yv < 0) {
            this.yv = -this.yv;
        }
        if (this.by + bs / 2 > canvas.height && this.yv > 0) {
            this.yv = -this.yv;
        }
    }

    collision() {
        this.next_xv = this.xv;
        this.next_yv = this.yv;

        for (let i = 0; i < ballArray.length; i++)
        {
            let distanceSquared = (ballArray[i].bx - this.bx) * (ballArray[i].bx - this.bx) + (ballArray[i].by - this.by) * (ballArray[i].by - this.by);

            if (ballArray[i] != this && distanceSquared < bs * bs)
            {
                let OXx = ballArray[i].bx - this.bx;
                let OXy = ballArray[i].by - this.by;
                let length = Math.sqrt(OXx * OXx + OXy * OXy);
                OXx = OXx / length;
                OXy = OXy / length;

                let OXproj = this.xv * OXx + this.yv * OXy;
                let OXprojX = OXx * OXproj;
                let OXprojY = OXy * OXproj;
                let PerpX = this.xv - OXprojX;
                let PerpY = this.yv - OXprojY;

                let OXprojThat = ballArray[i].xv * OXx + ballArray[i].yv * OXy;
                let OXprojThatX = OXx * OXprojThat;
                let OXprojThatY = OXy * OXprojThat;
                this.next_xv = PerpX + OXprojThatX;
                this.next_yv = PerpY + OXprojThatY;
            }
        }
    }

    move()
    {
        this.bx += this.next_xv;
        this.by += this.next_yv;
        this.xv = this.next_xv;
        this.yv = this.next_yv;
    }

}

let ballArray = [new Ball()];

function AddNewBall(source)
{
    var ntries = 0;

    while (++ntries < 1000)
    {

        var dx = Math.random()-0.5;
        var dy = Math.random()-0.5;

        var  l = Math.sqrt(dx*dx + dy*dy);

        dx = dx/l;
        dy = dy/l;

        dx = dx * bs ;
        dy = dy * bs ;

        let newBall = new Ball();
        newBall.bx = source.bx + dx;
        newBall.by = source.by + dy;

        let correct = true;
        for (let j =0; j < ballArray.length; j++)
        {
            if ((ballArray[j].bx - newBall.bx) * (ballArray[j].bx - newBall.bx) + (ballArray[j].by - newBall.by) * (ballArray[j].by - newBall.by) < bs * bs)
            {
                correct = false;
                break;
            }
        }
        if (correct)
        {
            ballArray.push(newBall);
            break;
        }
    }
}

function drawAll() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let ball of ballArray)
        ball.draw(ctx);
    for (let ball of ballArray)
        ball.wallCollision();
    for (let ball of ballArray)
        ball.collision();
    for (let ball of ballArray)
        ball.move();

};
