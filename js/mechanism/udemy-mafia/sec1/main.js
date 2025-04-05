// スクリプトスコープとグルーバルスコープ

// let a = 0; // これはスクリプトの方 constでも同じ windowの方にはならない
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
// var使えない　ブロックの中でvar使うと巻き上げ怒ってブロック買いから使えてしまう

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
// {
//     function d (){
//         console.log("d is called")
//     }
// }
// d() // 呼べちゃうの良くない意図しないことが起きる可能性がある
// // なので関数宣言を以下のようにすること！
// {
//     const e = function (){
//         console.log("e is called")
//     }
//     e() // これならしっかりと呼べる
// }

// e() // これなら呼べずにしっかりとエラーが出る

// 上を解決するために、とりまvar使わずにconstかletでオネシャス

// スコープと実行コンテキストのおさらい

// グローバルコンテキスト→グローバルオブジェクトやthis、scriptスコープやらが利用できる

// 関数コンテキスト→実行中のコンテキスト内の変数や関数が利用できる

// なおコンテキストは実行中のコードの状況や状態的な意味合い

// レキシカルスコープ→何処に何を書いているかという意味合い
// コードを書く場所によって参照できる変数が変わるスコープのこと
// コードを記述した時点で決定するため静的スコープとも言われる→実行中に決まるのを動的な感じ

// let a = 2;
// function fn1(){
//     let b = 1;
// }
// fn1();

// function fn2(){
//         let c = 3;
//         console.log(b)
//     }
// fn2();
// fn2の位置で参照できるスコープが変わる、こういうのがレキシカルスコープ

// スコープチェーン
// 一番内側の値というか近いスコープから参照する挙動

// スクリプトスコープとグローバル（Window）スコープの比較
// let a = 2;
// window.a = 9
// function fn1() {
//     function fn2(){
//         console.log(a)
//     }
//     fn2()
// }
// fn1();
// えマジかてっきりletだから上書きされてa = 9が参照されるかと思ったエーなんでだ
// ヒント兼用復習 letとconstはグローバルスコープのプロパティにならねーよ

// let a = 2;
// window.a = 9
// function fn1() {
//     function fn2(){
//         console.log(a)
//         let a = 3;
//     }
//     fn2()
// }
// fn1();

// クロージャー

// プライベート変数について
// function incrementFactory(){
//     let num = 0;
//     function increment(){
//         num += 1;
//         console.log(num)
//     }
//     return increment
// }
// const a = incrementFactory();
// a();
// a();
// a();

// もし以下だったら何が問題だと思う？→numが書き換えられてしまう可能性があるから、意図しない動作になる可能性がある

// let num = 0;
// function increment(){
//     num += 1;
//     console.log(num)
// }

// increment();
// increment();
// increment();

// 動的な関数の生成について

// 以下の感じで2段階セットできるね変数を
// function addNumberFactory(num){
//     function addNumber(value){
//         return num + value
//     }
//     return addNumber
// }
// const add5 = addNumberFactory(5);
// const add10 = addNumberFactory(10);
// const result = add10(10)
// console.log(result)

// 即時関数

function a(){
    console.log("called")
}

a()

// これを即時関数に書き直すと...?
(function(){
    console.log("called")
    return 0;
})()
// これはつまり(a)()と同じ、そして一回だけ使うこんな名前のない関数の場合（まぁ即時関数で使いたい場合）()でくくらないとあかんグループ化して無名関数としてみてもらうために
// 詳しくは次まで https://wp-p.info/tpl_rep.php?cat=js-intermediate&fl=r11

// なお()には２つの意味がある、関数実行とグループ化

//  なるほどわかってきたぞ、関数定義と実行が隣接というかもうすぐやねん

// 使いどころは？→ローカル変数の切り分けというか管理したい場合に便利名前もつけなくていいしね