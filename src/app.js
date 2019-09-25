import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
//     // console.log(store.getState());
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Add expenses
store.dispatch(addExpense({description: 'Water bill', note: 'This months bill', amount: 550, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', note: 'This months bill', amount: 850, createdAt: 2000}));
store.dispatch(addExpense({description: 'Phone bill', note: 'This months bill', amount: 50, createdAt: 3000}));

// Add filters
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));


ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));