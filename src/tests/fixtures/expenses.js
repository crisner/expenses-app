import moment from 'moment';

export default [
    {
        id: '0',
        description: 'Downpayment',
        note: 'For renting the new apartment',
        amount: 25000,
        createdAt: moment(0).subtract(5, 'days')
    },
    {
        id: '1',
        description: 'Rent',
        note: 'Starting rent for the month',
        amount: 6000,
        createdAt: moment(0).add(5, 'days')
    },
    {
        id: '2',
        description: 'Phone bill',
        note: '',
        amount: 200,
        createdAt: moment(0)
    }
]
