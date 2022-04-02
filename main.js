img="";

function setup(){
canvas=createCanvas(640,420);
canvas.center();
}


function preload(){
img=loadImage("dog_cat.jpg")
}

function draw(){
image(img,0,0,640,420);
fill("crimson");
text("Dog",45,75);
noFill()
stroke("crimson");
rect(30,60,450,350);
}