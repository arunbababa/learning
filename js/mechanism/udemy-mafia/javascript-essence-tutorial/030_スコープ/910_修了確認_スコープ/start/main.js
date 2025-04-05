/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 * 
 * ※if文は削除してはいけません。
 */

// 自分
function fn() {
    if(true) {
        let a = 'fn called';
        return a;
    }
}

const result = fn();
console.log(result);
// 模範

// function fn() {
        // let a ;
//     if(true) {
//         let a = 'fn called';
//     }
        // return a;
// }

// const result = fn();
// console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
var val = 'val1';
function fn2() {
    console.log(val); // 期待値->'val1'

    if(true) {
        const val = 'val2'; // varによる変数の巻き上げを解消
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 * 
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

// 自分　もぉ前のレクチャーの完コピペ完コピペやんアウト
// function incrementFactory() {
//     let num = 0;
//     function a() {
//         num = num + 1;
//         console.log(num);
//     }
//     return a;
// }
// const increment = incrementFactory();
// increment();
// increment();
// increment();
// increment();

// 模範
{
    num = 0;
    function increment(){
        num += 1;
        console.log(num)
    }
}

increment()
increment()
increment()
increment()

