$(document).ready(function(){

var angels = ["👼🏾","👼🏼","👼🏽","👼🏿","👼🏻"];  

while($("#heaven").height() < $(window).height()){
  console.log("heaven: "+$("#heaven").height()+" window: "+$(window).height());
  var newAngel = Math.floor(Math.random()*angels.length);
  $("#heaven").append(angels[newAngel]);
  if($("#heaven").height() > $(window).height()){
    console.log("true, break");
    break;
  }
}

});