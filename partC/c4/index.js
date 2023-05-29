//Here is your CODE!
let $ = e => document.querySelector(e)
let $$ = e => document.querySelectorAll(e)
window.onload = e => {
    $('.render-btn').addEventListener('click', render)
}

let render = (e) => {
    if (window.getSelection().rangeCount !== 0) {
        let selection = window.getSelection();
        let ranges = selection.getRangeAt(0)
        let el = document.createElement('span');
        el.style.background='yellow';
        el.style.color='red';
        ranges.surroundContents(el);
    }
};