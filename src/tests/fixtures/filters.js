import moment from 'moment';

export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: 'Bill',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(6, 'days')
}