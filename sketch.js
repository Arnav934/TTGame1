var home;
var singlePlrHome;

function setup(){
createCanvas(displayWidth - 0, displayHeight - 100)
home = new Home();
home.display()
}

function draw(){
background("red")
drawSprites();
}