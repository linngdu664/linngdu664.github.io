var ddbOncilck=false;
var allBox=document.getElementsByClassName("box0");
var changing =false;
function darkButtonClick(){
    changing=true;
    window.setTimeout(function(){changing=false;},1400)
    if (ddbOncilck==false){
        ddbOncilck=true;
        // console.log("back");
        for(let i=0;i<allBox.length;i++){
            allBox[i].style.transform="rotateY(90deg)";
            window.setTimeout(toDDF,700,i);
        }
        window.setTimeout(DDF,700);

    }else{
        ddbOncilck=false;
        // console.log("front");
        for(let i=0;i<allBox.length;i++){
            allBox[i].style.transform="rotateY(90deg)";
            window.setTimeout(toW,700,i);
        }
        window.setTimeout(W,700);

    }
}
var Body=document.getElementById("body");
function toDDF(i){
    allBox[i].style.backgroundColor="black";
    allBox[i].style.transform="rotateY(0deg)";
}
function DDF(){
    Body.style.backgroundImage="linear-gradient(to bottom right,rgb(109, 3, 3),rgb(32, 10, 10))";
    Body.style.color="#ecf0f1";
    $("#deepDarkBtn").removeClass("deep-dark-btn");
    $("#deepDarkBtn").addClass("deep-dark-btn-on");
    $("#box8ul").removeClass("dark-blue-text");
    $("#box8ul").addClass("light-red-text");
    document.getElementById("box7Img").src="images/-1.jpg";
    document.getElementById("box5Img").src="images/-2.png";
    document.getElementById("box3Img").src="images/-3.jpg";
    document.getElementById("box1Img").src="images/-4.jpg";
}



function toW(i){
    allBox[i].style.backgroundColor="#ececec"
    allBox[i].style.transform="rotateY(0deg)";
}
function W(){
    Body.style.backgroundImage="linear-gradient(to bottom right, rgb(0, 0, 0), rgba(0, 0, 0, 0.705))";
    Body.style.color="#333";
    $("#deepDarkBtn").removeClass("deep-dark-btn-on");
    $("#deepDarkBtn").addClass("deep-dark-btn");
    $("#box8ul").removeClass("light-red-text");
    $("#box8ul").addClass("dark-blue-text");
    document.getElementById("box7Img").src="images/5.jpg";
    document.getElementById("box5Img").src="images/4.png";
    document.getElementById("box3Img").src="images/3.jpg";
    document.getElementById("box1Img").src="images/2.jpg";
}