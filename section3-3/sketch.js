// テキスト「キーボード操作に反応する」

let x, y;

function setup(){
  createCanvas(700, 700);
  x = 700 / 2;
  y = 700;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)){ x += 10;}
  if(keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){ x -= 10; }
}
