export { };

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello'; // string型をMojiretu型として設定できる実態はただのstring型

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43
  //height: 175 // これはNG、Profile型にheightプロパティはないため
};

type Profile2 = typeof example1; // example1の型をProfile2として設定できる、つまりexample1の型をProfile2として設定できる、これで依存関係は生まれるが追従するようにできる
