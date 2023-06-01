/**
 *  Your Code
 */
let randInt =(min,max)=>min+Math.round(Math.random()*(max-min))

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
class Circle {
    constructor(x,y,color) {
        this.x=x;
        this.y=y;
        this.color=color;
        this.radius = 50;
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = `${this.color}`;
        ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);
        ctx.fill()
    }
}
let circles = [];
let colors = ['teal','tan','thistle','tomato','turquoise'];
canvas.onmousemove=e=>{
    let theX = randInt(-50,50)+e.offsetX
    let theY = randInt(-50,50)+e.offsetY
    circles.push(new Circle(theX,theY,colors[randInt(0,colors.length-1)]))
    circles[0].draw();

}
setInterval(()=>{
    ctx.clearRect(0,0,1000,800)
    circles.forEach((e,index)=>{
        e.radius--;
        if(e.radius<0){
            circles.splice(index,1);
        }else {
            e.draw();
        }

    })
},10)
