let randInt =(min,max)=>min+Math.round(Math.random()*(max-min))

let width = window.innerWidth;
let height = window.innerHeight;
let body = document.querySelector('body');

class FireWork {
    constructor(x,y,color) {
        this.img = document.createElement('div')
        this.box = document.createElement('div')
        this.img.style.width=150+'px';
        this.img.style.height=150+'px';
        this.box.style.width=150+'px';
        this.box.style.height=150+'px';
        this.box.style.overflow = 'hidden'
        this.img.style.backgroundImage=`url('firework_sprites.png')`
        this.img.style.backgroundPositionX = 0;
        this.img.style.backgroundSize = '3750px';
        this.box.style.position='absolute';
        this.img.style.position='absolute';
        this.box.style.left = x+'px';
        this.img.style.left = '-150px';
        this.box.style.top = y+'px';
        this.img.style.filter =`drop-shadow(150px 0 ${color})`;
        this.keyframe = 0;
        this.animation=null;
        this.box.append(this.img)
        body.append(this.box);
        console.log('e')
    }
    fire(){

        this.keyframe=this.keyframe+1;
        this.img.style.backgroundPositionX = this.keyframe*(-150) + 'px';
    }
}

let allEls = [];

setInterval(()=>{
    allEls.forEach((e,index)=>{
        e.fire();
        if(e.keyframe>24){
            e.box.remove();
            allEls.splice(index,1)
        }
    })
},50)
setInterval(()=>{
    let color;
    if(randInt(1,3)===1){
        color='yellow'
    }else {
        color='white'
    }
    let fireWork = new FireWork(randInt(0,window.innerWidth-150),randInt(0,window.innerHeight-150),color);
    allEls.push(fireWork)

},300)