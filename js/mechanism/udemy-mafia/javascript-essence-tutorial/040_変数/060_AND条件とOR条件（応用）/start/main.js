// function Hello(name){
//     console.log(`Hello ${name}`)
// }
// Hello("aru")

// // このままでは不格好、引数に何も渡らない場合のデフォルト的なのをtruty falsyでやれ！条件分岐
// function Hello(name){
//     if (!name){
//         name = "Bob"
//     }
//     console.log(`Hello ${name}`)
// }
// Hello("aru")
// // 補足、この変数nameはグローバルスコープやで関数の引数は(?)

// // んで以下の方がifよりわかりやすいかもねぇ
// function Hello(name){
//     name = name || "Bob"
//     console.log(`Hello ${name}`)
// }
// Hello("aru")

// // まぁでもES6からデフォルト引数できるので以下でいいかも
// function Hello(name = "Bob"){
//     if (!name){
//         name = "Bob"
//     }
//     console.log(`Hello ${name}`)
// }
// Hello("")

// nameがfalsyじゃないときにHello()を実行したい！
function Hello(nam){
    console.log(`Hello ${nam}`)
}
let nam = "";
nam && Hello(nam)