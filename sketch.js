var diam1; 
diam1=250; 
var thickness=5;

function setup() {
  // put setup code here
    createCanvas (500,500);        
}

function draw() {
  // put drawing code here
    background ("#f2e6ff");
    fill("#ffff4d");
    stroke("#400080");
    textSize(25);
    //text(String,posX,posY)
    strokeWeight(5);
    text("You are lucky today!",128,250);
    fill("#808080");
    stroke("#ffffff");
    textSize(20);
    text("Click a mouse",15,50);
    fill ("#a64dff");
    stroke("#ffff4d");
    strokeWeight(thickness);
    ellipse(250,250,diam1,diam1);
    fill ("#400080");
    stroke ("#400080");
    ellipse(mouseX,mouseY,40,30);    
}
function mousePressed() {
    if (diam1>=200){
        diam1=0;  
        thickness=0;
    } else {
        diam1=diam1+250;
        thickness=5;
    }   
}