export { };

let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日'; // これで具体的にどのリテラルを型として（というかまぁ値を型っぽくできる）使うかを定義できる
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;　Type '13' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'.

let TRUE: true = true;
// TRUE = false;
