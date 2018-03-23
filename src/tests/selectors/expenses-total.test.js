import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(0).toBe(result);
});

test('should correctly add up a singe expense', () => {
  const result = selectExpensesTotal([expenses[0]])
  expect(195).toBe(result);
});

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(114195).toBe(result);
});