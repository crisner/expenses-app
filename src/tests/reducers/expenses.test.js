import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense to state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '3',
            description: 'Tea',
            note: '',
            amount: 2,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should remove expense by id from state', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense from state if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense in state', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        expense: {
            note: 'Month end bill',
            amount: 500
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], {
        ...expenses[2],
        note: action.expense.note,
        amount: action.expense.amount
    }]);
});

test('should not edit expense in state if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        expense: {
            note: 'Month end bill',
            amount: 500
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});