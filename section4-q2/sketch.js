// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
let scores = [];
for (let i = 0; i < 10; i++){
scores[i] = random(20, 100);

// 円グラフを描くには割合が必要なので合計を計算しておく
let total = 0;
for (let i = 0; i < scores.length; i++){ total += scores[i]; }

let sum = 0 //累計

// 円グラフ
for (let i = 0 ; i < scores.length; i++) {
  const cx = width / 2;
  const cy = height / 2;
  const r = 0.9 * min(width, height); // 11

let start = TWO_PI * sum / total - PI / 2;
let stop = TWO_PI - PI / 2;
arc(cx, cy, r, r, start, stop, PIE);
sum += scores[i];

let start2 = TWO_PI * sum / total - PI / 2;
textAlign(CENTER, CENTER);
text(scores[i].toPrecision(3), cx + 0.4 * r * cos((start + start2) / 2), cy + 0.4 * r * sin((start + start2) / 2));
}
}
}