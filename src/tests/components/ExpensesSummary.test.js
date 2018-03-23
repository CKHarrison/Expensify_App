import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('should correctly render ExpenseSummary with one expenses', () =>{
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={400}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with one expenses', () =>{
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={4004564879321}/>);
  expect(wrapper).toMatchSnapshot();
});