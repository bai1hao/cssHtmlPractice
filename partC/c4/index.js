//Here is your CODE!
let $ = e => document.querySelector(e)
let $$ = e => document.querySelectorAll(e)
window.onload = e => {
    console.log($('.container').innerHTML)
    $('.container').innerHTML = $('.container').innerHTML.toString().replace(/<p>/g,'')
    $('.container').innerHTML = $('.container').innerHTML.toString().replace(/<p><\/p>/g,'<br/><br/>')

    console.log($('.container').innerHTML)
    $('.render-btn').addEventListener('click', render)
}
let ranges;

let render = (e) => {
    if (window.getSelection().rangeCount !== 0) {
        let selection = window.getSelection();
        ranges = selection.getRangeAt(0)
        let el = document.createElement('span');
        el.style.background='yellow';
        el.style.color='red';
        ranges.surroundContents(el);
    }
};