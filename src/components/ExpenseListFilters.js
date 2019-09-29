import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

import RangePicker from './RangePicker';

export class ExpenseListFilters extends Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortByChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    render () {
        return (
            <div>
                <label>Search:</label>
                <input type="text" value={ this.props.filters.text } onChange={this.onTextChange} />
                <select value={ this.props.filters.sortBy } onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <RangePicker />
            </div>
        );
    }
}

const mapStateToProps = state => ({
        filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);