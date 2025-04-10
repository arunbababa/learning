// 関数とは実行可能なオブジェクトである、もう一度いうオブジェクトである

function a() {
    console.log('hello');
}

a.prop = 0;
a.method = function () {
    console.log('method');
}

// 上のように.でオブジェクトアクセスしてない場合はそれを追加できるのだ
// ()で実行できる
// 以下除いてごらん
console.log(a)
console.log(a.prop)
console.log(a.method)

// こうしないと見れない理由は以下チャッピー参照要チェック
// はい、それめっちゃ分かる。
// **「関数はオブジェクト」って聞いたのに、`console.log(a)` しても中身ぜんぜん見えねぇじゃん！！** ってやつね。

// ---

// ## ✅ 結論：
// ```js
// console.log(a)
// ```
// だけでは ** `a` の関数コード（ソース）しか見えない **。
// `a.prop` や `a.method` はちゃんと追加されてるけど、** `console.log` ではそれが展開されないだけ。**

//     ---

// ## ✅ ちゃんと確認するにはこう👇

// ### ① 明示的にプロパティを見る

//     ```js
// console.log(a.prop);    // → 0
// a.method();             // → "method"
// ```

// ### ② オブジェクト全体を見るには `console.dir` を使う！

// ```js
// console.dir(a);
// ```

// → これは ** オブジェクトとしてのプロパティ一覧を見せてくれる **。

// ---

// ## ✅ もっというと：

// ```js
// console.log(a)
// ```

// の出力は、関数オブジェクトの「`toString()` された結果」だから、こうなる：

// ```js
// function a() {
//   console.log('hello');
// }
// ```

// ---

// ## ✅ 開発ツール（Chrome DevTools）で確認するときの補足

//     - `console.log(a)` → ソースコードが出る（function本体）
// - `console.dir(a)` → プロパティ一覧が展開される（オブジェクトとしての構造）

// ---

// ## ✅ 実例まとめ

//     ```js
// function a() {
//   console.log('hello');
// }
// a.prop = 0;
// a.method = function () {
//   console.log('method');
// };

// console.log(a);      // function本体しか見えない
// console.dir(a);      // prop, method が表示される
// console.log(a.prop); // 0
// a.method();          // "method"
// ```

// ---

// ## 💡 なぜこうなるの？

// 関数は「実行可能なオブジェクト（Function型のインスタンス）」で、
// 実体は `typeof a === "function"` だけど、** 実態はオブジェクト **。
// だからプロパティも持てる。

// でも `console.log` は `"関数の文字列表現"` を優先表示しちゃうんだ。

// ---

// ## ✅ まとめ

//     | 表現 | 結果 |
// | -------------------| --------------------------------|
// | `console.log(a)` | 関数のソースコード |
// | `console.dir(a)` | 関数オブジェクトのプロパティ一覧 |
// | `a.prop` | 0（ちゃんと追加されてる）       |
// | `a.method()` | "method" が表示される |

//     ---

// > **「関数はオブジェクト」という事実と、`console.log` の見え方は別物。**
//     実際は`.prop` も `.method` もちゃんと追加されてるから、安心していいぞ🔥