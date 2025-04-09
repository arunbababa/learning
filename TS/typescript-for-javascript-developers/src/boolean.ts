export { };
// なぜexportが必要なのか？
// JSではデフォルトでファイルがモジュールとして認識されない
// のでモジュールシステムを利用しimportやらexportでモジュール化しないといけない
// だから上のexport{}をなくすとnameの行でエラーが出るなぜか？
// モジュールでないつまりモジュールスコープでないさらに上のnameを変更というかまぁアクセスなり定義ナイスする可能性がある
// そのさらに上の奴はカーソル充てればわかるよ
// これはあかんよね危ない、ということでエラーが出る

let name = 'TypeScript';

let isFinished: boolean = false;
isFinished = true;
// isFinished = 1; // truthyはちゃうぞぉ
console.log({ isFinished }); // なおこれはオブジェクト生成の省略記法
