export { };

class Person {
  public name: string; // publicに関してはあってもなくても変わらない
  // private age: number;
  protected age: number;
  protected nationality: string; // 自身のクラスとサブクラスからアクセス可能 継承とかでね

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // superは親クラスの中からsuperが属するメソッド（この場合constructor）と同名のメソッドの役目をする、ので基本的にその同名のクラスが親で使われるように引数を与える
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
