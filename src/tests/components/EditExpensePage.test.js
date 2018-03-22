import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, wrapper, history;

beforeEach(() => {
  // spies for edit, remove and history function
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={expenses[0]}
  />);
});

test('should render the EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit editExpense function correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle onRemove remove expense function correctly', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
});