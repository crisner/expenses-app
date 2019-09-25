import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

import RangePicker from './RangePicker';

const ExpenseListFilters = props => (
    <div>
        <label>Search:</label>
        <input type="text" value={ props.filters.text } onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value)
        }} />
        <select value={ props.filters.sortBy } onChange={(e) => {
            e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <RangePicker />
    </div>
);

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);