export { };

function returnNothing(): void {
  console.log("I dont't return anything!");
}

console.log(returnNothing());

// voidはundefinedを返す関数の型を表す。
// ただし、undefinedを返す関数はvoid型として扱われるが、void型の関数はundefinedを返すとは限らない。