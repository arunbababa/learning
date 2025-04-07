// 厳格な比較ではメモリというかまぁ参照先が同じならtrueだ以上

const a = {
    prop:0
}

const b = {
    prop:0
}

console.log(a === b) // => false
console.log(a == b) // => false

const c = a;
console.log(a === c); // => true 参照先が同じだから