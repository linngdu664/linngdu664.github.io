var ZC=document.getElementById("zcmls");
var DL=document.getElementById("dlmls");
var SY=document.getElementById("zjm");
function dlOnclick(){
    ZC.className='container mml vv';
    DL.className='container mml';
    SY.className='container vv';
}
function zcOnclick(){
    ZC.className='container mml';
    DL.className='container mml vv';
    SY.className='container vv';
}
function syOnclick(){
    ZC.className='container mml vv';
    DL.className='container mml vv';
    SY.className='container';
}
function changeStr(str,index,changeStr){
    return str.substr(0, index) + changeStr+ str.substr(index + changeStr.length);
}
function over(a){
    a.src=changeStr(a.src,a.src.lastIndexOf("11"), "22");
}
function leave(a){
    a.src=changeStr(a.src,a.src.lastIndexOf("22"), "11");
}
window.addEventListener('mousewheel', function(event){
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
},{ passive: false});
window.addEventListener('DOMMouseScroll', function(event){
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
},{ passive: false});