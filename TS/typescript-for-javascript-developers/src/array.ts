export { };

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// これ注意 最初の予想だと以下はArray<Array>もしくはArray[array]←これどう見てもだめだろ他と比較しろアホ　とかかなと思った
// なおこれならいける　Array<<Array>number>
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
