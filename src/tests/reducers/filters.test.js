import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default filters', () => {
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(undefined,  { type: '@@INIT' });
    expect(state).toEqual(defaultState);
});

test('should set text filter', () => {
    const prevState = {
        text: 'Bills',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const text = 'rent';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(prevState, action);
    expect(state.text).toBe(text);

});

test('should set sortBy filter to amount', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    };
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('amount');

});

test('should set sortBy filter to date', () => {
    const prevState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(prevState, action);
    expect(state.sortBy).toBe('date');
});

test('should set start date', () => {
    const date = moment(0).add(5, 'days');
    const action = {
        type: 'SET_START_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(date);
});

test('should set end date', () => {
    const date = moment().add(2, 'months');
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(date);
});