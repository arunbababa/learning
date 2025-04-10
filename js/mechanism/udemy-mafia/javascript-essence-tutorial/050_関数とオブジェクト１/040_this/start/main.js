// 呼び出し元のオブジェクトへの参照を保持するキーワード
const person = {
    name: 'Tom',
    hello: function () {
        console.log("hello " + this.name)
    }
}

person.hello()

// なお実行コンテキストによってthisの参照先は変わる
// 基本的には関数コンテキストとのこと