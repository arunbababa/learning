// スクリプトスコープとグルーバルスコープ

let a = 0; // これはスクリプトの方 constでも同じ
var b = 0; // これはwindowオブジェクトのプロパティになる
function c () {} // これはwindowオブジェクトのプロパティになる
debugger; // これで止まれる

// 上より、例えばbを取得したい際には以下のように書く
console.log(window.b)
// ただ、一般的にはwindowはつけずに取得できる
console.log(b)
// つまり、windowオブジェクトそれ自体がグローバルスコープとなっている

// 以下スコープチェーンの話
window.d = 1;
let d = 2;
console.log(d) // 2が取れる