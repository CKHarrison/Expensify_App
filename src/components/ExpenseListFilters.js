import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      // This will track the key stroke and modify store to reflect that
      props.dispatch(setTextFilter(e.target.value));
    }}/>
    <select value={props.filters.text}>
      <option value="date" onChange={(e) => {
        // This will track the key stroke and modify store to reflect that
        props.dispatch(setTextFilter(e.target.value));
      }}>Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);