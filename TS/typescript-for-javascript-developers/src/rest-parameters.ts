export { };

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

type sumFunc = (...values: number[]) => number

const sum: sumFunc = (...values: number[]): number => { // ...とすることで配列として引数たちを受け取れる *argsみたいやな(引数がイテラブルではないね、イテラブルな奴に対して*で受け取るとそれは展開されちゃう)
  return values.reduce(reducer); // reduceメソッドはコールバック関数を使って、配列の各要素を1つの値に畳み込む（累積する）処理をする。
  // コールバックの戻り値が次のループの累積値（accumulator）として使われる。
};

console.log(sum(1, 2, 3, 4, 5));

// そのまんまの意味的には静的引数かな