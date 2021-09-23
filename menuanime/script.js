

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
    e.src = "images/Contact.gif";

    var f = document.getElementById("texta");
f.style.fontSize = "40" + "px";
f.style.marginLeft = "-5" + "px";

var f = document.getElementById("textb");
  f.style.fontSize = "32" + "px";
  f.style.marginLeft = "10" + "px";
  f.style.marginTop = "80" + "px";

  var f = document.getElementById("textc");
  f.style.fontSize = "32" + "px";
  f.style.marginLeft = "0" + "px";
  f.style.marginTop = "40" + "px";

  var f = document.getElementById("textd");
f.style.fontSize = "32" + "px";
f.style.marginLeft = "10" + "px";
f.style.marginTop = "20" + "px";
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
    e.src = "images/Skills.gif";
    var f = document.getElementById("texta");
    f.style.fontSize = "32" + "px";
    f.style.marginLeft = "30" + "px";

    var g = document.getElementById("textb");
  g.style.fontSize = "40" + "px";
  g.style.marginLeft = "10" + "px";
  g.style.marginTop = "80" + "px";

  var h = document.getElementById("textc");
  h.style.fontSize = "32" + "px";
  h.style.marginLeft = "0" + "px";
  h.style.marginTop = "40" + "px";

  var i = document.getElementById("textd");
i.style.fontSize = "32" + "px";
i.style.marginLeft = "10" + "px";
i.style.marginTop = "20" + "px";
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
    e.src = "images/Projects.gif";

    var f = document.getElementById("texta");
    f.style.fontSize = "32" + "px";
    f.style.marginLeft = "30" + "px";

    var g = document.getElementById("textb");
  g.style.fontSize = "32" + "px";
  g.style.marginLeft = "10" + "px";
  g.style.marginTop = "80" + "px";

    var h = document.getElementById("textc");
    h.style.fontSize = "40" + "px";
    h.style.marginLeft = "-20" + "px";
    h.style.marginTop = "30" + "px";

    var i = document.getElementById("textd");
i.style.fontSize = "32" + "px";
i.style.marginLeft = "10" + "px";
i.style.marginTop = "20" + "px";
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
    e.src = "images/Resume.gif";

    var f = document.getElementById("texta");
    f.style.fontSize = "32" + "px";
    f.style.marginLeft = "30" + "px";

    var g = document.getElementById("textb");
  g.style.fontSize = "32" + "px";
  g.style.marginLeft = "10" + "px";
  g.style.marginTop = "80" + "px";

  var h = document.getElementById("textc");
  h.style.fontSize = "32" + "px";
  h.style.marginLeft = "0" + "px";
  h.style.marginTop = "40" + "px";

    var i = document.getElementById("textd");
i.style.fontSize = "40" + "px";
i.style.marginLeft = "0" + "px";
i.style.marginTop = "10" + "px";
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
    e.src = "images/Logo.png";
    var f = document.getElementById("texta");
    f.style.fontSize = "32" + "px";
    f.style.marginLeft = "30" + "px";

    var g = document.getElementById("textb");
  g.style.fontSize = "32" + "px";
  g.style.marginLeft = "10" + "px";
  g.style.marginTop = "80" + "px";

  var h = document.getElementById("textc");
  h.style.fontSize = "32" + "px";
  h.style.marginLeft = "0" + "px";
  h.style.marginTop = "40" + "px";

  var i = document.getElementById("textd");
i.style.fontSize = "32" + "px";
i.style.marginLeft = "10" + "px";
i.style.marginTop = "20" + "px";
}

document.getElementById("greenBox").onmouseover = function() {mouseOverGreen()};
document.getElementById("greenBox").onmouseout = function() {mouseOutGreen()};

function mouseOverGreen() {
document.getElementById("green").style.zIndex = "2";

var e = document.getElementById("center");
  e.style.backgroundColor = "green";
  e.src = "images/Contact.gif";
var f = document.getElementById("texta");
f.style.fontSize = "40" + "px";
f.style.marginLeft = "-5" + "px";
  
}

function mouseOutGreen() {
  document.getElementById("green").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";
e.src = "images/Logo.png";
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
e.src = "images/Skills.gif";
    var f = document.getElementById("textb");
  f.style.fontSize = "40" + "px";
  f.style.marginLeft = "-20" + "px";
  f.style.marginTop = "90" + "px";
}

function mouseOutRed() {
document.getElementById("red").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";
    e.src = "images/Logo.png";
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
  e.src = "images/Projects.gif";
  var f = document.getElementById("textc");
f.style.fontSize = "40" + "px";
f.style.marginLeft = "-20" + "px";
f.style.marginTop = "30" + "px";

}

function mouseOutBlue() {
document.getElementById("blue").style.zIndex = "0";
  var e = document.getElementById("center");
    e.style.backgroundColor = "white";
    e.src = "images/Logo.png";
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
e.src = "images/Resume.gif";
  var f = document.getElementById("textd");
f.style.fontSize = "40" + "px";
f.style.marginLeft = "0" + "px";
f.style.marginTop = "10" + "px";
}

function mouseOutYellow() {
document.getElementById("yellow").style.zIndex = "0";
var e = document.getElementById("center");
  e.style.backgroundColor = "white";
  e.src = "images/Logo.png";
  var f = document.getElementById("textd");
f.style.fontSize = "32" + "px";
f.style.marginLeft = "10" + "px";
f.style.marginTop = "20" + "px";
}