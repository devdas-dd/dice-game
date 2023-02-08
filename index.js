var randumNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var randumDiceImage = "dice"+randumNumber1+".png"; //dice + 1 to 6 + .png
var randumImageSource = "images/"+randumDiceImage;  // images + dice + 1 to 6 + .png
var image1 = document.querySelectorAll("img")[0]; 
image1.setAttribute("src", randumImageSource);

var randumNumber2 = Math.floor(Math.random() * 6)+1;
var randumDiceImage = "dice"+randumNumber2+".png";
var randumImageSource2 = "images/"+randumDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randumImageSource2);


if(randumNumber1>randumNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Win!🥇";
}
else if(randumNumber1<randumNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 2 Win!🥇";
}
else{
    document.querySelector("h1").innerHTML =  "Draw🟰";
}