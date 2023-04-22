var a=Math.floor(Math.random()*6)+1;
var d="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",d);

var b=Math.floor(Math.random()*6)+1;
var c="images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",c);



if(a>b){
document.querySelector("h1").innerHTML="Player1 wins";
}
else if(a<b){
document.querySelector("h1").innerHTML="Player2 wins";
}
else{

document.querySelector("h1").innerHTML="Draw";
}
