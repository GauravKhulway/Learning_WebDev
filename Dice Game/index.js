var randomNumber1=Math.floor(Math.random()*6)+1; //get a random number between 1 to 6
var randomDiceImage="dice"+randomNumber1+".png"; //get address of a random image between 1 to 6 using string concatenation
var randomDiceImageSource="images/"+randomDiceImage;//create a source to select images from images folder
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource);//set dice 1 image using attribute manupilation

var randomNumber2=Math.floor(Math.random()*6)+1; //get a random number between 1 to 6
var randomDiceImageSource2="images/dice"+randomNumber2+".png";//create a source to select images from images folder
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource2);//set dice 2 image using attribute manupilation

//***************You can even make a function to do it******************************************
// function randomImageAddress(){
//   var randomNumber=Math.floor(Math.random()*6)+1; //get a random number between 1 to 6
//   var randomDiceImageSource="images/dice"+randomNumber+".png";//create a source to select images from images folder
//  return randomDiceImageSource;
// }
// var ans=randomImageAddress();
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",ans);//set dice 1 image using attribute manupilation
//
// ans=randomImageAddress();
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",ans);//set dice 1 image using attribute manupilation
//*********************************************************************************************
if(randomNumber1>randomNumber2){ //if Player 1 wins
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (randomNumber1<randomNumber2) {//if player 2 wins
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{ //if match is draw
  document.querySelector("h1").innerHTML="It's a DRAW!";
}
