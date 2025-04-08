package main

import "fmt"

var i int = 100
var s string = "Golang"

var t, f bool = true, false

// ()でインポートと同様に複数同時にかける、なおこれを出力する際は改行されないのだ（fmt.println）
var (
	ii int    = 1000
	ss string = "Go"
)

var i2 int

var sss string = "arunbababa"

//i3 := 100

func main() {
	fmt.Println(i2)
	i2 = 150
	fmt.Println(i2)

	fmt.Println(sss)
	sss = "Go!!"
	fmt.Println(sss)

	i2 = 200
	fmt.Println(i2)

	i3 := 200
	fmt.Println(i3)

	//i3 := 300 ← 暗黙的な定義 これで値に応じて型が当たる、ただ同的に当たるわけではないので注意 なお同じ型での値の更新はできる、ただ再宣言と違う型の代入は無理
	// あと関数内でしか当たらないとのこと　関数外でやる際は明示的な定義をしろ　あと基本的には明示的に型付けしろ
	i3 = 300

	//i3 = "string"

}
