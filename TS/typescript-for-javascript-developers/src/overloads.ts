export { };

function double(value: number): number;
function double(value: string): string;

// 実態関数の方でanyとしたら型安全じゃなくない？
// 違う!!上の2つですでにシグネチャとして実態の方で何を受け取れるか型指定済み
// なので配列とか渡すと普通にエラーしてくれるのだ!!
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value; // あ、文字列は * 使えないんやな
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));　これそもそも渡せない、シグネチャが守ってくれる
