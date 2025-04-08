// function fn(a, b) {
//     console.log(a, b)
// }

// 上の関数の場合bはundefinedになる
// fn(1)
// 下の関数の場合なおこの書き方だと下になる関数を参照するこれなぜか？→巻き上げですね

// function fn(a, b) {
//     console.log(2)
// }

// 以下デフォルト値
// function fn(a, b = 1) {
//     console.log(a, b)
// }
// fn(1)

// 補足 引数に何もわたっていない方はundefinedになるため、初期化としてundefinedを入れることはない

// 関数コンテキスト
// arguments　→　実引数がインデックス0から順の配列ができる
// function fn(a, b = 1) {
//     console.log(arguments)
//     console.log(a, b)
// }
// fn(1, 2)

// 以下のようにできることから、渡される引数の個数やらがわかっていないときに使える
function fn() {
    for (let i = 0; i < arguments.length; i++) {
        console.log((arguments[i]))
    }
}
fn(1, 2, 3, 4, 5)
