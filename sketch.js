//For my final project I was attempting to take the picture I made in javascript
//and make it so you can color the canvas to change the colors on the picture
//The challenges was trying to figure out how to actually change the colors
//as well as making an ellipse that changes those colors as well.
//Is what I wanted to do but i'm not sure how to get the eliipses and the
//crusor to work the way I want. I can only get it to change the colors of the
//outline of the grass, tree, and house each time you refresh.
var r,g,b;
function setup() {
  createCanvas(600, 400);//Canvas size
  background(235)
  strokeWeight(1)
  r= random(255)
  g= random(255)
  b= random(255)
}

function draw() {
  if (mouseIsPressed){
    background(126);
    ellipse(mouseX, mouseY, 33, 33);
    stroke(r,g,b);
  }



  background(0,178,255);//sky
  //        (R  ,G  ,B)

  fill(44, 80, 0);//Grass Color
  rect(0,310,600,90)//Grass
  //  (x1 ,y1, width, height)

  fill(160);//RoofColor
  triangle(290,250,510,250,400,150);//Roof
  //      (x1 ,y1, x2, y2, x3, y3)


  fill(60, 14.1, 0);//House Outer Color
  rect(300,250,200,100);//House outer
  //  (x1 ,y1, width, height)

  fill(160);//Door Color
  rect(420,260,50,90);//Door

  fill(255, 241, 158);
  ellipse(460,310,10,10);//Doorknob

  fill(41.2, 26.7, 12.9);//TrunkColor
  rect(90,190,20,190);//trunk
  //  (x1 ,y1, width, height)

  //Tree
  fill(44, 80, 0);//TreeColor
  ellipse(100,200,150,150);//tree

  //Cloud 1
  stroke("rgba(255, 255, 255, 0.8)");
  fill("rgba(255,255,255,0.8)");
  ellipse(50,50,50,40);
  ellipse(70,60,60,30);
  ellipse(75,50,20,20);
  ellipse(30,60,30,20);

  //cloud2
  stroke("rgba(255, 255, 255, 0.9)");
  fill("rgba(255,255,255,0.9)");
  ellipse(200,90,50,40);
  ellipse(180,90,60,30);
  ellipse(175,80,20,20);
  ellipse(210,90,30,20);

  //cloud3
  stroke("rgba(255, 255, 255, 0.9)");
  fill("rgba(255,255,255,0.9)");
  ellipse(420,50,120,40);
  ellipse(430,60,30,30);
  ellipse(460,30,30,20);
  ellipse(370,60,30,20);

  //sun
  fill(255, 241, 158);
  ellipse(600, 40, 200,200);

}
