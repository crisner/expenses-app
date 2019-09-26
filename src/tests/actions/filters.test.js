import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should generate setTextFilter action', () => {
    const action = setTextFilter('Bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Bill'
    });
});

test('should generate setTextFilter action using default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sortByAmount action', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sortByDate action', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate setStartDate action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate setEndDate action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});