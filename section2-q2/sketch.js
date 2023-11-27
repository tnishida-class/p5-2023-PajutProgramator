// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = 25;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
       // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 1){
        fill(140);
      rect(size * i, size * j, size, size);
      }
      if((i + j) % 2 == 1 && j < 3){
        fill(252, 0, 0)
        ellipse(size * (i + 0.5), size * (j + 0.5), 21);
      }
      if((i + j) % 2 == 1 && 4 < j){
        fill(0)
        ellipse(size * (i + 0.5), size * (j + 0.5), 21);
      }
     
    }
  }
}