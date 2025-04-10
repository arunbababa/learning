package main

import "fmt"

func main() {
	byteA := []byte{72, 73} // := は短縮系の変数宣言 明示的に型を与えなくても右側の値から推論してくれる []byteでbyte型の要素を持ったスライス(可変長配列)
	fmt.Println(byteA)

	fmt.Println(string(byteA)) // これで上のスライスから文字列ができる

	c := []byte("HI") // 上の逆やな
	fmt.Println(c)
	fmt.Println(string(c)) // さらに逆や

}
