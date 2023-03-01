const $ = e =>document.querySelector(e)
$('.day-button').addEventListener('click',e=>{
    $('.circle-box').style.transform="rotateZ(0)"
    $('.box').style.background='#f9dc84'
    $('.land').style.filter='brightness(100%) contrast(300%) saturate(100%) sepia(100%)'

})
$('.night-button').addEventListener('click',e=>{
    $('.circle-box').style.transform="rotateZ(-180deg)"
    $('.box').style.background='#06013e'
    $('.land').style.filter='brightness(80%) contrast(160%) saturate(120%) sepia(0)'
})
