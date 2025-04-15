import axios from 'axios';

export { };

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    // title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
});

// interfaceの解説はまた今度、とりあえず自分なりの型定義ができる、そして焦点になるのはtypeとの違い
