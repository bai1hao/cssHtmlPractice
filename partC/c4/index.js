//Here is your CODE!
let $=e=>document.querySelector(e)
let $$=e=>document.querySelectorAll(e)
window.onload=e=>{
    console.log($$('.container'));
    $('.render-btn').addEventListener('click',render)
}
var render = (e) => {
    if(window.getSelection().rangeCount!==0){
        console.log('wewr')
    }

};