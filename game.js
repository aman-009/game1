var one = document.getElementById("two");
var func = function(event){
  var hor = one.getBoundingClientRect().left;
  var ver = one.getBoundingClientRect().top;
  if(event.which == 40){
    console.log("down");
    one.style.top = (ver+10)+"px";
  }
  if(event.which == 38){
    console.log("up");
    one.style.top = (ver-10)+"px";
  }
  if(event.which == 39){
    console.log("right");
    one.style.left = (hor+10)+"px";
  }
  if(event.which == 37){
    console.log("left");
    one.style.left = (hor-10)+"px";
  }
};


document.addEventListener('keydown',func);