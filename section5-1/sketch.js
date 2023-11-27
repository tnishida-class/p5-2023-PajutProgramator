// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(222, 222);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = width/2 + cos(theta) * width/4;
    let y = height/2 + sin(theta) * height/4;
    fill(255, 204, 0);
    star(x, y, width/20);
    }
  }
  
  function star(cx, cy, r){   //引数、parametr
    beginShape();
    for (let i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;　//五角形を作って、先っちょが２個先のところまで線を引く、形を描く、という意味
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
