// スクリプトスコープとグルーバルスコープ

// let a = 0; // これはスクリプトの方 constでも同じ
// var b = 0; // これはwindowオブジェクトのプロパティになる
// function c () {} // これはwindowオブジェクトのプロパティになる
// debugger; // これで止まれる

// // 上より、例えばbを取得したい際には以下のように書く
// console.log(window.b)
// // ただ、一般的にはwindowはつけずに取得できる
// console.log(b)
// // つまり、windowオブジェクトそれ自体がグローバルスコープとなっている

// // 以下スコープチェーンの話
// window.d = 1;
// let d = 2;
// console.log(d) // 2が取れる

// 関数スコープとブロックスコープ

// 正常系
// function a() {
//     let b = 10;
//     console.log(b)
// }
// a()

// 異常系
// function a() {
//     let b = 10;
// }
// console.log(b) // undefinedエラーだね
// a()

// ブロックとは
// 波かっこ {} のこと
// ブロックスコープのルール
// var使えない

// 正常系
// {
//     let c = 1;
//     console.log(c)
// }

// // 異常系
// {
//     let c = 1;
// }
// console.log(c) // undefinedエラー

// 関数宣言ではブロックスコープが無視される
{
    function d (){
        console.log("d is called")
    }
}
d() // 呼べちゃうの良くない意図しないことが起きる可能性がある
// なので関数宣言を以下のようにすること！
{
    const e = function (){
        console.log("e is called")
    }
    e() // これならしっかりと呼べる
}

e() // これなら呼べずにしっかりとエラーが出る

// 上を解決するために、とりまvar使わずにconstかletでオネシャス