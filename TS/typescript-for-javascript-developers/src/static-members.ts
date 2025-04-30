export { };

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!";
    console.log(`Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`);
    console.log(`Hey, guys! This is ${Me.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`);
    return;
  }
}

// let me = new Me();
// console.log(me.isProgrammer); これだとなぜダメなのか？　isProgramerはインスタンスからアクセスしては行けないからである！静的メンバだもん
console.log(Me.isProgrammer);
console.log(Me.work());
