function enlargeGreen(){
    var a = document.getElementById("green");
    a.style.zIndex = "2";
    var b = document.getElementById("red");
    b.style.zIndex = "0";
    var c = document.getElementById("blue");
    c.style.zIndex = "0";
    var d = document.getElementById("yellow");
    d.style.zIndex = "0";
    
}
function enlargeRed(){
    var a = document.getElementById("green");
    a.style.zIndex = "0";
    var b = document.getElementById("red");
    b.style.zIndex = "2";
    var c = document.getElementById("blue");
    c.style.zIndex = "0";
    var d = document.getElementById("yellow");
    d.style.zIndex = "0";
}
function enlargeBlue(){
    var a = document.getElementById("green");
    a.style.zIndex = "0";
    var b = document.getElementById("red");
    b.style.zIndex = "0";
    var c = document.getElementById("blue");
    c.style.zIndex = "2";
    var d = document.getElementById("yellow");
    d.style.zIndex = "0";
}
function enlargeYellow(){
    var a = document.getElementById("green");
    a.style.zIndex = "0";
    var b = document.getElementById("red");
    b.style.zIndex = "0";
    var c = document.getElementById("blue");
    c.style.zIndex = "0";
    var d = document.getElementById("yellow");
    d.style.zIndex = "2";
}
function reset(){
    var a = document.getElementById("green");
    a.style.zIndex = "0";
    var b = document.getElementById("red");
    b.style.zIndex = "0";
    var c = document.getElementById("blue");
    c.style.zIndex = "0";
    var d = document.getElementById("yellow");
    d.style.zIndex = "0";
}
document.getElementById("greenBox").onmouseover = function() {mouseOverGreen()};
document.getElementById("greenBox").onmouseout = function() {mouseOutGreen()};

function mouseOverGreen() {
  document.getElementById("green").style.zIndex = "2";
}

function mouseOutGreen() {
  document.getElementById("green").style.zIndex = "0";
}

document.getElementById("redBox").onmouseover = function() {mouseOverRed()};
document.getElementById("redBox").onmouseout = function() {mouseOutRed()};

function mouseOverRed() {
  document.getElementById("red").style.zIndex = "2";
}

function mouseOutRed() {
  document.getElementById("red").style.zIndex = "0";
}

document.getElementById("blueBox").onmouseover = function() {mouseOverBlue()};
document.getElementById("blueBox").onmouseout = function() {mouseOutBlue()};

function mouseOverBlue() {
  document.getElementById("blue").style.zIndex = "2";
}

function mouseOutBlue() {
  document.getElementById("blue").style.zIndex = "0";
}

document.getElementById("yellowBox").onmouseover = function() {mouseOverYellow()};
document.getElementById("yellowBox").onmouseout = function() {mouseOutYellow()};

function mouseOverYellow() {
  document.getElementById("yellow").style.zIndex = "2";
}

function mouseOutYellow() {
  document.getElementById("yellow").style.zIndex = "0";
}
