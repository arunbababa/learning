package main

import "fmt"

func main() {
	var s string = "Hello Golang"

	si := "100"

	fmt.Println(s)
	fmt.Println(si)

	fmt.Printf("%T\n", s)

	fmt.Println(`Hello
		World`)

	fmt.Println("\"")
	fmt.Println(`"`)

	//fmt.Println(s[0])

	// int型にもいろいろ種類があり、その中で型があっていないといけない、なお型変換できる、そして型調べだがfmt.Printlnの第二引数に変数名渡せば型が調べられる
	var mine int64 = 100
	var mien_vani = 100
	fmt.Println(mine + int64(mien_vani))
}
