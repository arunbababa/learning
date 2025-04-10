/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// console.log("0 == false", 0 == false);
// console.log("0 === false", 0 === false);
// console.log('"false" == false', "false" == false);
// console.log('"0" == 0', "0" == 0);
// console.log('Boolean("0") === false', Boolean("0") === false);
// console.log('Boolean(0) === false', Boolean(0) === false);
// console.log('!Boolean(0) === false', !Boolean(0) === false);
// console.log('-1 == false', -1 == false);
// console.log('!10 === false', !10 === false);

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
// let a = 1;

// function fn(num) {
//     num = num || -1;
//     console.log(num);
// }
// fn(a);


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */


// 以下自分の解答

/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false);                              // → true　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　〇
console.log("0 === false", 0 === false);                            // → false でもこれ抽象と厳格比較の違いよく覚えてないや調べよう　　　　　　　〇
console.log('"false" == false', "false" == false);                  // → false やっぱtrueで 　　　　　　　　　　　　　　　　　　　　　　　　　　 ×　　　いや普通にfalseでした　何かしらの文字列→truty 中身の文字列がfalse稼働かは関係ない　モヤっとするが、まぁ何がtruthyで何がfalsyかを覚えろ 文字列の場合はから文字列以外はtrutyや
console.log('"0" == 0', "0" == 0);                                  // → false アーすまんブラウザで試したらtrueでしたこれOKなんや やっぱtrueで　〇
console.log('Boolean("0") === false', Boolean("0") === false);      // → true　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　×　　　　だって文字列の"0"はtrutyでしょ？空文字じゃないんだからさ！
console.log('Boolean(0) === false', Boolean(0) === false);          // → true　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　〇
console.log('!Boolean(0) === false', !Boolean(0) === false);        // → false　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　〇
console.log('-1 == false', -1 == false);                            // → false　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　〇
console.log('!10 === false', !10 === false);                        // → true　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　〇

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
// let a = 1;

// function fn(num = -1) {
//     // num = num || -1;
//     console.log(num);
// }
// fn(a);
// ブッブーnullかundefinedいれてみ？ちゃんとif文するしかないのぉ
// 以下答え
let a = 1
function fn(num) {
    if (num == undefined || num == null){
        num = -1
    }
    console.log(num);
}
fn(a)

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */

// まぁおけ
function greeting(name, message="hello,"){
    console.log(message + name)
}

greeting("Bob")