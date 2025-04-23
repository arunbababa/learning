export { };

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));

// こんな感じで第二引数を渡さない場合は?となる、どちらでもよいとのこと
