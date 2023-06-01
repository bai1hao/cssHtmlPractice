let theColor = document.querySelector('#color-input');
let $ = e => document.querySelector(e);

$('.error-result').style.display = 'none';
theColor.onchange = e => {
    if (theColor.value) {
        var hex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
        var rgb = /^(rgb|RGB)\((\s*(2[0-4]?\d?|25[0-5]|[01]\d?\d?|[3-9]\d?)\s*,){2}\s*(2[0-4]?\d?|25[0-5]|[01]\d?\d?|[3-9]\d?)\s*\)$/;
        if (rgb.test(theColor.value)) {
            $('.success-result').style.display = 'unset';
            $('.error-result').style.display = 'none';
            $('.hex-color-value').innerText = theColor.value.toString().colorHex();
            $('.rgb-color-value').innerText = theColor.value;
            $('.color-type').innerText="RGB"
        } else if (hex.test(theColor.value)) {
            $('.success-result').style.display = 'unset';
            $('.error-result').style.display = 'none';
            $('.hex-color-value').innerText = theColor.value
            $('.rgb-color-value').innerText = theColor.value.toString().colorRgb();
            $('.color-type').innerText="HEX"
        } else {
            $('.success-result').style.display = 'none';
            $('.error-result').style.display = 'unset';
        }

    }
}

String.prototype.colorHex = function () {
    let reg = /\d+/g;
    let result='';
    let matchReg = this.match(reg);
    matchReg.forEach(e=>{
        let num = Number.parseInt(e);
        result+=("0"+(num.toString(16))).slice(-2)
    })
    return "#"+result;
};

String.prototype.colorRgb = function () {
    let reg = /[a-fA-F0-9]/g;
    let result='';
    let matchReg = this.match(reg);
    if(matchReg.length===3){
        let rgb=[];
        matchReg.forEach(e=> {
            let num = Number.parseInt(e+e+'',16);
            rgb.push(num.toString(10))
        });
        result = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    }

    if(matchReg.length===6){
        let rgb=[];
        let match2 = [];
        for(let a=0;a<5;a+=2){
            match2.push(matchReg[a]+matchReg[a+1]+'');
        }
        match2.forEach(e=> {
            let num = Number.parseInt(e,16);
            rgb.push(num.toString(10))
        });
        result = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    }
    return result;
};