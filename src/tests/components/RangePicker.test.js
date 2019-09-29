import React from 'react';
import { shallow } from 'enzyme';
import { RangePicker } from '../../components/RangePicker';
import {filters} from '../fixtures/filters';
import moment from 'moment';

let setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<RangePicker 
        filters={filters} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} />);
});

test('should render range picker', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle setStartDate', () => {
    const date = moment(0).add(4, 'months').toDate();
    wrapper.find('DayPickerInput').at(0).prop('onDayChange')(date);
    expect(setStartDate).toHaveBeenLastCalledWith(date);
    expect(wrapper.state('from')).toBe(date);
});

test('should handle setEndDate', () => {
    const date = moment(0).add(8, 'months').toDate();
    wrapper.find('DayPickerInput').at(1).prop('onDayChange')(date);
    expect(setEndDate).toHaveBeenLastCalledWith(date);
    expect(wrapper.state('to')).toBe(date);
});