/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */


// mine
function calcFactory(num){
    let common_num = num;
    function plus(plus_num){
        common_num += plus_num
        console.log(common_num)
    }
    function minus(minus_num){
        common_num -= minus_num
        console.log(common_num)
    }
    function mult(mult_num){
        common_num *= mult_num
        console.log(common_num)
    }
    function div(div_num){
        common_num /= div_num
        console.log(common_num)
    }
    return {
        plus,minus,mult,div // これを忘れてしもうてた気をつけろアクセスするために何をすればよいか考えろ.ということはオブジェクトや
    }
}

const calc = calcFactory(10); // 初期値を10として設定
calc.plus(5);      // 出力結果 "10 + 5 = 15"
calc.minus(3);     // 出力結果 "15 - 3 = 12"
calc.mult(3);  // 出力結果 "12 x 3 = 36"
calc.div(2);