export { };

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };
console.log(profile1); // オブジェクト型である設定はできるが更新は可能、当然

let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Nimo' }; // これはOK
// profile2 = { birthYear: 1976 }; // これはNG、nameプロパティがないため、つまりこっちはオブジェクトでありかつプロパティの指定までできる
