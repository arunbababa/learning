// refにおけるnameアクセスのためにwindowに以下のように設定すると...
window.name = 'Tom'

const person = {
    name: 'Tom',
    hello: function () {
        console.log('Hello ' + this.name);
    }
}
person.hello(); // => Hello Tom

const ref = person.hello // これだとpersonオブジェクトを経由せずに直接valueにあるfunctionを呼び出す、つまりperson内のコンテキストにいないのだ
ref()           // => Hello なぜTomがないのか？

// 以下の理解兼暗記を徹底
// オブジェクトのメソッドとして実行される場合　→　thisは呼び出し元オブジェクトを参照
// 関数として実行される場合　→　thisはグローバルオブジェクトを参照