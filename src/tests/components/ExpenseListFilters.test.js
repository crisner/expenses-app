import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters} 
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount} />);
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render with alternate filters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle set text filter', () => {
    const value = 'bills';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date filter', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount filter', () => {
    const value = 'amount';
    // wrapper.setProps({
    //     filters: altFilters
    // });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});