export { };

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.78, 86));

// なおbmiにカーソル充てて型推論見てみ、んでそれ当た手もいいけどまぁなんか冗長
// 無名関数に型当てるのは何となくわかるけどこれはもうなんか二重アローみたいでキモイ、まぁOK