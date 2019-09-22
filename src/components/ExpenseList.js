import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = props => (
    <div>
        <h2>Expense List</h2>
        <ul>
            {props.expenses.map(expense => {
                return (
                    <li key={expense.id}>
                        <ExpenseListItem 
                        {...expense} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = state => ({ expenses: selectedExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpenseList);