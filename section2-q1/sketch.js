// 小手調べ
function setup(){
  for(let i = 1 ; i < 11; i++){
    // BLANK[1]
  if(i < 6){
  stroke(0, 0, 255);
  noFill();
  ellipse(50, 50, i*10);
}
else{
  stroke(255, 0, 0);
  noFill();
  ellipse(50, 50, i*10);
}}}
