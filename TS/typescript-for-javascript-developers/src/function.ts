export { };

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));

// ハムさんいわく、関数の型について注意すべきは引数の型と戻り値の型のみ
// 個人的なメモ　→　んーなんか関数自体の型定義ってあったよな？どんな引数とってどんな戻り値を返すかみたいなやつ

// これだ
// const bmi: (height: number, weight: number) => number = (height, weight) => {
//   return weight / (height * height);
// };
