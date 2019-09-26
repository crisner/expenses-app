import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should generate an addExpense action generator', () => {
    const expense = {
        description: 'Rent',
        note: 'This month\'s rent',
        amount: 4500,
        createdAt: 4833200
    }
    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should generate an addExpense action generator using default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should generate removeExpense action generator', () => {
    const action = removeExpense({id: '47329870'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '47329870'
    });
});

test('should generate editExpense action generator', () => {
    const action = editExpense('3456789', { 
        description: 'Changed', 
        amount: 23});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '3456789',
        expense: { 
            description: 'Changed', 
            amount: 23
        }
    });
});