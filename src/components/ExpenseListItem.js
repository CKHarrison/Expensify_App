import React from 'react';
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: {amount} - Created At: {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
  </div>
);


export default connect()(ExpenseListItem);