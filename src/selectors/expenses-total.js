export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((acc, next) => (acc + next), 0);
};