/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        return 'hello Tom';
    }
}

// OK
setTimeout(() => {
    console.log(person.hello())
}, 1000);

// setTimeout(/** ここに追記 */, 1000);

/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */

// OK
setTimeout(() => {
    alert(person.hello())
}, 1000);

/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function () {
    console.log('hello');
}

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
after1s(obj.greeting); // んー先にこっち実行されて巻き上げとか多分ないしあれあるっけ？まぁないと思うにかけるのでhelloです！　←　正解　逆に巻き上げある時を知ればいいね

// この後でgreetingを書き換えます。
obj.greeting = function () {
    console.log('hey');
}


/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 * 
 * ※コールバック関数を用いて実装してください。
 */

// んー思いつくのはplus:[consoleFunc()...,alertFunc()...]みたいにすることかなぁこれで呼び出せるんか？ calc.plus.consoleFunc(5)っていう風に
function calcFactory(val) {
    return {
        plus: function (target, callack) {
            const newVal = val + target;
            callack(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function (target) {
            const newVal = val - target;
            callack(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function (target) {
            const newVal = val * target;
            callack(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function (target) {
            const newVal = val / target;
            callack(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

// 出力用コールバック関数
const consoleOutput = (msg) => console.log(msg);
const alertOutput = (msg) => alert(msg);

const calc = calcFactory(10);
calc.plus(5, consoleOutput);
calc.plus(5, alertOutput);
// calc.minus(3);
// calc.multiply(3);
// calc.divide(2);

