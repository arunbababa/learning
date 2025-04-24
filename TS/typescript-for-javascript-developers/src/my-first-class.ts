export { };

class Person {
  // name: string;
  // age: number;

  // constructor(name: string, age: number) { // なんか説明に合ったけどconstructor関数の戻り値の型定義はしないとのこと、まぁ特に何もreturnしないしね
  //   this.name = name;
  //   this.age = age;
  // }

  constructor(public name: string, public age: number) {
    // この書き方でプロパティ宣言と代入をまとめてできる
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
