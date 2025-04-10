// truty falsy

// 0,"",false,null,undefined,NaN,0nがfalsyそれ以外trusy空配列もな！
let a = parseInt("");
console.log(a)
// nodeのレプルでも確認済み

// こんな使い方もできる
if (a){
    console.log("a is not false");
}else{
    console.log("a is false")
}