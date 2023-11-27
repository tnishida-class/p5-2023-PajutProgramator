// テキスト「配列」～「配列を使った描画」までを収録

function setup(){
  createCanvas(400, 400);
  background(255);
  let scores = [];

  for(let i = 0; i < 10; i++){ 　　//ここの10はscores.length
    scores[i] = random(54, 100);
  }

  let sum = 0;
  for(let i = 0; i < scores.length; i++){　//10回やるように設定
    sum += scores[i];  //sum ＝　sum ＋　scores　//何をやるか
  }

  //平均値
 let average = sum / scores.length;
　//console.log(average);  

  //最大値
  let largest = 0;
  for(let i = 0; i < scores.length; i++){
    if (largest < scores[i]) {　　　　//順番に0から10までの値を比較する。最初は０と１番目の数値を比較して、高い方を取る。２番目に、さっき取った高い方と２番目の数値を比較し高い方をとる。ずっとその繰り返し。
      largest = scores[i];　　　　　　　//　let.largestは別に54とかでも良い
    }
  }

  //最小値
  let smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
  }

  //棒グラフ
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }　//prvni a druhy udaj je zacatek tech cernych car v pozari a treti a ctvrty udaj je jejich konec

  //noStroke();
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    if (scores[i] === largest) {
      fill(0, 154, 0);
    } else if (scores[i] === smallest) {
      fill(0, 0, 154);
    } else {
      fill(122);
    }
    rect(i * dx + 2, height - h, dx - 4, h); //(height - h) je vyska minus hodnota grafu
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h); //toPrecision(3)　znamena 桁数の指定
  }

  stroke(0, 255, 0);
  const ah = height * average/100
  line(0, height -  ah, width, height-ah);
}
