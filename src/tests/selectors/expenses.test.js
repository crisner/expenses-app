import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('generate expenses that match text filter', () => {
    const filters = {
        text: 't',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    expect(visibleExpenses).toEqual([expenses[1], expenses[0]]);
});

test('generate expenses that match the startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    expect(visibleExpenses).toEqual([expenses[1], expenses[2]]);
});

test('generate expenses that match the endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    expect(visibleExpenses).toEqual([expenses[2], expenses[0]]);
});

test('generate expenses sorted by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    expect(visibleExpenses).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('generate expenses with default filters sorted by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    expect(visibleExpenses).toEqual([expenses[1],  expenses[2], expenses[0]]);
});
