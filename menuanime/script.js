

/* Timestamp 6:41pm

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
*/

function enlargeGreen(){
    var a = document.getElementById("green");
    a.style.zIndex = "2";

    var b = document.getElementById("red");
    b.style.zIndex = "0";

    var c = document.getElementById("blue");
    c.style.zIndex = "0";

    var d = document.getElementById("yellow");
    d.style.zIndex = "0";

    var e = document.getElementById("center");
    e.style.backgroundColor = "green";
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

    var e = document.getElementById("center");
    e.style.backgroundColor = "red";
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

    var e = document.getElementById("center");
    e.style.backgroundColor = "blue";
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

    var e = document.getElementById("center");
    e.style.backgroundColor = "yellow";
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

    var e = document.getElementById("center");
    e.style.backgroundColor = "white";
}

document.getElementById("greenBox").onmouseover = function() {mouseOverGreen()};
document.getElementById("greenBox").onmouseout = function() {mouseOutGreen()};

function mouseOverGreen() {
document.getElementById("green").style.zIndex = "2";

var e = document.getElementById("center");
  e.style.backgroundColor = "green";
var f = document.getElementById("texta");
f.style.fontSize = "45" + "px";
f.style.marginLeft = "-5" + "px";
  
}

function mouseOutGreen() {
  document.getElementById("green").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";

    var f = document.getElementById("texta");
  f.style.fontSize = "32" + "px";
  f.style.marginLeft = "30" + "px";
}

document.getElementById("redBox").onmouseover = function() {mouseOverRed()};
document.getElementById("redBox").onmouseout = function() {mouseOutRed()};

function mouseOverRed() {
  document.getElementById("red").style.zIndex = "2";
  var e = document.getElementById("center");
    e.style.backgroundColor = "red";

    var f = document.getElementById("textb");
  f.style.fontSize = "45" + "px";
  f.style.marginLeft = "-20" + "px";
  f.style.marginTop = "90" + "px";
}

function mouseOutRed() {
document.getElementById("red").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";

    var f = document.getElementById("textb");
  f.style.fontSize = "32" + "px";
  f.style.marginLeft = "10" + "px";
  f.style.marginTop = "80" + "px";
}

document.getElementById("blueBox").onmouseover = function() {mouseOverBlue()};
document.getElementById("blueBox").onmouseout = function() {mouseOutBlue()};

function mouseOverBlue() {
document.getElementById("blue").style.zIndex = "2";
var e = document.getElementById("center");
  e.style.backgroundColor = "blue";

  var f = document.getElementById("textc");
f.style.fontSize = "45" + "px";
f.style.marginLeft = "-20" + "px";
f.style.marginTop = "30" + "px";

}

function mouseOutBlue() {
document.getElementById("blue").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";

    var f = document.getElementById("textc");
  f.style.fontSize = "32" + "px";
  f.style.marginLeft = "0" + "px";
  f.style.marginTop = "40" + "px";
}

document.getElementById("yellowBox").onmouseover = function() {mouseOverYellow()};
document.getElementById("yellowBox").onmouseout = function() {mouseOutYellow()};

function mouseOverYellow() {
document.getElementById("yellow").style.zIndex = "2";
var e = document.getElementById("center");
  e.style.backgroundColor = "yellow";

  var f = document.getElementById("textd");
f.style.fontSize = "45" + "px";
f.style.marginLeft = "0" + "px";
f.style.marginTop = "10" + "px";
}

function mouseOutYellow() {
document.getElementById("yellow").style.zIndex = "0";
var e = document.getElementById("center");
  e.style.backgroundColor = "white";

  var f = document.getElementById("textd");
f.style.fontSize = "32" + "px";
f.style.marginLeft = "10" + "px";
f.style.marginTop = "20" + "px";
}